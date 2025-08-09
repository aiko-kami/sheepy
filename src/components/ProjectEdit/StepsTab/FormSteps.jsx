"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import Steps from "@/components/ProjectEdit/StepsTab/Steps";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormSteps = ({ project }) => {
	const [formInputs, setFormInputs] = useState({
		projectId: project.projectId,
		updatedBy: project.steps.updatedBy,
		createdAt: project.steps.createdAt,
		updatedAt: project.steps.updatedAt,
		projectSteps: project.steps.stepsList,
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
				<div className="lg:grid grid-cols-5">
					<div className="p-2 mb-6">
						{/* Project Status and links */}
						<SideMenu project={project} />
					</div>
					<div className="col-span-4 lg:px-2 lg:pl-10">
						{/* Project steps information */}
						<Steps formInputs={formInputs} onChange={onChange} addStep={addStep} />
						<div className="flex justify-center">
							<Button
								btnProps={{
									type: "submit",
									btnColor: "blue",
								}}
							>
								Save project
							</Button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};
export default FormSteps;
