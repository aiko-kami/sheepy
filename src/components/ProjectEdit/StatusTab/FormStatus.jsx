"use client";

import { useState } from "react";
import { DateTime } from "luxon";

import Status from "@/components/ProjectEdit/StatusTab/Status";
import SideMenu from "@/components/ProjectEdit/SideMenu";

import { handleFormChange } from "@/utils/formHandlers";

const FormStatus = ({ project }) => {
	console.log("🚀 ~ FormStatus ~ project:", project);

	const status = project?.statusInfo?.currentStatus.status;
	const statusHistory = project?.statusInfo?.statusHistory;
	const projectId = project?.projectId;

	if (!project || !status) {
		return <div className="border-2 border-slate-500 bg-slate-300 rounded-2xl py-6 px-4 text-center text-gray-500">No project data available</div>;
	}

	const [formInputs, setFormInputs] = useState({
		projectStatus: project?.statusInfo?.currentStatus.status || "",
		projectStartDate: DateTime.fromISO(project.startDate) || null,
		projectVisibility: project.visibility || "",
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
						<SideMenu project={project} />
					</div>
					<div className="col-span-4 lg:px-2 lg:pl-10">
						{/* Project status information */}
						<Status formInputs={formInputs} onChange={onChange} status={project?.statusInfo} />
					</div>
				</div>
			</form>
		</>
	);
};
export default FormStatus;
