"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";

import General from "@/components/ProjectEdit/GeneralTab/General";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormGeneral = ({ project }) => {
	const [formState, setFormState] = useState({
		projectTitle: project.title || "",
		projectCategory: project.category.name || "",
		projectSubCategory: project.subCategory.name || "",
		projectSummary: project.summary || "",
		projectDescription: project.description || "",
		projectGoal: project.goal || "",
		projectTags: project.tags.map((tag) => tag.name) || [],
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
						{/* Project general information */}
						<General formState={formState} setFormState={setFormState} onChange={onChange} />
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
export default FormGeneral;
