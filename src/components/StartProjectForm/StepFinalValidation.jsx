import { Button } from "@/components/Buttons/Buttons";
import Link from "next/link";

const StepFinalValidation = ({ goToStep }) => {
	return (
		<>
			<div className="container mx-auto p-8 text-justify">
				<h1 className="text-7xl mt-12 mb-20 text-center">Final step</h1>
				<p className="mb-4 mx-1/5">
					Before you submit your project, please take a moment to review all the information you have provided. Carefully check each field for any errors or omissions. Make sure that your project
					description is clear, your goals are well-defined, and all necessary details are included. This final review is crucial to ensure that your project has the best chance of success. Once
					you're confident that everything is in order, you can proceed to submit your project. Good luck!
				</p>
			</div>
			<div className="flex items-center">
				<div className="flex-1">
					<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(6) }}>Back to previous step</Button>
				</div>
				<div className="flex gap-2 ml-auto">
					<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "grayBorder", btnRounded: "full", action: () => goToStep(6) }}>Save draft</Button>
					<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(8) }}>Submit my project</Button>
				</div>
			</div>
		</>
	);
};
export default StepFinalValidation;
