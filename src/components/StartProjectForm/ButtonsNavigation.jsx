import { IoArrowForward, IoArrowBack, IoCloudDownloadOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const ButtonsNavigation = ({ goToStep, currentStep, totalSteps }) => {
	if (currentStep < 1 || currentStep > totalSteps) {
		return null;
	}
	return (
		<>
			<div className="flex items-center">
				<div className="flex">
					{currentStep === 1 && (
						<Button btnProps={{ btnSize: "std", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(0) }}>
							<div className="flex">
								<IoArrowBack className="text-2xl mr-2 mt-0.5" /> Back to introduction
							</div>
						</Button>
					)}
					{currentStep > 1 && (
						<Button btnProps={{ btnSize: "std", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(currentStep - 1) }}>
							<div className="flex">
								<IoArrowBack className="text-2xl mr-2 mt-0.5" /> Back to previous step
							</div>
						</Button>
					)}
				</div>
				<div className="flex gap-2 ml-auto">
					<Button btnProps={{ btnSize: "std", type: "button", btnColor: "grayBorder", btnRounded: "full", action: () => goToStep(0) }}>
						<div className="flex">
							Save draft <IoCloudDownloadOutline className="text-xl ml-2 mt-0.5" />
						</div>
					</Button>
					{currentStep < totalSteps - 1 && (
						<Button btnProps={{ btnSize: "std", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(currentStep + 1) }}>
							<div className="flex">
								Go to next step <IoArrowForward className="text-2xl ml-2 mt-0.5" />
							</div>
						</Button>
					)}
					{currentStep === totalSteps - 1 && (
						<Button btnProps={{ btnSize: "std", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(totalSteps) }}>
							<div className="flex">
								Go to final step <IoArrowForward className="text-2xl ml-2 mt-0.5" />
							</div>
						</Button>
					)}
					{currentStep === totalSteps && (
						<Button btnProps={{ btnSize: "std", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(totalSteps + 1) }}>
							<div className="flex">
								Submit my project <IoCheckmarkCircleOutline className="text-2xl ml-2 mt-0.5" />
							</div>
						</Button>
					)}
				</div>
			</div>
		</>
	);
};
export default ButtonsNavigation;
