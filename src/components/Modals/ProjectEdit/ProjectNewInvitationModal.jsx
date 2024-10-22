"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import { SelectRoundedField } from "@/components/Forms/SelectField";
import InputField from "../../Forms/InputField";

const ProjectNewInvitationModal = ({ closeModal }) => {
	const [formState, setFormState] = useState({
		username: "",
		talent: "",
		message: "",
	});

	const onSaveDraft = (event) => {
		event.preventDefault();
		closeModal();
		// Handle form save draft
		console.log("🚀 ~ onSaveDraft ~ form data:", formState);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		closeModal();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ form data:", formState);
	};

	const onChange = (event) => {
		const { name, value } = event.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Recipient */}
				<div className="mb-6 ml-4 max-w-120">
					<InputField inputName="username" inputType="text" label="Recipient" inputValue={formState.username} onChange={onChange} />
				</div>

				{/* Talent */}
				<div className="mb-6 ml-4 max-w-70">
					<InputField inputName="talent" inputType="text" label="Talent" inputValue={formState.talent} onChange={onChange} />
				</div>

				{/* Message */}
				<div className="relative z-0 mb-6 w-full">
					<TextAreaField
						label="Invitation message:"
						labelStyle="block mb-2"
						inputName="message"
						inputValue={formState.message}
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
					<Button btnProps={{ type: "submit" }}>Send inviation</Button>
				</div>
			</form>
		</>
	);
};

export default ProjectNewInvitationModal;
