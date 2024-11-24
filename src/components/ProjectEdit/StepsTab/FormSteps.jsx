"use client";

import { useState } from "react";
import { Button } from "@/components/Buttons/Buttons";
import Steps from "@/components/ProjectEdit/StepsTab/Steps";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormSteps = ({ project }) => {
	const [formState, setFormState] = useState({
		projectId: project.projectId,
		projectSteps: project.steps,
	});

	const onChange = (updatedSteps) => {
		setFormState((prevState) => ({
			...prevState,
			projectSteps: updatedSteps,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formState);
	};

	const addStep = () => {
		const newStep = {
			id: `${(formState.projectSteps.length || 0) + 1}`,
			title: "",
			details: "",
			status: "",
			published: false,
		};

		// Update the form state with the new step
		const updatedSteps = [...formState.projectSteps, newStep];
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
						{/* Project Q&As information */}
						<Steps formState={formState} onChange={onChange} addStep={addStep} />
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
