import { Button } from "@/components/Buttons/Buttons";
import { Avatar } from "@/components/Badges/Avatar";

import talentNeededProfilePicture from "@/public/images/userTalentNeeded.jpg";

const RemoveTalentNeededModal = ({ talentNeeded, onConfirm, closeModalRemove }) => {
	return (
		<>
			{/* Confirmation */}
			<h2 className="text-lg text-center mb-6">Are you sure you want to remove the following talent?</h2>
			<div className="mb-10 max-w-120 mx-auto flex items-center px-2 py-3 rounded-lg bg-gradient-to-r from-indigo-900 to-blue-900 shadow-sm">
				<span className="flex items-center ml-3">
					<div className="mr-3">
						<Avatar img={talentNeededProfilePicture} size={"std"} alt={"Talent profile picture"} />
					</div>
					<div className="flex flex-col">
						<span className="font-semibold">{talentNeeded.talent}</span>
						<p className="text-sm">{talentNeeded.description}</p>
					</div>
				</span>
			</div>

			{/* Buttons */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
				<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
					<Button
						btnProps={{
							type: "button",
							action: closeModalRemove,
						}}
					>
						Cancel
					</Button>
				</div>
				<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
					<Button
						btnProps={{
							type: "button",
							action: onConfirm,
							btnColor: "red",
						}}
					>
						Remove talent
					</Button>
				</div>
			</div>
		</>
	);
};

export default RemoveTalentNeededModal;
