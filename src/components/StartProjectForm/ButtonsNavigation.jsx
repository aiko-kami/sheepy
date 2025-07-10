import { IoArrowForward, IoArrowBack, IoPaperPlaneOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const ButtonsNavigation = ({ goToStep, currentStep, totalSteps, isProjectReadyToSubmit, formInputs }) => {
	if (currentStep < 1 || currentStep > totalSteps) {
		return null;
	}

	const canSubmitProject = isProjectReadyToSubmit(formInputs);

	return (
		<div className="w-full sticky bottom-0 p-6 z-10 border-t border-gray-200">
			{/* Back button - always on the far left */}
			{currentStep > 0 && (
				<div className="absolute left-4">
					<Button
						btnProps={{
							btnSize: "sm",
							type: "button",
							btnColor: currentStep === 1 ? "blue" : "green",
							btnRounded: "std",
							action: () => goToStep(currentStep === 1 ? 0 : currentStep - 1),
						}}
					>
						<div className="flex">
							<IoArrowBack className="text-xl mr-2" />
							{currentStep === totalSteps ? "Back to edit" : "Back"}
						</div>
					</Button>
				</div>
			)}

			{/* Save draft - always on the far right */}
			<div className="absolute right-4">
				<Button
					btnProps={{
						btnSize: "sm",
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

			{/* Centered button - Next or Submit */}
			<div className="flex justify-center">
				{currentStep < totalSteps ? (
					<Button
						btnProps={{
							btnSize: "sm",
							type: "button",
							btnColor: "blue",
							btnRounded: "std",
							action: () => goToStep(currentStep + 1),
						}}
					>
						<div className="flex">
							Next <IoArrowForward className="text-xl ml-2" />
						</div>
					</Button>
				) : (
					<Button
						btnProps={{
							btnSize: "sm",
							type: "submit",
							name: "action",
							value: "submit-project",
							btnColor: "gradientBluePurple",
							btnRounded: "std",
							disabled: !canSubmitProject,
						}}
					>
						<div className="flex">
							Submit my project <IoPaperPlaneOutline className="text-xl ml-2" />
						</div>
					</Button>
				)}
			</div>
		</div>
	);
};

export default ButtonsNavigation;
