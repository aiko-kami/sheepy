"use client";

import { useState } from "react";

import General from "@/components/ProjectEdit/GeneralTab/General";
import SideMenu from "@/components/ProjectEdit/SideMenu";

import { handleFormChange } from "@/utils/formHandlers";

const FormGeneral = ({ project }) => {
	const [formInputs, setFormInputs] = useState({
		projectTitle: project.title || "",
		projectCategory: project.category.name || "",
		projectSubCategory: project.subCategory.name || "",
		projectSummary: project.summary || "",
		projectDescription: project.description || "",
		projectGoal: project.goal || "",
		projectCover: project.cover || "",
		creatorMotivation: project.creatorMotivation || "",
		projectObjectives: project.objectives || "",
		projectTags: project.tags.map((tag) => tag.name) || [],
	});

	const onChange = handleFormChange(setFormInputs);

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formInputs);
		console.log("🚀 ~ onSubmit ~ The cover has been updated:", formInputs.projectCover);
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
						<General formInputs={formInputs} setFormInputs={setFormInputs} onChange={onChange} />
					</div>
				</div>
			</form>
		</>
	);
};
export default FormGeneral;
