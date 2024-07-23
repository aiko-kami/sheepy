import { Button } from "@/components/Buttons/Buttons";
import { IoArrowForward } from "react-icons/io5";

const StartProject = ({ goToStep }) => {
	return (
		<>
			<div className="container min-w-full m-auto lg:px-8 mb-12 text-justify">
				<h1 className="text-4xl md:text-7xl pt-4 md:pt-6 mb-8 md:mb-20 text-center">Start your journey</h1>
				<p>
					During your project creation, you'll be guided through a series of steps to provide the necessary details about your project. You can save your progress at any time to continue later. Let's
					get started and bring your project to life!
				</p>
			</div>
			<div className="flex justify-center">
				<Button btnProps={{ btnSize: "std", type: "button", btnColor: "green", btnRounded: "full", action: () => goToStep(1) }}>
					<div className="flex">
						Step 1 <IoArrowForward className="text-xl ml-2 mt-0.5" />
					</div>
				</Button>
			</div>
		</>
	);
};
export default StartProject;
