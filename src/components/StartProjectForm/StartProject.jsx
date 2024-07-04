import { Button } from "@/components/Buttons/Buttons";
import Link from "next/link";

const StartProject = ({ goToStep }) => {
	return (
		<>
			<div className="container mx-auto p-8 text-justify">
				<h1 className="text-7xl mt-12 mb-20 text-center">Start my project</h1>
				<p className="mb-4 mx-1/5">
					You're about to start your journey! During your project creation, you'll be guided through a series of steps to provide the necessary details about your project. Each step will help ensure
					your project is well-prepared for success. You can save your progress at any time to continue later. Let's get started and bring your project to life!
				</p>
			</div>
			<div className="flex justify-center">
				<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(1) }}>Start with step 1</Button>
			</div>
		</>
	);
};
export default StartProject;
