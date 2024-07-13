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

	const goToStep = (step) => {
		setCurrentStep(step);
	};

	useEffect(() => {
		let newPercent;
		if (currentStep === totalSteps) {
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
			<div className="h-160 overflow-auto flex items-center mb-4">
				{currentStep === 1 && <StepOne categories={projectForm.categories} />}
				{currentStep === 2 && <StepTwo />}
				{currentStep === 3 && <StepThree />}
				{currentStep === 4 && <StepFour />}
				{currentStep === 5 && <StepFive />}
				{currentStep === 6 && <StepSix />}
				{currentStep === totalSteps && <StepFinalValidation />}
				{currentStep === 8 && <StepProjectSubmitted goToStep={goToStep} />}
			</div>
			<ButtonsNavigation goToStep={goToStep} currentStep={currentStep} totalSteps={totalSteps} />
		</>
	);
};

export default StepManager;
