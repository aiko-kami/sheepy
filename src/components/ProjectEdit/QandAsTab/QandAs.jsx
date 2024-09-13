"use client";

import { useState } from "react";

import QandAsDetails from "@/components/ProjectEdit/QandAsTab/QandAsDetails";

const QandAs = ({ project }) => {
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
				<QandAsDetails formState={formState} onChange={onChange} />
			</form>
		</>
	);
};
export default QandAs;
