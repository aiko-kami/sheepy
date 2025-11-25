"use client";

import { useState } from "react";
import { DateTime } from "luxon";

import Status from "@/components/ProjectEdit/StatusTab/Status";

import { handleFormChange } from "@/utils/formHandlers";

const FormStatus = ({ projectId, statusHistory, status, startDate, visibility, userPermissions }) => {
	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		projectStatus: status || "",
		projectStartDate: startDate ? new Date(startDate) : null,
		projectVisibility: visibility || "",
		statusReason: "",
	});

	const onChange = handleFormChange(setFormInputs);

	const handleStartDateChange = (date) => {
		setFormInputs((prev) => ({ ...prev, projectStartDate: date }));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formInputs);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project status information */}
				<Status formInputs={formInputs} onChange={onChange} handleStartDateChange={handleStartDateChange} statusHistory={statusHistory} userPermissions={userPermissions} />
			</form>
		</>
	);
};
export default FormStatus;
