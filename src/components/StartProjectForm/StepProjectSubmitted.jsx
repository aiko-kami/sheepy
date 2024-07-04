import { Button } from "@/components/Buttons/Buttons";
import Link from "next/link";

const StepProjectSubmitted = ({ goToStep }) => {
	return (
		<>
			<div className="container mx-auto p-8 text-justify">
				<h1 className="text-7xl mt-12 mb-20 text-center">Project submitted, congratulations!</h1>
				<p className="mb-4 mx-1/5">
					Congratulations on submitting your project! You've taken the first step towards bringing your vision to life. Your project will now be reviewed by our team to ensure it complies with our
					chart. You'll be notified with our feedback within 24 hours. Thank you for your dedication and effort. We're excited to see your project succeed!
				</p>
			</div>
			<Link href="/">
				<div className="flex justify-center">
					<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "green", btnRounded: "full" }}>Back to Home page</Button>
				</div>
			</Link>
		</>
	);
};
export default StepProjectSubmitted;
