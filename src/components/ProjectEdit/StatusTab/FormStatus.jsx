"use client";

import { useState } from "react";
import { DateTime } from "luxon";

import Status from "@/components/ProjectEdit/StatusTab/Status";

import { handleFormChange } from "@/utils/formHandlers";

const FormStatus = ({ projectId, statusHistory, status, startDate, visibility }) => {
	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		projectStatus: status || "",
		projectStartDate: DateTime.fromISO(startDate) || null,
		projectVisibility: visibility || "",
		statusReason: "",
	});

	const onChange = handleFormChange(setFormInputs);

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formInputs);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project status information */}
				<Status formInputs={formInputs} onChange={onChange} statusHistory={statusHistory} />
			</form>
		</>
	);
};
export default FormStatus;
