"use client";

import { useState } from "react";
import General from "@/components/ProjectEdit/GeneralTab/General";
import { handleFormChange } from "@/utils/formHandlers";

const FormGeneral = ({ projectId, title, category, subCategory, goal, summary, description, cover, tags, tagsList, creatorMotivation, objectives }) => {
	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		projectTitle: title || "",
		projectCategory: category.name || "",
		projectSubCategory: subCategory || "",
		projectSummary: summary || "",
		projectDescription: description || "",
		projectGoal: goal || "",
		projectCover: cover.link || "",
		creatorMotivation: creatorMotivation || "",
		projectObjectives: objectives || "",
		projectTagsExisting: tags || [],
		projectTagsNew: [],
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
				{/* Project general information */}
				<General formInputs={formInputs} setFormInputs={setFormInputs} onChange={onChange} tagsList={tagsList} />
			</form>
		</>
	);
};
export default FormGeneral;
