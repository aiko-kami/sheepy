"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import { BadgeOwner } from "@/components/Badges/Badges";
import { Avatar } from "@/components/Badges/Avatar";

const RemoveMemberModal = ({ member, role, talent, startDate, closeModalRemove }) => {
	const [formState, setFormState] = useState({
		memberId: member.userId,
	});

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The member has been removed:", formState);
		closeModalRemove();
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* User profile picture and username */}
				<div className="flex items-center px-8 mb-6">
					<div className="mr-2">
						<Avatar img={member.profilePicture.link} size={"xl"} alt={"user profile picture"} />
					</div>
					<div className="font-semibold text-lg lg:whitespace-nowrap">{member.username}</div>
					{role === "owner" && (
						<div className="sm:ml-3">
							<BadgeOwner />
						</div>
					)}
				</div>

				<div className="xl:grid xl:grid-cols-2 px-8 mb-6">
					{/* User current role on the project */}
					<div className="sm:flex items-baseline xl:justify-center mb-6 xl:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Talent:</h2>
						<p className="pl-1 xl:pl-2">{talent}</p>
					</div>

					{/* User current start date on the project */}
					<div className="sm:flex items-baseline xl:justify-center mb-6 xl:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Start date:</h2>
						<p className="pl-1 xl:pl-2" title={startDate.formattedRelative ? startDate.formattedAbsolute : ""}>
							{startDate.formattedRelative ? startDate.formattedRelative : <span className="italic text-gray-300">No start date</span>}
						</p>
					</div>
				</div>

				{/* User current start date on the project */}
				<h2 className="text-lg font-semibold text-center mb-6">Are you sure you want to remove {member.username} from the project?</h2>

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
								type: "submit",
								btnColor: "red",
							}}
						>
							Remove member
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default RemoveMemberModal;
