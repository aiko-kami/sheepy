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
import { ApiGetAllCategories } from "@/lib/api/categories";

import projectForm from "@/mock/projectForm.json";

const StepManager = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [percent, setPercent] = useState(0);
	const totalSteps = 7; // Total number of steps
	const [categories, setCategories] = useState([]);

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
		projectVisibility: "public",
		projectStartDate: null,
		tags: [],
		talentsNeeded: [],
	});

	const [tagInput, setTagInput] = useState("");
	const [tagError, setTagError] = useState("");

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
		setTagError("");
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
	};

	// Fetch categories on mount
	useEffect(() => {
		const fetchCategories = async () => {
			const data = await ApiGetAllCategories();

			console.log("🚀 ~ fetchCategories ~ data:", data);

			setCategories(data);
		};
		fetchCategories();
	}, []);

	// Update subcategory when category changes
	useEffect(() => {
		const category = categories.find((c) => c.name === formInputs.selectedCategory);
		if (category && category.subCategories.length > 0) {
			setFormInputs((prev) => ({
				...prev,
				selectedSubCategory: category.subCategories[0].name,
			}));
		}
	}, [formInputs.selectedCategory, categories]);

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
	const handleSubmit = (e) => {
		e.preventDefault();
		// You can perform actions like searching here
		console.log("🚀 ~ handleSubmit ~ Project inputs:", formInputs);
		goToStep(totalSteps + 1);
	};

	return (
		<>
			{currentStep === 0 && <StartProject goToStep={goToStep} />}
			{currentStep > 0 && currentStep <= totalSteps && <ProgressBar currentStep={currentStep} percent={percent} />}
			<form onSubmit={handleSubmit}>
				<div className={`${currentStep > 0 && currentStep < totalSteps ? "h-160" : "hidden"} overflow-y-auto mb-4 py-1 xl:pt-20`}>
					{/* Step 1: Fill in the project title, category, and sub-category */}
					{currentStep === 1 && <StepOne formInputs={formInputs} onChange={onChange} categories={categories} />}

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
							talentNeededProfilePicture={projectForm.talentNeededProfilePicture}
						/>
					)}
				</div>
				<div className={`${currentStep === totalSteps ? "h-160" : "hidden"} overflow-y-auto mb-4 py-1`}>
					{/* Step 7: (Final Validation): Review and validate all the provided information */}
					{currentStep === totalSteps && <StepFinalValidation formInputs={formInputs} talentNeededProfilePicture={projectForm.talentNeededProfilePicture} />}
				</div>
				{/* Step 8: Show confirmation that the project has been submitted */}
				{currentStep === 8 && <StepProjectSubmitted goToStep={goToStep} />}

				<ButtonsNavigation goToStep={goToStep} currentStep={currentStep} totalSteps={totalSteps} />
			</form>
		</>
	);
};

export default StepManager;
