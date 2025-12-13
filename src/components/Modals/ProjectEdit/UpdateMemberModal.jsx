"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DateTime } from "luxon";
import { LuUser, LuCrown, LuCheck } from "react-icons/lu";

import { Button } from "@/components/Buttons/Buttons";
import DatePickerField from "@/components/Forms/DatePickerFieldNew";
import InputField from "@/components/Forms/InputField";
import { BadgeOwner } from "@/components/Badges/Badges";
import { Avatar } from "@/components/Badges/Avatar";

import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { handleFormChange } from "@/utils/formHandlers";

import { ApiPostUpdateProjectMember } from "@/lib/api/projectEditionServer";

const UpdateMemberModal = ({ user, projectId, role, talent, startDate, closeModalUpdate }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState({
		memberId: user.userId,
		memberTalent: talent,
		memberRole: role,
		memberStartDate: startDate.formattedDate,
	});

	const onChange = handleFormChange(setFormInputs);

	const handleStartDateChange = (date) => {
		setFormInputs((prev) => ({ ...prev, memberStartDate: date }));
	};

	const handleRoleChange = (role) => {
		setFormInputs((prev) => ({ ...prev, memberRole: role }));
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			const payload = {
				memberId: formInputs.memberId,
				newTalent: formInputs.memberTalent,
				newRole: formInputs.memberRole,
				newStartDate: formInputs.memberStartDate === null ? "false" : DateTime.fromJSDate(formInputs.memberStartDate).toISODate(),
			};
			const result = await ApiPostUpdateProjectMember(projectId, payload);

			if (!result.ok) {
				showErrorToast(result.message || "Failed to update project member.");
				return;
			}
			showSuccessToast("The project member has been updated.");
			closeModalUpdate();
			router.refresh();
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* User profile picture and username */}
				<div className="md:flex items-center mb-6">
					<div className="flex items-center mb-4 md:mb-0">
						<div className="mr-2">
							<Avatar img={user.profilePicture.link} size={"xl"} alt={"user profile picture"} />
						</div>
						<div className="font-semibold text-lg lg:whitespace-nowrap">{user.username}</div>
					</div>
					{role === "owner" && (
						<>
							<div className="sm:ml-3">
								<BadgeOwner />
							</div>
						</>
					)}
				</div>

				<div className="sm:grid sm:grid-cols-1 xl:grid-cols-2 mb-10 items-end gap-20">
					{/* User talent on the project */}
					<div className="max-w-80">
						<InputField inputName="memberTalent" inputType="text" label="User talent" inputValue={formInputs.memberTalent} onChange={onChange} />
					</div>

					{/* User start date on the project with date picker */}
					<div>
						<h2 className="text-sm text-gray-400 mb-1">Start date:</h2>
						<div className="w-80 z-50">
							<DatePickerField label="Set member start date" value={formInputs.memberStartDate} onChange={handleStartDateChange} />
						</div>
					</div>
				</div>

				{/* User role on the project */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mb-12 mx-auto">
					<button
						type="button"
						onClick={() => handleRoleChange("member")}
						className={`p-6 rounded-xl border-2 transition-all text-left ${
							formInputs.memberRole === "member" ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20" : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
						}`}
					>
						<div className="flex items-start justify-between mb-3">
							<div className={`p-3 rounded-lg ${formInputs.memberRole === "member" ? "bg-blue-500/20" : "bg-slate-700"}`}>
								<LuUser className={`w-6 h-6 ${formInputs.memberRole === "member" ? "text-blue-400" : "text-slate-400"}`} />
							</div>
							{formInputs.memberRole === "member" && (
								<div className="p-1 bg-blue-500 rounded-full">
									<LuCheck className="w-4 h-4 text-white" />
								</div>
							)}
						</div>
						<h4 className={`font-semibold mb-2 ${formInputs.memberRole === "member" ? "text-white" : "text-slate-300"}`}>Project Member</h4>
						<p className="text-sm text-slate-400">Collaborate on the project, view content, and contribute to team goals</p>
					</button>

					<button
						type="button"
						onClick={() => handleRoleChange("owner")}
						className={`p-6 rounded-xl border-2 transition-all text-left ${
							formInputs.memberRole === "owner" ? "border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/20" : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
						}`}
					>
						<div className="flex items-start justify-between mb-3">
							<div className={`p-3 rounded-lg ${formInputs.memberRole === "owner" ? "bg-amber-500/20" : "bg-slate-700"}`}>
								<LuCrown className={`w-6 h-6 ${formInputs.memberRole === "owner" ? "text-amber-400" : "text-slate-400"}`} />
							</div>
							{formInputs.memberRole === "owner" && (
								<div className="p-1 bg-amber-500 rounded-full">
									<LuCheck className="w-4 h-4 text-white" />
								</div>
							)}
						</div>
						<h4 className={`font-semibold mb-2 ${formInputs.memberRole === "owner" ? "text-white" : "text-slate-300"}`}>Project Owner</h4>
						<p className="text-sm text-slate-400">Full control over project settings, members, and other features</p>
					</button>
				</div>

				{/* Buttons */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
					<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
						<Button
							btnProps={{
								type: "button",
								action: closeModalUpdate,
							}}
						>
							Close
						</Button>
					</div>
					<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "green",
							}}
						>
							Update member
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default UpdateMemberModal;
