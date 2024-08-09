import StepManager from "@/components/StartProjectForm/StepManager";

export const metadata = {
	title: "Start project - Sheepy",
	description: "Start new project page",
};

const StartMyProject = () => {
	return (
		<>
			<div className="container min-w-full mx-auto px-2 md:px-8 text-justify">
				<StepManager />
			</div>
		</>
	);
};
export default StartMyProject;
