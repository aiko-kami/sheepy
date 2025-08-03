import { IoArrowForward, IoArrowBack, IoPaperPlaneOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const ButtonsNavigation = ({ goToStep, currentStep, totalSteps, isProjectReadyToSubmit, formInputs }) => {
	if (currentStep < 1 || currentStep > totalSteps) {
		return null;
	}

	const canSubmitProject = isProjectReadyToSubmit(formInputs);

	return (
		<div className="w-full sticky bottom-0 min-h-24 px-6 z-10 border-t border-gray-200 flex justify-between items-center">
			{/* Buttons in step 1 */}
			{currentStep === 1 && (
				<>
					<div>
						<Button
							btnProps={{
								type: "submit",
								name: "action",
								value: "save-draft",
								btnColor: "grayBorder",
								btnRounded: "std",
							}}
						>
							Save draft
						</Button>
					</div>
					<div>
						<Button
							btnProps={{
								type: "button",
								btnColor: "blue",
								btnRounded: "std",
								action: () => goToStep(currentStep + 1),
							}}
						>
							<div className="flex">
								Next <IoArrowForward className="text-xl mt-0.5 ml-2" />
							</div>
						</Button>
					</div>
				</>
			)}

			{/* Buttons in steps 2 to 6 */}
			{currentStep >= 2 && currentStep <= totalSteps - 1 && (
				<>
					<div>
						<Button
							btnProps={{
								type: "button",
								btnColor: "green",
								btnRounded: "std",
								action: () => goToStep(currentStep - 1),
							}}
						>
							<div className="flex">
								<IoArrowBack className="text-xl mt-0.5 mr-2" />
								{"Back"}
							</div>
						</Button>
					</div>
					<div>
						<Button
							btnProps={{
								type: "submit",
								name: "action",
								value: "save-draft",
								btnColor: "grayBorder",
								btnRounded: "std",
							}}
						>
							Save draft
						</Button>
					</div>
					<div>
						<Button
							btnProps={{
								type: "button",
								btnColor: "blue",
								btnRounded: "std",
								action: () => goToStep(currentStep + 1),
							}}
						>
							<div className="flex">
								Next <IoArrowForward className="text-xl mt-0.5 ml-2" />
							</div>
						</Button>
					</div>
				</>
			)}

			{/* Buttons in steps 2 to 6 */}
			{currentStep === totalSteps && (
				<>
					<div>
						<Button
							btnProps={{
								type: "button",
								btnColor: "green",
								btnRounded: "std",
								action: () => goToStep(currentStep - 1),
							}}
						>
							<div className="flex">
								<IoArrowBack className="text-xl mt-0.5 mr-2" />
								{"Back to edit"}
							</div>
						</Button>
					</div>
					<div>
						<Button
							btnProps={{
								btnSize: "xl",
								type: "submit",
								name: "action",
								value: "submit-project",
								btnColor: "gradientBluePurple",
								btnRounded: "std",
								disabled: !canSubmitProject,
							}}
						>
							<div className="flex">
								Submit my project <IoPaperPlaneOutline className="text-xl mt-0.5 ml-2" />
							</div>
						</Button>
					</div>
					<div>
						<Button
							btnProps={{
								type: "submit",
								name: "action",
								value: "save-draft",
								btnColor: "grayBorder",
								btnRounded: "std",
							}}
						>
							Save draft
						</Button>
					</div>
				</>
			)}
		</div>
	);
};

export default ButtonsNavigation;
