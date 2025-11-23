import { IoCloseCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const TagsList = ({ tags = [], handleRemoveTag, disabled = false }) => {
	if (!tags || tags.length === 0) return null;

	return (
		<div className="flex flex-wrap gap-2 gap-y-3">
			<AnimatePresence>
				{tags.map((tag) => (
					<motion.span
						key={tag.tagId || `new-${tag.name}`}
						initial={{ opacity: 0, scale: 0.9, x: -20 }}
						animate={{ opacity: 1, scale: 1, x: 0 }}
						exit={{ opacity: 0, scale: 0.9, x: 20 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						layout
						className="flex items-center px-3 pt-0.5 pb-1 bg-gray-200 text-gray-800 rounded-full shadow-sm"
					>
						{tag.name}
						{!disabled && (
							<button type="button" className="ml-1 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out" onClick={() => handleRemoveTag(tag)} aria-label={`Remove ${tag.name}`}>
								<IoCloseCircleOutline className="text-lg" title="Remove tag" />
							</button>
						)}
					</motion.span>
				))}
			</AnimatePresence>
		</div>
	);
};

export default TagsList;
