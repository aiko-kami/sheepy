"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import { Status, Badge } from "@/components/Badges/Badges";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import { SelectRoundedField } from "@/components/Forms/SelectField";

import { handleFormChange } from "@/utils/formHandlers";

const ProjectRequestEditModal = ({ closeModalEdit, joinProject }) => {
	const [formInputs, setFormInputs] = useState({
		joinProjectId: joinProject.joinProjectId,
		projectId: joinProject.project.projectId,
		selectedRole: joinProject.talent,
		message: joinProject.message,
	});

	const onChange = handleFormChange(setFormInputs);

	const onSaveDraft = (event) => {
		event.preventDefault();
		closeModalEdit();
		// Handle form save draft
		console.log("🚀 ~ onSaveDraft ~ form data:", formInputs);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The message has been sent:", formInputs);
		closeModalEdit();
	};

	const optionsList = joinProject.project.talentsNeeded.map((talent) => ({
		value: talent.role,
		option: talent.role,
	}));

	return (
		<>
			{/* User, invitation message and talent requested */}
			<h2 className="text-xl text-center font-semibold mb-1">Request details</h2>
			<div className="mb-6 border-2 border-gray-400 rounded-md p-4 pb-5">
				{/* Project title and category */}
				<div className="lg:grid lg:grid-cols-2 justify-around mb-8">
					<div className="xl:flex items-baseline mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold">Project:</h2>
						<p className="pl-1 xl:pl-2">{joinProject.project.title}</p>
					</div>
					<div className="xl:flex justify-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Category:</h2>
						<div className="pl-1 xl:pl-2">
							<Badge badge={joinProject.project.category} size={"sm"} />
						</div>
					</div>
				</div>

				{/* joinProject status */}
				<div className="xl:flex">
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Request status:</h2>
					<p className="pl-1 xl:pl-2">
						<Status name={joinProject.status.status} size={"sm"} bgColor={joinProject.status.colors.bgColor} />
					</p>
				</div>
			</div>

			{/* Role */}
			<div className="mb-6">
				<SelectRoundedField inputName="selectedRole" possibleValues={optionsList} inputValue={formInputs.selectedRole} label="Select the role you want:" onChange={onChange} />
			</div>

			{/* Send message form */}
			<form onSubmit={onSubmit}>
				<div className="mb-8">
					<TextAreaField
						label="Describe why you want to join this project:"
						labelStyle="block mb-2"
						inputName="message"
						inputValue={formInputs.message}
						onChange={onChange}
						placeholder="Share your motivation for joining this project and introduce yourself briefly..."
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
							Send application
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default ProjectRequestEditModal;
