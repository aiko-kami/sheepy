import { IoCloseCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar } from "@/components/Badges/Avatar";
import talentNeededProfilePicture from "@/public/images/talentNeededProfilePicture.png";

const TalentsList = ({ talentsNeeded = [], removeTalentNeeded, disabled = false }) => {
	if (!talentsNeeded || talentsNeeded.length === 0) return null;

	return (
		<div className="flex flex-col gap-2">
			<AnimatePresence mode="popLayout">
				{talentsNeeded.map((talentNeeded, index) => (
					<motion.div
						key={`${talentNeeded.talent}-${index}`}
						initial={{ opacity: 0, scale: 0.9, y: -10 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: -10 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						layout
						className="flex items-center px-2 py-3 rounded-lg bg-gradient-to-r from-indigo-900 to-blue-900 shadow-sm"
					>
						{!disabled && (
							<button title="Remove talent" type="button" className="text-gray-300 ml-1 mr-5 hover:text-white transition duration-150 ease-in-out" onClick={() => removeTalentNeeded(talentNeeded)}>
								<IoCloseCircleOutline className="text-2xl" />
							</button>
						)}
						<span className="flex items-center ml-3">
							<div className="mr-3">
								<Avatar img={talentNeededProfilePicture} size={"lg"} alt={"Talent profile picture"} />
							</div>
							<div className="flex flex-col">
								<span className="font-semibold">{talentNeeded.talent}</span>
								<p className="text-sm">{talentNeeded.description}</p>
							</div>
						</span>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
};

export default TalentsList;
