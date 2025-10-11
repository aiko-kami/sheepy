import FormSteps from "@/components/ProjectEdit/StepsTab/FormSteps";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Sheepy",
	description: "Project edition page",
};

const ProjectEditStepsPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<FormSteps project={project} />
		</div>
	);
};

export default ProjectEditStepsPage;
