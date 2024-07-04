import { Button } from "@/components/Buttons/Buttons";
import Link from "next/link";

const StepThree = ({ goToStep }) => {
	return (
		<>
			<div className="container mx-auto p-8 mt-12 mb-20 text-justify">
				<p className="mb-4 mx-1/5 text-center">Content of step 3</p>
			</div>
			<div className="flex items-center">
				<div className="flex-1">
					<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(2) }}>Back to previous step</Button>
				</div>
				<div className="flex gap-2 ml-auto">
					<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "grayBorder", btnRounded: "full", action: () => goToStep(6) }}>Save draft</Button>
					<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(4) }}>Go to next step</Button>
				</div>
			</div>
		</>
	);
};
export default StepThree;
