"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoAlertCircleOutline } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";
import { BadgeOwner } from "@/components/Badges/Badges";
import { Avatar } from "@/components/Badges/Avatar";
import Warning from "@/components/Errors/Warning";
import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { ApiDeleteProjectMember } from "@/lib/api/projectEditionServer";
import WARNINGS from "@/lib/constants/warnings";

const RemoveMemberModal = ({ member, projectId, role, talent, startDate, closeModalRemove }) => {
	const router = useRouter();
	const [formInputs, setFormInputs] = useState({
		memberId: member.userId,
	});

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			const payload = {
				memberId: formInputs.memberId,
			};

			const result = await ApiDeleteProjectMember(projectId, payload);
			if (!result.ok) {
				showErrorToast(result.message || "Failed to remove project member.");
				return;
			}
			showSuccessToast("The project member has been removed.");
			closeModalRemove();
			router.refresh();
		} catch (error) {
			showErrorToast(error.message);
		}
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

				{/* Warning message */}
				<div className="mb-8">
					<Warning warningInputs={WARNINGS.PROJECT_EDIT.MEMBERS} />
				</div>

				{/* Confirmation */}
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
