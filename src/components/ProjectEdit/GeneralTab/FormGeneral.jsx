"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import General from "@/components/ProjectEdit/GeneralTab/General";
import { handleFormChange } from "@/utils/formHandlers";

import { ApiUpdateProjectTitleCategory, ApiUpdateProjectInformation, ApiUpdateProjectCover } from "@/lib/api/projectEditionServer";
import { SUCCESS, ERRORS } from "@/lib/constants";

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
			showErrorToast(result.message || ERRORS.PROJECT_COVER.REMOVE_FAILED);
			return;
		}
		router.refresh();
		setModalDisplayCoverRemove(false);
		showSuccessToast(SUCCESS.PROJECT_COVER.REMOVE);
	};

	const onSubmit = async (event) => {
		event.preventDefault();

		const formAction = event.nativeEvent.submitter?.value;

		try {
			if (formAction === "submit-titleCategory") {
				if (!userPermissions.canEditTitle && !userPermissions.canEditCategory && !userPermissions.canEditSubCategory) {
					showErrorToast(ERRORS.PROJECT_PERMISSIONS.EDIT_TITLE_CATEGORY);
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
					showErrorToast(result.message || ERRORS.PROJECT_TITLE_CATEGORY.UPDATE_FAILED);
					return;
				}

				const newLink = result.data?.link;
				showSuccessToast(SUCCESS.PROJECT.INFORMATION_UPDATE);
				// Redirect to new link in case project title changed
				if (newLink) {
					router.push(`/projects/${newLink}/edit/general`);
					return;
				}
				router.refresh();
			} else if (formAction === "submit-information") {
				if (!userPermissions.canEditSummary && !userPermissions.canEditDescription && !userPermissions.canEditGoal && !userPermissions.canEditCreatorMotivation) {
					showErrorToast(ERRORS.PROJECT_PERMISSIONS.EDIT_INFORMATION);
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
					showErrorToast(result.message || ERRORS.PROJECT_INFORMATION.UPDATE_FAILED);
					return;
				}
				showSuccessToast(SUCCESS.PROJECT.INFORMATION_UPDATE);
				router.refresh();
			} else if (formAction === "submit-cover") {
				if (!userPermissions.canEditCover) {
					showErrorToast(ERRORS.PROJECT_PERMISSIONS.EDIT_COVER);
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
						showErrorToast(result.message || ERRORS.PROJECT_COVER.UPDATE_FAILED);
						return;
					}
					showSuccessToast(SUCCESS.PROJECT_COVER.UPDATE);
					router.refresh();
				}
			}
		} catch (error) {
			showErrorToast(error.message || ERRORS.PROJECT.UPDATE_FAILED);
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
