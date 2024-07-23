import { Button } from "@/components/Buttons/Buttons";
import Link from "next/link";

const StepProjectSubmitted = ({ goToStep }) => {
	return (
		<>
			<div className="container min-w-full m-auto lg:px-8 mb-12 text-justify">
				<h1 className="text-4xl md:text-7xl pt-4 md:pt-6 mb-8 md:mb-20 text-center">Project submitted, congratulations!</h1>
				<p>
					Congratulations on submitting your project! You've taken the first step towards bringing your vision to life. Your project will now be reviewed by our team to ensure it complies with our
					chart. You'll be notified with our feedback within 24 hours. Thank you for your dedication and effort. We're excited to see your project succeed!
				</p>
			</div>
			<div className="flex justify-center">
				<Link href="/">
					<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "green", btnRounded: "full" }}>Back to Home page</Button>
				</Link>
			</div>
		</>
	);
};
export default StepProjectSubmitted;
