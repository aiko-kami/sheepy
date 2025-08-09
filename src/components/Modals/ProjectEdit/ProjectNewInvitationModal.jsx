"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import InputField from "@/components/Forms/InputField";

import { handleFormChange } from "@/utils/formHandlers";

const ProjectNewInvitationModal = ({ closeModal }) => {
	const [formInputs, setFormInputs] = useState({
		username: "",
		talent: "",
		message: "",
	});

	const onSaveDraft = (event) => {
		event.preventDefault();
		closeModal();
		// Handle form save draft
		console.log("🚀 ~ onSaveDraft ~ form data:", formInputs);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		closeModal();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ form data:", formInputs);
	};

	const onChange = handleFormChange(setFormInputs);

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Recipient */}
				<div className="mb-6 max-w-120">
					<InputField inputName="username" inputType="text" label="Recipient" inputValue={formInputs.username} onChange={onChange} />
				</div>

				{/* Talent */}
				<div className="mb-6 max-w-70">
					<InputField inputName="talent" inputType="text" label="Talent" inputValue={formInputs.talent} onChange={onChange} />
				</div>

				{/* Message */}
				<div className="relative z-0 mb-6 w-full">
					<TextAreaField
						label="Invitation message:"
						labelStyle="block mb-2"
						inputName="message"
						inputValue={formInputs.message}
						onChange={onChange}
						placeholder="Write a message explaining the role and why the user would be a great fit for this project..."
						maxLength={2000}
						rows="7"
						required={true}
					/>
				</div>

				{/* Button Send application (submit form) */}
				<div className="flex gap-8 justify-center">
					<Button btnProps={{ type: "button", btnColor: "grayBorder", action: onSaveDraft }}>Save draft</Button>
					<Button btnProps={{ type: "submit", btnColor: "green" }}>Send invitation</Button>
				</div>
			</form>
		</>
	);
};

export default ProjectNewInvitationModal;
