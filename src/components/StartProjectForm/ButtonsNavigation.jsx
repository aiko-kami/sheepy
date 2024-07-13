import { IoArrowForward, IoArrowBack, IoCheckmarkCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const ButtonsNavigation = ({ goToStep, currentStep, totalSteps }) => {
	if (currentStep < 1 || currentStep > totalSteps) {
		return null;
	}
	return (
		<>
			<div className="flex items-center sticky bottom-0">
				<div className="flex">
					{currentStep === 1 && (
						<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: () => goToStep(0) }}>
							<div className="flex">
								<IoArrowBack className="text-xl mr-2" /> Back
							</div>
						</Button>
					)}
					{currentStep > 1 && (
						<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: () => goToStep(currentStep - 1) }}>
							<div className="flex">
								<IoArrowBack className="text-xl mr-2" /> Back
							</div>
						</Button>
					)}
				</div>
				<div className="flex gap-2 ml-auto">
					<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "grayBorder", btnRounded: "std", action: () => goToStep(0) }}>
						<div className="flex">Save draft</div>
					</Button>
					{currentStep < totalSteps - 1 && (
						<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: () => goToStep(currentStep + 1) }}>
							<div className="flex">
								Next <IoArrowForward className="text-xl ml-2" />
							</div>
						</Button>
					)}
					{currentStep === totalSteps - 1 && (
						<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: () => goToStep(totalSteps) }}>
							<div className="flex">
								Next <IoArrowForward className="text-xl ml-2" />
							</div>
						</Button>
					)}
					{currentStep === totalSteps && (
						<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: () => goToStep(totalSteps + 1) }}>
							<div className="flex">
								Submit my project <IoCheckmarkCircleOutline className="text-xl ml-2" />
							</div>
						</Button>
					)}
				</div>
			</div>
		</>
	);
};
export default ButtonsNavigation;
