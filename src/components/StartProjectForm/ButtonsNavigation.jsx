import { IoArrowForward, IoArrowBack, IoPaperPlaneOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const ButtonsNavigation = ({ goToStep, currentStep, totalSteps }) => {
	if (currentStep < 1 || currentStep > totalSteps) {
		return null;
	}
	return (
		<>
			<div className="flex items-center sticky bottom-0">
				{/* Back button */}
				<div className="flex">
					{currentStep > 0 && (
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
					)}
				</div>

				{/* Next / Save draft / Submit buttons */}
				<div className="flex gap-2 ml-auto">
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
					{currentStep < totalSteps && (
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
					)}
					{currentStep === totalSteps && (
						<Button
							btnProps={{
								btnSize: "sm",
								type: "submit",
								name: "action",
								value: "submit-project",
								btnColor: "gradientBluePurple",
								btnRounded: "std",
							}}
						>
							<div className="flex">
								Submit my project <IoPaperPlaneOutline className="text-xl ml-2" />
							</div>
						</Button>
					)}
				</div>
			</div>
		</>
	);
};
export default ButtonsNavigation;
