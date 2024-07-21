"use client";

import { useState, useEffect } from "react";
import StartProject from "@/components/StartProjectForm/StartProject";
import StepOne from "@/components/StartProjectForm/Step1";
import StepTwo from "@/components/StartProjectForm/Step2";
import StepThree from "@/components/StartProjectForm/Step3";
import StepFour from "@/components/StartProjectForm/Step4";
import StepFive from "@/components/StartProjectForm/Step5";
import StepSix from "@/components/StartProjectForm/Step6";
import StepFinalValidation from "@/components/StartProjectForm/StepFinalValidation";
import StepProjectSubmitted from "@/components/StartProjectForm/StepProjectSubmitted";
import ProgressBar from "@/components/StartProjectForm/ProgressBar";
import ButtonsNavigation from "@/components/StartProjectForm/ButtonsNavigation";

const StepManager = ({ projectForm }) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [percent, setPercent] = useState(0);
	const totalSteps = 7; // Total number of steps

	const [formInputs, setFormInputs] = useState({
		projectTitle: "",
		selectedCategory: "",
		selectedSubCategory: "",
		projectSummary: "",
		projectGoal: "",
		projectDescription: "",
		creatorMotivations: "",
		projectObjectives: "",
		locationOnlineOnly: false,
		locationCountry: "",
		locationCity: "",
		projectVisibility: "",
		projectStartDate: null,
		tags: [],
		talentsNeeded: [],
	});

	const [tagInput, setTagInput] = useState("");
	const [talentNeededInput, setTalentNeededInput] = useState("");

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const inputValue = type === "checkbox" ? checked : value;
		setFormInputs((prevState) => ({
			...prevState,
			[name]: inputValue,
		}));
	};

	const addTag = () => {
		if (tagInput && !formInputs.tags.includes(tagInput) && formInputs.tags.length < 8) {
			setFormInputs((prevState) => ({
				...prevState,
				tags: [...prevState.tags, tagInput],
			}));
			setTagInput("");
		}
	};

	const addTalentNeeded = () => {
		if (talentNeededInput && !formInputs.talentsNeeded.includes(talentNeededInput) && formInputs.talentsNeeded.length < 20) {
			setFormInputs((prevState) => ({
				...prevState,
				talentsNeeded: [...prevState.talentsNeeded, talentNeededInput],
			}));
			setTalentNeededInput("");
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

	const handleTagInputChange = (e) => {
		setTagInput(e.target.value);
	};

	const handleTalentNeededInputChange = (e) => {
		setTalentNeededInput(e.target.value);
	};

	const setProjectStartDate = (newValue) => {
		setFormInputs((prevState) => ({
			...prevState,
			projectStartDate: newValue,
		}));
	};

	const goToStep = (step) => {
		setCurrentStep(step);
		console.log("🚀 ~ StepManager ~ formInputs:", formInputs);
	};

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

	return (
		<>
			{currentStep === 0 && <StartProject goToStep={goToStep} />}
			{currentStep > 0 && currentStep <= totalSteps && <ProgressBar currentStep={currentStep} percent={percent} />}
			<div className={`${currentStep > 0 ? "h-160" : ""} overflow-y-auto flex items-center mb-4 py-1`}>
				{/* Step 1: Fill in the project title, category, and sub-category */}
				{currentStep === 1 && <StepOne formInputs={formInputs} onChange={onChange} categories={projectForm.categories} />}

				{/* Step 2: Fill in the project summary and goal */}
				{currentStep === 2 && <StepTwo formInputs={formInputs} onChange={onChange} />}

				{/* Step 3: Fill in the project description */}
				{currentStep === 3 && <StepThree formInputs={formInputs} onChange={onChange} />}

				{/* Step 4: Fill in the creator motivations and objectives */}
				{currentStep === 4 && <StepFour formInputs={formInputs} onChange={onChange} />}

				{/* Step 5: Fill in the project project online-only, project location, project privacy, project start date, and tags */}
				{currentStep === 5 && (
					<StepFive
						formInputs={formInputs}
						onChange={onChange}
						tagInput={tagInput}
						addTag={addTag}
						removeTag={removeTag}
						handleTagInputChange={handleTagInputChange}
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
						talentNeededProfilePicture={projectForm.talentNeededProfilePicture}
					/>
				)}

				{/* Step 7: (Final Validation): Review and validate all the provided information */}
				{currentStep === totalSteps && <StepFinalValidation formInputs={formInputs} />}

				{/* Step 8: Show confirmation that the project has been submitted */}
				{currentStep === 8 && <StepProjectSubmitted goToStep={goToStep} />}
			</div>
			<ButtonsNavigation goToStep={goToStep} currentStep={currentStep} totalSteps={totalSteps} />
		</>
	);
};

export default StepManager;
