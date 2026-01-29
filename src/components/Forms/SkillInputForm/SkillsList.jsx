import { IoCloseCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const SkillsList = ({ skills = [], removeSkill, disabled = false }) => {
	if (!skills || skills.length === 0) return null;

	return (
		<div className="flex flex-wrap gap-2 gap-y-3">
			<AnimatePresence>
				{skills.map((skill) => (
					<motion.span
						key={`new-${skill}`}
						initial={{ opacity: 0, scale: 0.9, x: -20 }}
						animate={{ opacity: 1, scale: 1, x: 0 }}
						exit={{ opacity: 0, scale: 0.9, x: 20 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						layout
						className="flex items-center px-3 pt-0.5 pb-1 bg-purple-500/30 text-purple-300 border border-purple-500/30 rounded-full shadow-sm"
					>
						{skill}
						{!disabled && (
							<button type="button" className="ml-1.5 text-purple-300 hover:text-white transition duration-150 ease-in-out" onClick={() => removeSkill(skill)} aria-label={`Remove ${skill}`}>
								<IoCloseCircleOutline className="text-lg mt-0.5" title="Remove skill" />
							</button>
						)}
					</motion.span>
				))}
			</AnimatePresence>
		</div>
	);
};

export default SkillsList;
