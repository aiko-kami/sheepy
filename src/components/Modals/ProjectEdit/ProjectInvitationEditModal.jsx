"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import { Avatar } from "@/components/Badges/Avatar";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import { SelectRoundedField } from "@/components/Forms/SelectField";

import { handleFormChange } from "@/utils/formHandlers";

const ProjectInvitationEditModal = ({ closeModalEdit, invitation, projectId, talentsNeeded }) => {
	console.log("🚀 ~ ProjectInvitationEditModal ~ talentsNeeded:", talentsNeeded);

	const [formInputs, setFormInputs] = useState({
		joinProjectId: invitation.joinProjectId,
		userId: invitation.receiver.userId,
		projectId: projectId,
		selectedRole: invitation.talent,
		message: invitation.message,
	});

	const onChange = handleFormChange(setFormInputs);

	const onSaveDraft = (event) => {
		event.preventDefault();
		// Handle form save draft
		console.log("🚀 ~ onSaveDraft ~ form data:", formInputs);
		closeModalEdit();
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The message has been sent:", formInputs);
		closeModalEdit();
	};

	const optionsList = talentsNeeded.map((tal) => ({
		value: tal.talent,
		option: tal.talent,
	}));

	return (
		<>
			{/* joinProject user */}
			<div className="mb-6 xl:flex items-center">
				<h2 className="text-lg text-gray-400 font-semibold mb-1">To:</h2>
				<div className="flex items-center pl-1 xl:pl-4">
					<div className="mr-2">
						<Avatar img={invitation.receiver.profilePicture?.link} size={"sm"} alt={"user profile picture"} />
					</div>
					<div className="font-semibold">{invitation.receiver.username}</div>
				</div>
			</div>

			{/* Role */}
			<div className="mb-6">
				<SelectRoundedField inputName="selectedRole" possibleValues={optionsList} inputValue={formInputs.selectedRole} label="Talent requested:" onChange={onChange} />
			</div>

			{/* Send message form */}
			<form onSubmit={onSubmit}>
				<div className="mb-8">
					<TextAreaField
						label="Invitation message:"
						labelStyle="block mb-2"
						inputName="message"
						inputValue={formInputs.message}
						onChange={onChange}
						placeholder="Write a message explaining the role and why the user would be a great fit for this project..."
						maxLength={1000}
						rows="6"
						required={true}
					/>
				</div>
				{/* Buttons */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
					<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
						<Button
							btnProps={{
								type: "button",
								btnColor: "grayOutline",
								action: onSaveDraft,
							}}
						>
							Save draft
						</Button>
					</div>
					<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "green",
							}}
						>
							Send invitation
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default ProjectInvitationEditModal;
