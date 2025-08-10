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
import { ApiCreateProjectDraft, ApiUpdateProjectDraft, ApiSubmitProject } from "@/lib/api/projectCore";

import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { handleFormChange } from "@/utils/formHandlers";

import projectForm from "@/mock/projectForm.json";

const StepManager = () => {
	const totalSteps = 7; // Total number of steps

	const [currentStep, setCurrentStep] = useState(0);
	const [percent, setPercent] = useState(0);

	const [categories, setCategories] = useState([]);

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
		tags: [],
		talentsNeeded: [],
		projectId: "",
	});

	const [tagInput, setTagInput] = useState("");
	const [tagError, setTagError] = useState("");

	const [talentNeededInput, setTalentNeededInput] = useState("");
	const [talentNeededError, setTalentNeededError] = useState("");

	const [objectiveInput, setObjectiveInput] = useState("");
	const [objectiveError, setObjectiveError] = useState("");

	const onChange = handleFormChange(setFormInputs);

	const addTag = () => {
		if (!tagInput) {
			setTagError("Please enter a tag.");
		}
		if (tagInput && formInputs.tags.includes(tagInput)) {
			setTagError("This tag is already present in the list.");
		}
		if (tagInput && formInputs.tags.length >= 8) {
			setTagError("You can only add up to 8 tags.");
		}
		if (tagInput && !formInputs.tags.includes(tagInput) && formInputs.tags.length < 8) {
			setFormInputs((prevState) => ({
				...prevState,
				tags: [...prevState.tags, tagInput],
			}));
			setTagInput("");
			setTagError("");
		}
	};

	const addTalentNeeded = () => {
		if (!talentNeededInput) {
			setTalentNeededError("Please enter a talent.");
		}
		if (talentNeededInput && formInputs.talentsNeeded.includes(talentNeededInput)) {
			setTalentNeededError("This talent is already present in the list.");
		}
		if (talentNeededInput && formInputs.talentsNeeded.length > 20) {
			setTalentNeededError("You can only add up to 20 talents.");
		}
		if (talentNeededInput && !formInputs.talentsNeeded.includes(talentNeededInput) && formInputs.talentsNeeded.length <= 20) {
			setFormInputs((prevState) => ({
				...prevState,
				talentsNeeded: [...prevState.talentsNeeded, talentNeededInput],
			}));
			setTalentNeededInput("");
			setTalentNeededError("");
		}
	};

	const addObjective = () => {
		if (!objectiveInput) {
			setObjectiveError("Please enter an objective.");
		}
		if (objectiveInput && formInputs.projectObjectives.includes(objectiveInput)) {
			setObjectiveError("This project objective is already present in the list.");
		}
		if (objectiveInput && formInputs.projectObjectives.length >= 10) {
			setObjectiveError("You can only add up to 10 project objectives.");
		}
		if (objectiveInput && !formInputs.projectObjectives.includes(objectiveInput) && formInputs.projectObjectives.length < 10) {
			setFormInputs((prevState) => ({
				...prevState,
				projectObjectives: [...prevState.projectObjectives, objectiveInput],
			}));
			setObjectiveInput("");
			setObjectiveError("");
		}
	};

	const removeTag = (tagToRemove) => {
		setFormInputs((prevState) => ({
			...prevState,
			tags: prevState.tags.filter((tag) => tag !== tagToRemove),
		}));
	};

	const removeTalentNeeded = (talentToRemove) => {
		setFormInputs((prevState) => ({
			...prevState,
			talentsNeeded: prevState.talentsNeeded.filter((talent) => talent !== talentToRemove),
		}));
	};

	const removeObjective = (objectiveToRemove) => {
		setFormInputs((prevState) => ({
			...prevState,
			projectObjectives: prevState.projectObjectives.filter((objective) => objective !== objectiveToRemove),
		}));
	};

	const handleTagInputChange = (e) => {
		setTagError("");
		setTagInput(e.target.value);
	};

	const handleTalentNeededInputChange = (e) => {
		setTalentNeededInput(e.target.value);
	};

	const handleObjectiveInputChange = (e) => {
		setObjectiveError("");
		setObjectiveInput(e.target.value);
	};

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
			const data = await ApiGetAllCategories();
			if (data) {
				setCategories(data);
			} else {
				showErrorToast("Failed to load categories.");
			}
		};
		fetchCategories();
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
			startDate: formInputs.projectStartDate ? formInputs.projectStartDate.toUTC().toISO() : "",
			tags: formInputs.tags,
			talentsNeeded: formInputs.talentsNeeded,
		};
		try {
			if (formAction === "save-draft" || formAction === "save-draft-modal") {
				let projectDraft;

				if (formInputs.projectId) {
					// Updating existing draft
					projectDraft = await ApiUpdateProjectDraft(formInputs.projectId, payload);
					showSuccessToast("Draft project updated!");
				} else {
					// Creating new draft
					projectDraft = await ApiCreateProjectDraft(payload);
					if (projectDraft?.projectId) {
						setFormInputs((prev) => ({
							...prev,
							projectId: projectDraft.projectId, // Store the new ID
						}));
					}
					showSuccessToast("Draft project saved!");
				}
			} else if (formAction === "submit-project") {
				if (formInputs.projectId) {
					// Submit existing draft
					payload.projectId = formInputs.projectId;
					await ApiSubmitProject(payload);
					goToStep(totalSteps + 1);
					showSuccessToast("Project submitted successfully!");
				} else {
					// Submit new project
					await ApiSubmitProject(payload);
					goToStep(totalSteps + 1);
					showSuccessToast("Project submitted successfully!");
				}
			}
		} catch (error) {
			showErrorToast(error.message);
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
						{currentStep === 4 && (
							<StepFour
								formInputs={formInputs}
								onChange={onChange}
								objectiveInput={objectiveInput}
								addObjective={addObjective}
								removeObjective={removeObjective}
								handleObjectiveInputChange={handleObjectiveInputChange}
								objectiveError={objectiveError}
							/>
						)}

						{/* Step 5: Fill in the project project online-only, project location, project privacy, project start date, and tags */}
						{currentStep === 5 && (
							<StepFive
								formInputs={formInputs}
								onChange={onChange}
								tagInput={tagInput}
								addTag={addTag}
								removeTag={removeTag}
								handleTagInputChange={handleTagInputChange}
								tagError={tagError}
								setProjectStartDate={setProjectStartDate}
							/>
						)}

						{/* Step 6: Fill in the talents needed */}
						{currentStep === 6 && (
							<StepSix
								formInputs={formInputs}
								talentNeededInput={talentNeededInput}
								addTalentNeeded={addTalentNeeded}
								removeTalentNeeded={removeTalentNeeded}
								handleTalentNeededInputChange={handleTalentNeededInputChange}
								talentNeededError={talentNeededError}
								talentNeededProfilePicture={projectForm.talentNeededProfilePicture}
							/>
						)}
					</div>
					<div className={`${currentStep === totalSteps ? "h-140" : "hidden"} overflow-y-auto mb-4 py-1`}>
						{/* Step 7: (Final Validation): Review and validate all the provided information */}
						{currentStep === totalSteps && (
							<StepFinalValidation
								formInputs={formInputs}
								requiredFields={requiredFields}
								talentNeededProfilePicture={projectForm.talentNeededProfilePicture}
								categories={categories}
								isProjectReadyToSubmit={isProjectReadyToSubmit}
							/>
						)}
					</div>
					{/* Step 8: Show confirmation that the project has been submitted */}
					{currentStep === 8 && <StepProjectSubmitted goToStep={goToStep} formInputs={formInputs} categories={categories} talentNeededProfilePicture={projectForm.talentNeededProfilePicture} />}

					<ButtonsNavigation goToStep={goToStep} currentStep={currentStep} totalSteps={totalSteps} formInputs={formInputs} isProjectReadyToSubmit={isProjectReadyToSubmit} />
				</WindowFrame>
			</form>
		</>
	);
};

export default StepManager;
