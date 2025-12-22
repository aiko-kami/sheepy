"use client";
import { useState, useRef, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

import Modal from "@/components/Modals/Modal";
import RemoveTagModal from "@/components/Modals/ProjectEdit/RemoveTagModal";
import InputField from "@/components/Forms/InputField";
import SuggestionsList from "@/components/Forms/TagInputForm/SuggestionsList";
import TagsList from "@/components/Forms/TagInputForm/TagsList";
import AddTagButton from "@/components/Forms/TagInputForm/AddTagButton";
import { showSuccessToast, showErrorToast } from "@/utils/toast";

import { ApiPostAddTag, ApiDeleteTag } from "@/lib/api/projectEditionServer";

const TagInputForm = ({ projectId, tags = [], tagsList = [], disabled = false }) => {
	const router = useRouter();

	const wrapperRef = useRef(null);
	const inputRef = useRef(null);

	const [query, setQuery] = useState("");
	const [openSuggestions, setOpenSuggestions] = useState(false);
	const [highlightIndex, setHighlightIndex] = useState(-1);

	const [projectTagsExisting, setProjectTagsExisting] = useState(tags || []);
	const [projectTagsNew, setProjectTagsNew] = useState([]);
	const [modalDisplayRemove, setModalDisplayRemove] = useState(false);
	const [tagToRemove, setTagToRemove] = useState(null);

	const MAX_TAGS = 8;
	const safeTagsList = Array.isArray(tagsList) ? tagsList : [];

	const normalize = (s) => (s || "").trim().toUpperCase();

	// Defensive defaults
	const existingTags = Array.isArray(projectTagsExisting) ? projectTagsExisting : [];

	// projectTagsNew is an array of strings (names only)
	const newTags = Array.isArray(projectTagsNew) ? projectTagsNew : [];

	const selectedExistingIds = useMemo(() => new Set(existingTags.map((t) => t.tagId)), [existingTags]);

	const selectedNewNames = useMemo(() => new Set(newTags.map((n) => normalize(n))), [newTags]);

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
	const addExistingTag = async (tagObject) => {
		if (!tagObject) return;
		if (totalSelectedCount >= MAX_TAGS) {
			showErrorToast(`You can only add up to ${MAX_TAGS} tags`);
			return;
		}
		if (selectedExistingIds.has(tagObject.tagId) || selectedNewNames.has(normalize(tagObject.name))) {
			showErrorToast("This tag is already present in the list");
			return;
		}

		const payload = {
			tagId: tagObject.tagId,
		};

		const result = await ApiPostAddTag(projectId, payload);
		if (!result.ok) {
			showErrorToast(result.message || "Failed to add tag.");
			return;
		}

		setProjectTagsExisting((prev) => [...prev, result.data.tag]);

		setQuery("");
		setOpenSuggestions(false);
		setHighlightIndex(-1);
		if (inputRef.current) inputRef.current.focus();
		showSuccessToast("The tag has been added.");
	};

	// Add new tag (only store the tagName)
	const addNewTag = async (name) => {
		const tagTrimmed = String(name || "").trim();
		if (!tagTrimmed) {
			showErrorToast("Please enter a tag name");
			return;
		}
		if (totalSelectedCount >= MAX_TAGS) {
			showErrorToast(`You can only add up to ${MAX_TAGS} tags`);
			return;
		}
		const cap = normalize(tagTrimmed);
		if (selectedNewNames.has(cap) || existingTags.some((t) => normalize(t.name) === cap)) {
			showErrorToast("This tag is already present in the list");
			return;
		}

		const payload = {
			tagName: tagTrimmed,
		};

		const result = await ApiPostAddTag(projectId, payload);
		if (!result.ok) {
			showErrorToast(result.message || "Failed to add tag.");
			return;
		}

		setProjectTagsExisting((prev) => [...prev, result.data.tag]);

		setQuery("");
		setOpenSuggestions(false);
		setHighlightIndex(-1);
		if (inputRef.current) inputRef.current.focus();
		showSuccessToast("The tag has been added.");
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

	const closeModalRemove = () => {
		setTagToRemove(null);
		setModalDisplayRemove(false);
	};

	// Remove: handles both existing (by tagId) and new (by name)
	const removeTag = (tag) => {
		// Basic validations with early returns
		if (!tag) {
			showErrorToast("Please select a tag to remove");
			return;
		}

		setTagToRemove(tag);
		setModalDisplayRemove(true);
	};

	const confirmRemoveTag = async () => {
		if (!tagToRemove) return;

		const payload = {
			tagId: tagToRemove.tagId,
		};

		const result = await ApiDeleteTag(projectId, payload);
		if (!result.ok) {
			showErrorToast(result.message || "Failed to remove tag.");
			return;
		}

		setProjectTagsExisting((prev) => prev.filter((t) => t.tagId !== tagToRemove.tagId));

		setTagToRemove(null);
		setModalDisplayRemove(false);
		showSuccessToast("The tag has been removed.");
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

	// Build unified list to show in TagList: existing objects + new name strings mapped to objects with _isNew flag
	const unifiedTagsList = [...existingTags.map((t) => ({ ...t, _isNew: false })), ...newTags.map((n) => ({ name: n, _isNew: true }))];

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

			<TagsList tags={unifiedTagsList} removeTag={removeTag} disabled={disabled} />

			{!disabled && (
				<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} closeModalWithBackground={closeModalRemove} modalSize={"sm"} modalTitle={"Remove tag"}>
					<RemoveTagModal tag={tagToRemove} onConfirm={confirmRemoveTag} closeModalRemove={closeModalRemove} />
				</Modal>
			)}
		</>
	);
};

export default TagInputForm;
