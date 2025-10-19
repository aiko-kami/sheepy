"use client";

import { useState } from "react";
import { DateTime } from "luxon";

import Status from "@/components/ProjectEdit/StatusTab/Status";
import SideMenu from "@/components/ProjectEdit/SideMenu";

import { handleFormChange } from "@/utils/formHandlers";

const FormStatus = ({ projectId, statusHistory, status, statusBgColor, startDate, visibility }) => {
	const [formInputs, setFormInputs] = useState({
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
				<div className="lg:grid grid-cols-5">
					<div className="p-2 mb-6">
						{/* Project Status and links */}
						<SideMenu projectId={projectId} status={status} statusBgColor={statusBgColor} />
					</div>
					<div className="col-span-4 lg:px-2 lg:pl-10">
						{/* Project status information */}
						<Status formInputs={formInputs} onChange={onChange} statusHistory={statusHistory} />
					</div>
				</div>
			</form>
		</>
	);
};
export default FormStatus;
