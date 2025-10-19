import { useState, useRef, useMemo, useEffect } from "react";
import { IoPricetag, IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";
import { showErrorToast } from "@/utils/toast";

const Tags = ({ formInputs, setFormInputs, tagsList = [] }) => {
	const wrapperRef = useRef(null);
	const inputRef = useRef(null);

	const [query, setQuery] = useState("");
	const [openSuggestions, setOpenSuggestions] = useState(false);
	const [highlightIndex, setHighlightIndex] = useState(-1); // for keyboard nav

	const MAX_TAGS = 8;
	const safeTagsList = Array.isArray(tagsList) ? tagsList : [];

	const normalize = (s) => (s || "").trim().toUpperCase();

	// Selected tagIds / names for quick lookup
	const selectedIds = useMemo(() => new Set((formInputs.projectTags || []).map((t) => t.tagId)), [formInputs.projectTags]);
	const selectedNames = useMemo(() => new Set((formInputs.projectTags || []).map((t) => normalize(t.name))), [formInputs.projectTags]);

	// Suggestions: filter tagsList by query and exclude already selected
	const suggestions = useMemo(() => {
		const q = normalize(query);
		if (!q) {
			return safeTagsList.filter((t) => !selectedIds.has(t.tagId)).slice(0, 10);
		}
		return safeTagsList.filter((t) => !selectedIds.has(t.tagId) && normalize(t.name).includes(q)).slice(0, 10);
	}, [safeTagsList, query, selectedIds]);

	// Helper: find exact match (available and not selected)
	const findExactMatch = () => {
		const q = normalize(query);
		if (!q) return null;
		return safeTagsList.find((t) => normalize(t.name) === q && !selectedIds.has(t.tagId)) ?? null;
	};

	// Add tag object (must come from tagsList)
	const addTagObject = (tagObject) => {
		if (!tagObject) {
			showErrorToast("Please select a tag from the suggestions.");
			return;
		}
		if ((formInputs.projectTags || []).length >= MAX_TAGS) {
			showErrorToast(`You can only add up to ${MAX_TAGS} tags.`);
			return;
		}
		if (selectedIds.has(tagObject.tagId)) {
			showErrorToast("This tag is already present in the list.");
			return;
		}

		setFormInputs((prev) => ({
			...prev,
			projectTags: [
				...(prev.projectTags || []),
				{
					name: tagObject.name,
					description: tagObject.description ?? "",
					link: tagObject.link ?? tagObject.name.toLowerCase().replace(/\s+/g, "-"),
					tagId: tagObject.tagId,
				},
			],
		}));

		setQuery("");
		setOpenSuggestions(false);
		setHighlightIndex(-1);
		if (inputRef.current) inputRef.current.focus();
	};

	const handleAdd = () => {
		// Prefer exact match
		const exact = findExactMatch();
		if (exact) {
			addTagObject(exact);
			return;
		}
		// If only one suggestion, allow adding it
		if (suggestions.length === 1) {
			addTagObject(suggestions[0]);
			return;
		}

		showErrorToast("Please select a tag from the list of suggestions.");
	};

	const removeTag = (tagToRemove) => {
		setFormInputs((prevState) => ({
			...prevState,
			projectTags: (prevState.projectTags || []).filter((tag) => tag.tagId !== tagToRemove.tagId),
		}));
	};

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
			// If a suggestion is highlighted, pick it
			if (openSuggestions && highlightIndex >= 0 && highlightIndex < suggestions.length) {
				addTagObject(suggestions[highlightIndex]);
				return;
			}
			// Otherwise try to add by exact match / single suggestion
			handleAdd();
		} else if (e.key === "Escape") {
			setOpenSuggestions(false);
			setHighlightIndex(-1);
		}
	};

	const onSuggestionClick = (tag) => {
		addTagObject(tag);
	};

	// Close when clicking outside or pressing Escape globally
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (!wrapperRef.current) return;
			if (!wrapperRef.current.contains(event.target)) {
				setOpenSuggestions(false);
				setHighlightIndex(-1);
			}
		};

		const handleKey = (event) => {
			if (event.key === "Escape") {
				setOpenSuggestions(false);
				setHighlightIndex(-1);
				if (inputRef.current) inputRef.current.blur();
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);
		document.addEventListener("keydown", handleKey);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("keydown", handleKey);
		};
	}, []);

	return (
		<div ref={wrapperRef}>
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoPricetag className="mr-2 text-2xl" />
				Project tags
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				<div className="mb-6 max-w-140 relative">
					<div className="flex items-center">
						<div className="w-full mr-2 relative">
							<InputField
								inputName="projectTags"
								inputType="text"
								label="Choose a tag"
								inputValue={query}
								onChange={onInputChange}
								onKeyDown={onInputKeyDown}
								ref={inputRef}
								autoComplete="off"
								aria-autocomplete="list"
								aria-expanded={openSuggestions}
								aria-controls="tag-suggestions"
							/>

							{/* Suggestions dropdown */}
							{openSuggestions && suggestions.length > 0 && (
								<ul id="tag-suggestions" role="listbox" className="absolute z-50 left-0 right-0 mt-1 max-h-48 overflow-auto bg-white border rounded shadow-lg text-black">
									{suggestions.map((s, idx) => (
										<li
											key={s.tagId}
											role="option"
											aria-selected={highlightIndex === idx}
											onMouseDown={(ev) => ev.preventDefault()} // prevent blur before click
											onClick={() => onSuggestionClick(s)}
											className={`cursor-pointer px-3 py-2 hover:bg-gray-100 flex justify-between items-center ${highlightIndex === idx ? "bg-gray-100" : ""}`}
										>
											<span>{s.name}</span>
											{s.description ? <small className="text-sm text-gray-500 ml-4">{s.description}</small> : null}
										</li>
									))}
								</ul>
							)}
						</div>

						<div className="min-w-fit">
							<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: handleAdd }}>
								<div className="flex items-center">
									Add tag <IoAddCircleOutline className="text-xl ml-2" />
								</div>
							</Button>
						</div>
					</div>
				</div>

				<div className="mb-8">
					{(formInputs.projectTags || []).length > 0 && (
						<div className="flex flex-wrap gap-2">
							{formInputs.projectTags.map((tag) => (
								<span key={tag.tagId} className="flex items-center px-3 pt-0.5 pb-1 mt-1 bg-gray-200 text-gray-800 rounded-full">
									{tag.name}
									<button type="button" className="ml-1 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out" onClick={() => removeTag(tag)} aria-label={`Remove ${tag.name}`}>
										<IoCloseCircleOutline className="text-lg" title="Remove tag" />
									</button>
								</span>
							))}
						</div>
					)}
				</div>

				<div className="flex justify-center">
					<Button
						btnProps={{
							type: "submit",
							btnColor: "blue",
						}}
					>
						Save project
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Tags;
