const SuggestionsList = ({ tags = [], highlightIndex = -1, onClick }) => {
	if (!tags || tags.length === 0) return null;
	return (
		<ul id="tag-suggestions" role="listbox" className="absolute z-50 left-0 right-0 mt-1 max-h-48 overflow-auto bg-white border rounded shadow-lg text-black">
			{tags.map((tag, idx) => (
				<li
					key={tag.tagId}
					role="option"
					aria-selected={highlightIndex === idx}
					onMouseDown={(e) => e.preventDefault()}
					onClick={() => onClick(tag)}
					className={`cursor-pointer px-3 py-2 hover:bg-gray-100 flex items-center ${highlightIndex === idx ? "bg-gray-100" : ""}`}
				>
					<span>{tag.name}</span>
				</li>
			))}
		</ul>
	);
};

export default SuggestionsList;
