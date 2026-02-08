"use client";
import { useState, useRef, useMemo, useEffect } from "react";

import InputField from "@/components/Forms/InputField";
import SuggestionsList from "@/components/Forms/TagInputField/SuggestionsList";
import TagsList from "@/components/Forms/TagInputField/TagsList";
import AddTagButton from "@/components/Forms/TagInputField/AddTagButton";
import { showErrorToast } from "@/utils/toast";
import { ERRORS } from "@/lib/constants";

const TagInputField = ({ formInputs, setFormInputs, tagsList = [], disabled = false }) => {
	const wrapperRef = useRef(null);
	const inputRef = useRef(null);

	const [query, setQuery] = useState("");
	const [openSuggestions, setOpenSuggestions] = useState(false);
	const [highlightIndex, setHighlightIndex] = useState(-1);

	const MAX_TAGS = 8;
	const safeTagsList = Array.isArray(tagsList) ? tagsList : [];

	const normalize = (s) => (s || "").trim().toUpperCase();

	// Defensive defaults
	const existingTags = Array.isArray(formInputs.projectTagsExisting) ? formInputs.projectTagsExisting : [];
	// projectTagsNew is an array of strings (names only)
	const newTags = Array.isArray(formInputs.projectTagsNew) ? formInputs.projectTagsNew : [];

	const selectedExistingIds = useMemo(() => new Set(existingTags.map((t) => t.tagId)), [existingTags]);
	const selectedNewNames = useMemo(() => new Set(newTags.map((t) => normalize(t.name))), [newTags]);

	// Suggestions: exclude tags already selected (either existing by id or new by name)
	const suggestions = useMemo(() => {
		const q = normalize(query);
		if (!q) {
			return safeTagsList.filter((t) => !selectedExistingIds.has(t.tagId) && !selectedNewNames.has(normalize(t.name))).slice(0, 10);
		}
		return safeTagsList.filter((t) => !selectedExistingIds.has(t.tagId) && !selectedNewNames.has(normalize(t.name)) && normalize(t.name).includes(q)).slice(0, 10);
	}, [safeTagsList, query, selectedExistingIds, selectedNewNames]);

	const findExactSuggestion = () => {
		const q = normalize(query);
		if (!q) return null;
		return safeTagsList.find((t) => normalize(t.name) === q && !selectedExistingIds.has(t.tagId) && !selectedNewNames.has(q)) ?? null;
	};

	const totalSelectedCount = existingTags.length + newTags.length;

	// Add existing tag object (from suggestions)
	const addExistingTag = (tagObject) => {
		if (!tagObject) return;
		if (totalSelectedCount >= MAX_TAGS) {
			showErrorToast(ERRORS.PROJECT_TAGS.MAXIMUM_LIMIT);
			return;
		}
		if (selectedExistingIds.has(tagObject.tagId) || selectedNewNames.has(normalize(tagObject.name))) {
			showErrorToast(ERRORS.PROJECT_TAGS.DUPLICATE_TAG);
			return;
		}

		setFormInputs((prev) => ({
			...prev,
			projectTagsExisting: [
				...(prev.projectTagsExisting || []),
				{
					name: tagObject.name,
					description: tagObject.description ?? "",
					link: tagObject.link,
					tagId: tagObject.tagId,
				},
			],
		}));

		setQuery("");
		setOpenSuggestions(false);
		setHighlightIndex(-1);
		if (inputRef.current) inputRef.current.focus();
	};

	// Add new tag (only store the tagName)
	const addNewTag = (name) => {
		const trimmed = String(name || "").trim();
		if (!trimmed) {
			showErrorToast(ERRORS.PROJECT_TAGS.EMPTY_INPUT);
			return;
		}
		if (totalSelectedCount >= MAX_TAGS) {
			showErrorToast(ERRORS.PROJECT_TAGS.MAXIMUM_LIMIT);
			return;
		}
		const cap = normalize(trimmed);
		if (selectedNewNames.has(cap) || existingTags.some((t) => normalize(t.name) === cap)) {
			showErrorToast(ERRORS.PROJECT_TAGS.DUPLICATE_TAG);
			return;
		}

		const newTag = {
			name: trimmed,
			description: "",
		};

		setFormInputs((prev) => ({
			...prev,
			projectTagsNew: [...(prev.projectTagsNew || []), newTag],
		}));

		setQuery("");
		setOpenSuggestions(false);
		setHighlightIndex(-1);
		if (inputRef.current) inputRef.current.focus();
	};

	// Generic add: prefer suggestion exact match, else create new name
	const addTag = () => {
		const exact = findExactSuggestion();
		if (exact) {
			addExistingTag(exact);
			return;
		}
		if (suggestions.length === 1 && normalize(suggestions[0].name) === normalize(query)) {
			addExistingTag(suggestions[0]);
			return;
		}
		addNewTag(query);
	};

	// Remove: handles both existing (by tagId) and new (by name)
	const removeTag = (tagToRemove) => {
		if (!tagToRemove) return;
		if (tagToRemove.tagId) {
			setFormInputs((prev) => ({
				...prev,
				projectTagsExisting: (prev.projectTagsExisting || []).filter((t) => t.tagId !== tagToRemove.tagId),
			}));
		} else {
			const cap = normalize(tagToRemove.name);
			setFormInputs((prev) => ({
				...prev,
				projectTagsNew: (prev.projectTagsNew || []).filter((t) => normalize(t.name) !== cap),
			}));
		}
	};

	// Handlers
	const onInputChange = (e) => {
		setQuery(e.target.value);
		setOpenSuggestions(true);
		setHighlightIndex(-1);
	};

	const onInputKeyDown = (e) => {
		if (e.key === "ArrowDown") {
			e.preventDefault();
			if (!openSuggestions) setOpenSuggestions(true);
			setHighlightIndex((hi) => Math.min(hi + 1, suggestions.length - 1));
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			setHighlightIndex((hi) => Math.max(hi - 1, 0));
		} else if (e.key === "Enter") {
			e.preventDefault();
			if (openSuggestions && highlightIndex >= 0 && highlightIndex < suggestions.length) {
				addExistingTag(suggestions[highlightIndex]);
				return;
			}
			addTag();
		} else if (e.key === "Escape") {
			setOpenSuggestions(false);
			setHighlightIndex(-1);
		}
	};

	// Outside-click handler (pointerdown capture + composedPath) to not display the suggestions
	useEffect(() => {
		const handleOutsidePointer = (event) => {
			if (!wrapperRef.current) return;
			const path = event.composedPath ? event.composedPath() : null;
			if (path ? path.includes(wrapperRef.current) : wrapperRef.current.contains(event.target)) {
				return;
			}
			setOpenSuggestions(false);
			setHighlightIndex(-1);
		};

		const handleKey = (event) => {
			if (event.key === "Escape") {
				setOpenSuggestions(false);
				setHighlightIndex(-1);
				if (inputRef.current) inputRef.current.blur();
			}
		};

		document.addEventListener("pointerdown", handleOutsidePointer, true);
		document.addEventListener("keydown", handleKey, true);
		return () => {
			document.removeEventListener("pointerdown", handleOutsidePointer, true);
			document.removeEventListener("keydown", handleKey, true);
		};
	}, []);

	const unifiedTagsList = [...existingTags.map((t) => ({ ...t, _isNew: false })), ...newTags.map((t) => ({ ...t, _isNew: true }))];

	return (
		<>
			{!disabled && (
				<div className="mb-6 max-w-140 relative">
					<div className="flex items-center">
						<div className="w-full mr-2 relative" ref={wrapperRef}>
							<InputField
								inputName="projectTags"
								inputType="text"
								label="Choose a tag"
								inputValue={query}
								onChange={onInputChange}
								onKeyDown={onInputKeyDown}
								ref={inputRef}
								disabled={disabled}
								autoComplete="off"
								aria-autocomplete="list"
								aria-expanded={openSuggestions}
								aria-controls="tag-suggestions"
							/>

							{openSuggestions && suggestions.length > 0 && <SuggestionsList id="tag-suggestions" tags={suggestions} highlightIndex={highlightIndex} onClick={(t) => addExistingTag(t)} />}
						</div>

						<div className="min-w-fit">
							<AddTagButton handleAddTag={addTag} />
						</div>
					</div>
				</div>
			)}

			<TagsList tags={unifiedTagsList} handleRemoveTag={removeTag} disabled={disabled} />
		</>
	);
};

export default TagInputField;
