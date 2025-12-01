"use client";

import { useState } from "react";
import Steps from "@/components/ProjectEdit/StepsTab/Steps";

const FormSteps = ({ projectId, steps, userPermissions }) => {
	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		updatedBy: steps.updatedBy,
		createdAt: steps.createdAt,
		updatedAt: steps.updatedAt,
		projectSteps: steps.stepsList,
	});

	const onChange = (updatedSteps) => {
		setFormInputs((prevState) => ({
			...prevState,
			projectSteps: updatedSteps,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formInputs);
	};

	const addStep = () => {
		const newStep = {
			id: `${(formInputs.projectSteps.length || 0) + 1}`,
			title: "",
			details: "",
			status: "",
			published: false,
		};

		// Update the form state with the new step
		const updatedSteps = [...formInputs.projectSteps, newStep];
		onChange(updatedSteps);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project steps information */}
				<Steps formInputs={formInputs} onChange={onChange} addStep={addStep} userPermissions={userPermissions} />
			</form>
		</>
	);
};
export default FormSteps;
