import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

import talentNeededProfilePicture from "@/public/images/userTalentNeeded.jpg";

const TalentsList = ({ talentsNeeded = [], removeTalentNeeded }) => {
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
						className="flex items-center p-2 pb-2.5 rounded-lg bg-gradient-to-r from-indigo-900 to-blue-900 shadow-sm"
					>
						<button title="Remove talent" type="button" className="text-gray-300 mr-8 hover:text-white transition duration-150 ease-in-out" onClick={() => removeTalentNeeded(talentNeeded.talent)}>
							<IoCloseCircleOutline className="text-2xl" />
						</button>
						<span className="flex items-center">
							<Image src={talentNeededProfilePicture} className="object-cover rounded-full w-10 h-10 mr-3" alt="talent profile picture" height={0} width={0} sizes="100vw" />
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
