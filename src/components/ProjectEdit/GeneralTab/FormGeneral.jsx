"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import General from "@/components/ProjectEdit/GeneralTab/General";
import { handleFormChange } from "@/utils/formHandlers";

import { ApiUpdateProjectTitleCategory, ApiUpdateProjectInformation, ApiUpdateProjectCover } from "@/lib/api/projectEditionServer";
import ERRORS from "@/lib/constants/errors";

import { showSuccessToast, showErrorToast } from "@/utils/toast";

const FormGeneral = ({ projectId, title, category, subCategory, goal, summary, description, cover, tags, tagsList, creatorMotivation, objectives, userPermissions }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		projectTitle: title || "",
		projectCategory: category.name || "",
		projectCategoryId: category.categoryId || "",
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

	const [modalDisplayCoverRemove, setModalDisplayCoverRemove] = useState(false);

	const closeModalCoverRemove = () => {
		setModalDisplayCoverRemove(false);
	};

	const onChange = handleFormChange(setFormInputs);

	const confirmRemoveCover = async () => {
		const result = await ApiUpdateProjectCover(projectId);

		if (!result.ok) {
			showErrorToast(result.message || "Failed to remove project cover.");
			return;
		}
		router.refresh();
		setModalDisplayCoverRemove(false);
		showSuccessToast("The project cover has been removed.");
	};

	const onSubmit = async (event) => {
		event.preventDefault();

		const formAction = event.nativeEvent.submitter?.value;

		try {
			if (formAction === "submit-titleCategory") {
				if (!userPermissions.canEditTitle && !userPermissions.canEditCategory && !userPermissions.canEditSubCategory) {
					showErrorToast(ERRORS.PROJECT_EDIT.EDIT_TITLE_CATEGORY);
					return;
				}
				const payload = {};
				if (userPermissions.canEditTitle) {
					payload.title = formInputs.projectTitle;
				}
				if (userPermissions.canEditCategory) {
					payload.categoryId = formInputs.projectCategoryId;
				}
				if (userPermissions.canEditSubCategory) {
					payload.subCategory = formInputs.projectSubCategory;
				}

				const result = await ApiUpdateProjectTitleCategory(projectId, payload);
				if (!result.ok) {
					showErrorToast(result.message || "Failed to update project title and category.");
					return;
				}

				const newLink = result.data?.link;
				showSuccessToast("The project has been updated.");
				// Redirect to new link in case project title changed
				if (newLink) {
					router.push(`/projects/${newLink}/edit/general`);
					return;
				}
				router.refresh();
			} else if (formAction === "submit-information") {
				if (!userPermissions.canEditSummary && !userPermissions.canEditDescription && !userPermissions.canEditGoal && !userPermissions.canEditCreatorMotivation) {
					showErrorToast(ERRORS.PROJECT_EDIT.EDIT_INFORMATION);
					return;
				}
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

				const result = await ApiUpdateProjectInformation(projectId, payload);

				if (!result.ok) {
					showErrorToast(result.message || "Failed to update project information.");
					return;
				}
				showSuccessToast("The project has been updated.");
				router.refresh();
			} else if (formAction === "submit-cover") {
				if (!userPermissions.canEditCover) {
					showErrorToast(ERRORS.PROJECT_EDIT.EDIT_COVER);
					return;
				}

				if (!formInputs.projectCover) {
					setModalDisplayCoverRemove(true);
					return;
				}

				if (formInputs.projectCover && userPermissions.canEditCover) {
					const payload = new FormData();
					payload.append("image", formInputs.projectCover);

					const result = await ApiUpdateProjectCover(projectId, payload);

					if (!result.ok) {
						showErrorToast(result.message || "Failed to update project cover.");
						return;
					}
					showSuccessToast("The project cover has been updated.");
					router.refresh();
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
					closeModalCoverRemove={closeModalCoverRemove}
					modalDisplayCoverRemove={modalDisplayCoverRemove}
					confirmRemoveCover={confirmRemoveCover}
				/>
			</form>
		</>
	);
};
export default FormGeneral;
