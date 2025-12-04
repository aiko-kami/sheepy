"use client";

import { useState } from "react";
import Status from "@/components/ProjectEdit/StatusTab/Status";
import { handleFormChange } from "@/utils/formHandlers";

import { ApiPostUpdateProjectStatus, ApiPostUpdateProjectVisibility } from "@/lib/api/projectEditionServer";

import { showSuccessToast, showErrorToast } from "@/utils/toast";

const FormStatus = ({ projectId, statusHistory, status, statusesList, startDate, visibility, userPermissions }) => {
	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		statusId: status.statusId || {},
		projectStartDate: startDate ? new Date(startDate) : null,
		projectVisibility: visibility || "",
		statusReason: "",
	});

	const onChange = handleFormChange(setFormInputs);

	const handleStartDateChange = (date) => {
		setFormInputs((prev) => ({ ...prev, projectStartDate: date }));
	};

	const onSubmit = async (event) => {
		event.preventDefault();

		const formAction = event.nativeEvent.submitter?.value;

		try {
			if (formAction === "submit-status") {
				const payload = {
					newStatusId: formInputs.statusId,
					statusReason: formInputs.statusReason || "",
				};

				const result = await ApiPostUpdateProjectStatus(projectId, payload);

				if (!result.ok) {
					showErrorToast(result.message || "Failed to update project location.");
					return;
				}
				showSuccessToast("The project status has been updated.");
			} else if (formAction === "submit-visibility") {
				const payload = {};
				if (userPermissions.canEditVisibility) {
					payload.visibility = formInputs.projectVisibility;
				}
				if (userPermissions.canEditStartDate) {
					payload.startDate = formInputs.projectStartDate || null;
				}
				const result = await ApiPostUpdateProjectVisibility(projectId, payload);

				if (!result.ok) {
					showErrorToast(result.message || "Failed to update project location.");
					return;
				}
				showSuccessToast("The project has been updated.");
			}
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project status information */}
				<Status formInputs={formInputs} onChange={onChange} handleStartDateChange={handleStartDateChange} statusHistory={statusHistory} statusesList={statusesList} userPermissions={userPermissions} />
			</form>
		</>
	);
};
export default FormStatus;
