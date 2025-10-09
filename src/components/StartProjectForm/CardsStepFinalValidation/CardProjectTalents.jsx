import Image from "next/image";

import { IoPeople } from "react-icons/io5";

const CardProjectTalents = ({ formInputs, talentNeededProfilePicture }) => {
	return (
		<>
			{/* Project Overview Card */}
			<div className="bg-white rounded-lg shadow-lg border-0 overflow-hidden w-2/3 mx-auto">
				<div className="bg-gray-200 p-6">
					<h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
						<IoPeople className="h-6 w-6 text-blue-600" />
						Talents You Need
					</h2>
				</div>
				<div className="p-6 pe-12 space-y-4">
					<div className="flex gap-1">
						{Array.isArray(formInputs.talentsNeeded) && formInputs.talentsNeeded.length > 0 ? (
							<div className="space-y-3 w-full">
								{formInputs.talentsNeeded.map((talentNeeded, index) => (
									<div key={index} className="flex items-start gap-4 p-4 bg-sky-200 rounded-lg border border-sky-300">
										{/* Profile picture on the left */}
										<Image src={talentNeededProfilePicture} alt="talent profile picture" className="object-cover rounded-full w-12 h-12 flex-shrink-0" height={48} width={48} sizes="100vw" />
										<div className="flex flex-col">
											<span className="font-semibold text-sky-900">{talentNeeded.talent}</span>
											{talentNeeded.description && <p className="text-sm text-sky-800">{talentNeeded.description}</p>}
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="w-9/10 p-3 bg-red-100 border-l-4 border-red-500 rounded-r-md">
								<p className="text-red-700 text-sm font-medium">
									<span className="italic">Required field</span> – Please add Talents information
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default CardProjectTalents;
