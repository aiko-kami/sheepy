"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/Buttons/Buttons";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import { SelectRoundedField } from "@/components/Forms/SelectField";

import { handleFormChange } from "@/utils/formHandlers";

import { showSuccessToast, showErrorToast } from "@/utils/toast";

import { ApiPostSaveDraftRequest, ApiPostSendRequest } from "@/lib/api/joinProjectRequest";
import { ERRORS, SUCCESS } from "@/lib/constants";

const ProjectApplicationModal = ({ closeModal, talentsNeeded = [], roleSelected, projectId }) => {
	const router = useRouter();

	const optionsList = talentsNeeded.map((talent) => ({
		value: talent.talent,
		option: talent.talent,
	}));

	const [formInputs, setFormInputs] = useState({
		selectedRole: roleSelected || optionsList[0]?.value || "",
		message: "",
	});

	const handleSaveDraft = async (event) => {
		event.preventDefault();

		const message = (formInputs.message || "").trim();
		const talent = formInputs.selectedRole;

		// Basic validations with early returns
		if (!talent) return showErrorToast(ERRORS.PROJECT_REQUESTS.EMPTY_ROLE);
		if (message.length > 4000) return showErrorToast(ERRORS.PROJECT_REQUESTS.MAX_LENGTH);

		try {
			const payload = {
				talent,
				message,
				projectId,
			};

			const result = await ApiPostSaveDraftRequest(payload);
			if (!result.ok) {
				showErrorToast(result.message || ERRORS.PROJECT_REQUESTS.SUBMIT_FAILED);
				return;
			}
			showSuccessToast(SUCCESS.PROJECT_REQUESTS.SAVE_DRAFT_SUCCESS);
			closeModal();
			router.refresh();
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const message = (formInputs.message || "").trim();
		const talent = formInputs.selectedRole;

		// Basic validations with early returns
		if (!message) return showErrorToast(ERRORS.PROJECT_REQUESTS.EMPTY_MESSAGE);
		if (!talent) return showErrorToast(ERRORS.PROJECT_REQUESTS.EMPTY_ROLE);
		if (message.length > 4000) return showErrorToast(ERRORS.PROJECT_REQUESTS.MAX_LENGTH);

		try {
			const payload = {
				talent,
				message,
				projectId,
			};

			const result = await ApiPostSendRequest(payload);
			if (!result.ok) {
				showErrorToast(result.message || ERRORS.PROJECT_REQUESTS.SUBMIT_FAILED);
				return;
			}
			showSuccessToast(SUCCESS.PROJECT_REQUESTS.SUBMIT_SUCCESS);
			closeModal();
			router.refresh();
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	const onChange = handleFormChange(setFormInputs);

	return (
		<>
			<form onSubmit={handleSubmit}>
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
					<Button btnProps={{ type: "button", btnColor: "grayOutline", action: handleSaveDraft }}>Save draft</Button>
					<Button btnProps={{ type: "submit" }}>Send my application</Button>
				</div>
			</form>
		</>
	);
};

export default ProjectApplicationModal;
