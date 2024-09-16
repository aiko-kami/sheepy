"use client";

import { useState } from "react";

import StatusDetails from "@/components/ProjectEdit/StatusTab/StatusDetails";
import StatusHistory from "@/components/ProjectEdit/StatusTab/StatusHistory";

const Status = ({ project }) => {
	const [formState, setFormState] = useState({
		projectStatus: project.status.name,
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
				{/* Project status */}
				<div className="mb-8 lg:mb-10">
					<StatusDetails formState={formState} onChange={onChange} />
				</div>
				{/* Project status history */}
				<StatusHistory status={project.status} />
			</form>
		</>
	);
};
export default Status;
