"use client";

import { useState } from "react";
import { DateTime } from "luxon";

import Status from "@/components/ProjectEdit/StatusTab/Status";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormStatus = ({ project }) => {
	const [formState, setFormState] = useState({
		projectStatus: project.status.name || "",
		projectStartDate: DateTime.fromISO(project.startDate) || null,
		projectVisibility: project.visibility || "",
		statusReason: "",
	});

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const inputValue = type === "checkbox" ? checked : value;
		setFormState((prevState) => ({
			...prevState,
			[name]: inputValue,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formState);
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
						<Status formState={formState} onChange={onChange} status={project.status} />
					</div>
				</div>
			</form>
		</>
	);
};
export default FormStatus;
