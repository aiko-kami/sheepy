"use client";

import { useState, useEffect } from "react";

import { WindowFrame } from "@/components/StartProjectForm/windowFrame";
import StepStartProject from "@/components/StartProjectForm/StepStartProject";
import StepOne from "@/components/StartProjectForm/Steps/Step1";
import StepTwo from "@/components/StartProjectForm/Steps/Step2";
import StepThree from "@/components/StartProjectForm/Steps/Step3";
import StepFour from "@/components/StartProjectForm/Steps/Step4";
import StepFive from "@/components/StartProjectForm/Steps/Step5";
import StepSix from "@/components/StartProjectForm/Steps/Step6";
import StepFinalValidation from "@/components/StartProjectForm/Steps/StepFinalValidation";
import StepProjectSubmitted from "@/components/StartProjectForm/StepProjectSubmitted";
import ProgressBar from "@/components/StartProjectForm/ProgressBar";
import ButtonsNavigation from "@/components/StartProjectForm/ButtonsNavigation";

import { ApiGetAllCategories } from "@/lib/api/categories";
import { ApiGetAllTags } from "@/lib/api/tags";
import { ApiCreateProjectDraft, ApiUpdateProjectDraft, ApiSubmitProject } from "@/lib/api/projectCore";

import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { ERRORS, SUCCESS } from "@/lib/constants";

import { handleFormChange } from "@/utils/formHandlers";
import userTalentNeeded from "@/public/images/userTalentNeeded.jpg";

const StepManager = () => {
	const totalSteps = 7; // Total number of steps

	const [currentStep, setCurrentStep] = useState(0);
	const [percent, setPercent] = useState(0);

	const [categories, setCategories] = useState([]);
	const [tagsList, setTagsList] = useState([]);

	const [formInputs, setFormInputs] = useState({
		projectTitle: "",
		selectedCategoryId: "",
		selectedCategoryName: "",
		selectedSubCategory: "",
		projectSummary: "",
		projectGoal: "",
		projectDescription: "",
		creatorMotivations: "",
		projectObjectives: [],
		locationOnlineOnly: false,
		locationCountry: "",
		locationCity: "",
		projectVisibility: "public",
		projectStartDate: null,
		projectTagsNew: [],
		talentsNeeded: [],
		projectId: "",
	});

	const onChange = handleFormChange(setFormInputs);

	const setProjectStartDate = (newValue) => {
		setFormInputs((prevState) => ({
			...prevState,
			projectStartDate: newValue,
		}));
	};

	const goToStep = (step) => {
		setCurrentStep(step);
	};

	const requiredFieldKeys = ["projectTitle", "selectedCategoryId", "selectedSubCategory", "projectSummary", "projectGoal", "projectDescription", "projectVisibility", "talentsNeeded"];

	const requiredFields = requiredFieldKeys.reduce((acc, key) => {
		acc[key] = formInputs[key];
		return acc;
	}, {});

	if (!formInputs.locationOnlineOnly) {
		requiredFields.locationCountry = formInputs.locationCountry;
		requiredFields.locationCity = formInputs.locationCity;
	}

	const isProjectReadyToSubmit = (inputs) => {
		const hasRequired = requiredFieldKeys.every((key) => {
			const value = inputs[key];
			if (Array.isArray(value)) return value.length > 0;
			if (typeof value === "string") return value.trim().length > 0;
			return Boolean(value);
		});

		const hasValidLocation = inputs.locationOnlineOnly || (inputs.locationCountry.trim() && inputs.locationCity.trim());

		return hasRequired && hasValidLocation;
	};

	// Fetch categories on mount
	useEffect(() => {
		const fetchCategories = async () => {
			const result = await ApiGetAllCategories();
			if (result.ok && result.data?.categories) {
				setCategories(result.data.categories);
			} else {
				showErrorToast(result.message || ERRORS.PROJECT_CATEGORIES.LOAD_FAILED);
			}
		};
		const fetchTags = async () => {
			const result = await ApiGetAllTags();
			if (result.ok && result.data?.tags) {
				setTagsList(result.data.tags);
			} else {
				showErrorToast(result.message || ERRORS.TAGS.LOAD_FAILED);
			}
		};

		fetchCategories();
		fetchTags();
	}, []);

	// Update subcategory when category changes
	useEffect(() => {
		const category = categories.find((c) => c.categoryId === formInputs.selectedCategoryId);
		if (category && category.subCategories.length > 0) {
			setFormInputs((prev) => ({
				...prev,
				selectedSubCategory: category.subCategories[0].name,
			}));
		}
	}, [formInputs.selectedCategoryId, categories]);

	useEffect(() => {
		let newPercent;
		if (currentStep === 1) {
			newPercent = 1; // Special case for final step validation
		} else if (currentStep === totalSteps) {
			newPercent = 99; // Special case for final step validation
		} else {
			newPercent = (((currentStep - 1) / (totalSteps - 1)) * 100).toFixed(0);
		}
		setPercent(newPercent);
	}, [currentStep]);

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		const formAction = e.nativeEvent.submitter?.value;

		// Prepare payload, replacing empty strings with special marker
		const payload = {
			title: formInputs.projectTitle,
			categoryId: formInputs.selectedCategoryId,
			subCategory: formInputs.selectedSubCategory,
			summary: formInputs.projectSummary,
			goal: formInputs.projectGoal,
			description: formInputs.projectDescription,
			creatorMotivation: formInputs.creatorMotivations,
			objectives: formInputs.projectObjectives,
			locationCountry: formInputs.locationCountry,
			locationCity: formInputs.locationCity,
			locationOnlineOnly: formInputs.locationOnlineOnly,
			visibility: formInputs.projectVisibility,
			startDate: formInputs.projectStartDate ? formInputs.projectStartDate.toISODate() : "",
			tags: formInputs.projectTagsNew,
			talentsNeeded: formInputs.talentsNeeded,
		};

		try {
			if (formAction === "save-draft" || formAction === "save-draft-modal") {
				let projectDraft;

				if (formInputs.projectId) {
					// Updating existing draft
					projectDraft = await ApiUpdateProjectDraft(formInputs.projectId, payload);
					showSuccessToast(SUCCESS.PROJECT.DRAFT_UPDATED);
				} else {
					// Creating new draft
					projectDraft = await ApiCreateProjectDraft(payload);
					if (projectDraft?.projectId) {
						setFormInputs((prev) => ({
							...prev,
							projectId: projectDraft.projectId, // Store the new ID
						}));
					}
					showSuccessToast(SUCCESS.PROJECT.DRAFT_SAVED);
				}
			} else if (formAction === "submit-project") {
				if (formInputs.projectId) {
					// Submit existing draft
					payload.projectId = formInputs.projectId;
					await ApiSubmitProject(payload);
					goToStep(totalSteps + 1);
					showSuccessToast(SUCCESS.PROJECT.SUBMITTED);
				} else {
					// Submit new project
					await ApiSubmitProject(payload);
					goToStep(totalSteps + 1);
					showSuccessToast(SUCCESS.PROJECT.SUBMITTED);
				}
			}
		} catch (error) {
			showErrorToast(error.message || ERRORS.PROJECT.UPDATE_FAILED);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<WindowFrame title="Project Creation" currentStep={currentStep}>
					{currentStep === 0 && <StepStartProject goToStep={goToStep} />}
					{currentStep > 0 && currentStep <= totalSteps && <ProgressBar currentStep={currentStep} totalSteps={totalSteps} percent={percent} />}
					<div className={`${currentStep > 0 && currentStep < totalSteps ? "h-140" : "hidden"} h-140 overflow-y-auto mb-4 py-1 xl:pt-20`}>
						{/* Step 1: Fill in the project title, category, and sub-category */}
						{currentStep === 1 && <StepOne formInputs={formInputs} onChange={onChange} categories={categories} />}

						{/* Step 2: Fill in the project summary and goal */}
						{currentStep === 2 && <StepTwo formInputs={formInputs} onChange={onChange} />}

						{/* Step 3: Fill in the project description */}
						{currentStep === 3 && <StepThree formInputs={formInputs} onChange={onChange} />}

						{/* Step 4: Fill in the creator motivations and objectives */}
						{currentStep === 4 && <StepFour formInputs={formInputs} setFormInputs={setFormInputs} onChange={onChange} />}

						{/* Step 5: Fill in the project project online-only, project location, project privacy, project start date, and tags */}
						{currentStep === 5 && <StepFive formInputs={formInputs} setFormInputs={setFormInputs} onChange={onChange} tagsList={tagsList} setProjectStartDate={setProjectStartDate} />}

						{/* Step 6: Fill in the talents needed */}
						{currentStep === 6 && <StepSix formInputs={formInputs} setFormInputs={setFormInputs} />}
					</div>
					<div className={`${currentStep === totalSteps ? "h-140" : "hidden"} overflow-y-auto mb-4 py-1`}>
						{/* Step 7: (Final Validation): Review and validate all the provided information */}
						{currentStep === totalSteps && (
							<StepFinalValidation
								formInputs={formInputs}
								requiredFields={requiredFields}
								talentNeededProfilePicture={userTalentNeeded}
								categories={categories}
								isProjectReadyToSubmit={isProjectReadyToSubmit}
							/>
						)}
					</div>
					{/* Step 8: Show confirmation that the project has been submitted */}
					{currentStep === 8 && <StepProjectSubmitted goToStep={goToStep} formInputs={formInputs} categories={categories} talentNeededProfilePicture={userTalentNeeded} />}

					<ButtonsNavigation goToStep={goToStep} currentStep={currentStep} totalSteps={totalSteps} formInputs={formInputs} isProjectReadyToSubmit={isProjectReadyToSubmit} />
				</WindowFrame>
			</form>
		</>
	);
};

export default StepManager;
