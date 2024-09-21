"use client";

import { useState } from "react";
import { Button } from "@/components/Buttons/Buttons";
import Steps from "@/components/ProjectEdit/StepsTab/Steps";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormSteps = ({ project }) => {
	const [formState, setFormState] = useState({
		projectTitle: project.title,
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
						{/* Project Q&As information */}
						<Steps formState={formState} onChange={onChange} />
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
