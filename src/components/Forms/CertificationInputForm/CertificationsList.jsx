import { IoCloseCircleOutline, IoRibbonOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const CertificationsList = ({ certifications = [], removeCertification, disabled = false }) => {
	if (!certifications || certifications.length === 0) return null;

	return (
		<div className="flex flex-col gap-3 max-w-110">
			<AnimatePresence>
				{certifications.map((certification) => (
					<motion.span
						key={`new-${certification}`}
						initial={{ opacity: 0, scale: 0.9, x: -20 }}
						animate={{ opacity: 1, scale: 1, x: 0 }}
						exit={{ opacity: 0, scale: 0.9, x: 20 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						className="flex items-center justify-between pl-2 pr-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full shadow-sm"
					>
						<div className="flex items-center">
							<IoRibbonOutline className="mr-1.5 text-lg text-amber-100" />
							{certification}
						</div>
						{!disabled && (
							<button
								type="button"
								className="ml-1.5 text-amber-300 hover:text-white transition duration-150 ease-in-out"
								onClick={() => removeCertification(certification)}
								aria-label={`Remove ${certification}`}
							>
								<IoCloseCircleOutline className="text-lg mt-0.5" title="Remove certification" />
							</button>
						)}
					</motion.span>
				))}
			</AnimatePresence>
		</div>
	);
};

export default CertificationsList;
