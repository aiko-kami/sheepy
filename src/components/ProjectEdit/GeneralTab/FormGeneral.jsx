"use client";

import { useState } from "react";
import General from "@/components/ProjectEdit/GeneralTab/General";
import { handleFormChange } from "@/utils/formHandlers";

import { ApiPostUpdateProjectTitleCategory, ApiPostUpdateProjectInformation, ApiPostUpdateProjectCover } from "@/lib/api/projectEditionServer";

import { showSuccessToast, showErrorToast } from "@/utils/toast";

const FormGeneral = ({ projectId, title, category, subCategory, goal, summary, description, cover, tags, tagsList, creatorMotivation, objectives, userPermissions }) => {
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

	const onSubmit = async (event) => {
		event.preventDefault();

		const formAction = event.nativeEvent.submitter?.value;

		try {
			if (formAction === "submit-titleCategory") {
				const payload = {};
				if (userPermissions.canEditTitle) {
					payload.projectTitle = formInputs.projectTitle;
				}
				if (userPermissions.canEditCategory) {
					payload.projectCategory = formInputs.projectCategory;
				}
				if (userPermissions.canEditSubCategory) {
					payload.projectSubCategory = formInputs.projectSubCategory;
				}

				const result = await ApiPostUpdateProjectTitleCategory(projectId, payload);

				if (!result.ok) {
					showErrorToast(result.message || "Failed to update project title and category.");
					return;
				}
				showSuccessToast("The project has been updated.");
				router.refresh();
			} else if (formAction === "submit-information") {
				const payload = {};
				if (userPermissions.canEditSummary) {
					payload.projectSummary = formInputs.projectSummary;
				}
				if (userPermissions.canEditDescription) {
					payload.projectDescription = formInputs.projectDescription;
				}
				if (userPermissions.canEditGoal) {
					payload.projectGoal = formInputs.projectGoal;
				}
				if (userPermissions.creatorMotivation) {
					payload.creatorMotivation = formInputs.creatorMotivation;
				}

				const result = await ApiPostUpdateProjectInformation(projectId, payload);

				if (!result.ok) {
					showErrorToast(result.message || "Failed to update project information.");
					return;
				}
				showSuccessToast("The project has been updated.");
			} else if (formAction === "submit-cover") {
				const payload = {};
				if (userPermissions.canEditCover) {
					payload.projectCover = formInputs.projectCover;
				}

				const result = await ApiPostUpdateProjectCover(projectId, payload);

				if (!result.ok) {
					showErrorToast(result.message || "Failed to update project cover.");
					return;
				}
				showSuccessToast("The project cover has been updated.");
			}
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project general information */}
				<General formInputs={formInputs} setFormInputs={setFormInputs} onChange={onChange} tagsList={tagsList} userPermissions={userPermissions} />
			</form>
		</>
	);
};
export default FormGeneral;
