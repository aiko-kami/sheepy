import { Button } from "@/components/Buttons/Buttons";
import Link from "next/link";

const StepOne = ({ goToStep }) => {
	return (
		<>
			<div className="container mx-auto p-8 mt-12 mb-20 text-justify">
				<p className="mb-4 mx-1/5 text-center">Content of step 1 </p>
			</div>
			<div className="flex items-center">
				<div className="flex-1">
					<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(0) }}>Back to introduction</Button>
				</div>
				<div className="flex gap-2 ml-auto">
					<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "grayBorder", btnRounded: "full", action: () => goToStep(6) }}>Save draft</Button>
					<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(2) }}>Go to next step</Button>
				</div>
			</div>
		</>
	);
};
export default StepOne;
