import { IoCloseCircleOutline } from "react-icons/io5";

const TagList = ({ tags = [], handleRemoveTag }) => {
	if (!tags || tags.length === 0) return null;
	return (
		<div className="flex flex-wrap gap-2">
			{tags.map((tag) => (
				<span key={tag.tagId || `new-${tag.name}`} className="flex items-center px-3 pt-0.5 pb-1 mt-1 bg-gray-200 text-gray-800 rounded-full">
					{tag.name}
					<button type="button" className="ml-1 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out" onClick={() => handleRemoveTag(tag)} aria-label={`Remove ${tag.name}`}>
						<IoCloseCircleOutline className="text-lg" title="Remove tag" />
					</button>
				</span>
			))}
		</div>
	);
};

export default TagList;
