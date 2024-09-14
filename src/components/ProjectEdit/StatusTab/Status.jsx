"use client";

import { useState } from "react";

import StatusDetails from "@/components/ProjectEdit/StatusTab/StatusDetails";

const Status = ({ project }) => {
	const [formState, setFormState] = useState({
		projectStatus: project.status,
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
		closeModalReport();
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project status */}
				<div className="mb-8 lg:mb-12">
					<StatusDetails formState={formState} onChange={onChange} />
				</div>
			</form>
		</>
	);
};
export default Status;
