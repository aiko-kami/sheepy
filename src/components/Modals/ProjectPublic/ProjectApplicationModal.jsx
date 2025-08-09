"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/Buttons/Buttons";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import { SelectRoundedField } from "@/components/Forms/SelectField";

import { handleFormChange } from "@/utils/formHandlers";

const ProjectApplicationModal = ({ closeModal, talentsNeeded, roleSelected }) => {
	const [formInputs, setFormInputs] = useState({
		selectedRole: "",
		message: "",
	});

	const optionsList = talentsNeeded.map((talent) => ({
		value: talent.role,
		option: talent.role,
	}));

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

	useEffect(() => {
		if (roleSelected) {
			setFormInputs((prevState) => ({
				...prevState,
				selectedRole: roleSelected,
			}));
		}
	}, [roleSelected]);

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Role */}
				<div className="mb-6">
					<SelectRoundedField inputName="selectedRole" possibleValues={optionsList} inputValue={formInputs.selectedRole} label="Select the role you want:" onChange={onChange} />
				</div>

				{/* Message */}
				<div className="relative z-0 mb-6 w-full">
					<TextAreaField
						label="Describe why you want to join this project:"
						labelStyle="block mb-2"
						inputName="message"
						inputValue={formInputs.message}
						onChange={onChange}
						placeholder="Share your motivation for joining this project and introduce yourself briefly..."
						maxLength={4000}
						rows="8"
						required={true}
					/>
				</div>

				{/* Button Send application (submit form) */}
				<div className="flex gap-8 justify-center">
					<Button btnProps={{ type: "button", btnColor: "grayBorder", action: onSaveDraft }}>Save draft</Button>
					<Button btnProps={{ type: "submit" }}>Send my application</Button>
				</div>
			</form>
		</>
	);
};

export default ProjectApplicationModal;
