"use client";

import { useState } from "react";

import MembersDetails from "@/components/ProjectEdit/MembersTab/MembersDetails";

const Members = ({ project }) => {
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
				{/* Project members */}
				<div className="mb-8 lg:mb-12">
					<MembersDetails formState={formState} onChange={onChange} />
				</div>
			</form>
		</>
	);
};
export default Members;