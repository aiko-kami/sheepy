"use client";

import { useState } from "react";

import General from "@/components/ProjectEdit/GeneralTab/General";
import SideMenu from "@/components/ProjectEdit/SideMenu";

import { handleFormChange } from "@/utils/formHandlers";

const FormGeneral = ({ projectId, status, statusBgColor, title, category, subCategory, goal, summary, description, cover, tags, tagsList, creatorMotivation, objectives }) => {
	const [formInputs, setFormInputs] = useState({
		projectTitle: title || "",
		projectCategory: category.name || "",
		projectSubCategory: subCategory || "",
		projectSummary: summary || "",
		projectDescription: description || "",
		projectGoal: goal || "",
		projectCover: cover || "",
		creatorMotivation: creatorMotivation || "",
		projectObjectives: objectives || "",
		projectTags: tags || [],
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
						<SideMenu projectId={projectId} status={status} statusBgColor={statusBgColor} />
					</div>
					<div className="col-span-4 lg:px-2 lg:pl-10">
						{/* Project general information */}
						<General formInputs={formInputs} setFormInputs={setFormInputs} onChange={onChange} tagsList={tagsList} />
					</div>
				</div>
			</form>
		</>
	);
};
export default FormGeneral;
