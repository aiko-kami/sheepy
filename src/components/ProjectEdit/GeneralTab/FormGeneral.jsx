"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import General from "@/components/ProjectEdit/GeneralTab/General";
import { handleFormChange } from "@/utils/formHandlers";

import { ApiPatchUpdateProjectTitleCategory, ApiPatchUpdateProjectInformation, ApiPatchUpdateProjectCover } from "@/lib/api/projectEditionServer";

import { showSuccessToast, showErrorToast } from "@/utils/toast";

const FormGeneral = ({ projectId, title, category, subCategory, goal, summary, description, cover, tags, tagsList, creatorMotivation, objectives, userPermissions }) => {
	const router = useRouter();

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
					payload.title = formInputs.projectTitle;
				}
				if (userPermissions.canEditCategory) {
					payload.category = formInputs.projectCategory;
				}
				if (userPermissions.canEditSubCategory) {
					payload.subCategory = formInputs.projectSubCategory;
				}

				const result = await ApiPatchUpdateProjectTitleCategory(projectId, payload);

				if (!result.ok) {
					showErrorToast(result.message || "Failed to update project title and category.");
					return;
				}
				showSuccessToast("The project has been updated.");
				router.refresh();
			} else if (formAction === "submit-information") {
				const payload = {};
				if (userPermissions.canEditSummary) {
					payload.summary = formInputs.projectSummary;
				}
				if (userPermissions.canEditDescription) {
					payload.description = formInputs.projectDescription;
				}
				if (userPermissions.canEditGoal) {
					payload.goal = formInputs.projectGoal;
				}
				if (userPermissions.canEditCreatorMotivation) {
					payload.creatorMotivation = formInputs.creatorMotivation;
				}

				const result = await ApiPatchUpdateProjectInformation(projectId, payload);

				if (!result.ok) {
					showErrorToast(result.message || "Failed to update project information.");
					return;
				}
				showSuccessToast("The project has been updated.");
				router.refresh();
			} else if (formAction === "submit-cover") {
				const payload = new FormData();
				if (formInputs.projectCover && userPermissions.canEditCover) {
					payload.append("image", formInputs.projectCover);

					const result = await ApiPatchUpdateProjectCover(projectId, payload);

					if (!result.ok) {
						showErrorToast(result.message || "Failed to update project cover.");
						return;
					}
					showSuccessToast("The project cover has been updated.");
				}
			}
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project general information */}
				<General
					projectId={projectId}
					formInputs={formInputs}
					setFormInputs={setFormInputs}
					onChange={onChange}
					objectives={objectives}
					tags={tags}
					tagsList={tagsList}
					userPermissions={userPermissions}
				/>
			</form>
		</>
	);
};
export default FormGeneral;
