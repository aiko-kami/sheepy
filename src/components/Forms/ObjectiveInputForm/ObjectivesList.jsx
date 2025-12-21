import { IoCloseCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const ObjectivesList = ({ objectives = [], removeObjective, disabled = false }) => {
	if (!objectives || objectives.length === 0) return null;

	return (
		<div className="flex flex-col gap-3 max-w-170">
			<AnimatePresence>
				{objectives.map((objective, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.9, y: -10 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: -10 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						layout
						className="flex items-center justify-between px-3 pt-1 pb-1.5 rounded-2xl bg-purple-100 text-purple-800 border border-purple-200 shadow-sm"
					>
						{objective}
						{!disabled && (
							<button
								type="button"
								className="ml-1 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out"
								onClick={() => removeObjective(objective)}
								aria-label={`Remove ${objective}`}
							>
								<IoCloseCircleOutline className="text-lg" title="Remove objective" />
							</button>
						)}
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};

export default ObjectivesList;
