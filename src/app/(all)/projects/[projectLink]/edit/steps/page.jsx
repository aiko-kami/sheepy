import FormSteps from "@/components/ProjectEdit/StepsTab/FormSteps";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditStepsPage = ({ params }) => {
	const { projectLink } = params;

	return (
		<div className="container mx-auto hyphens-auto">
			<FormSteps project={project} projectLink={projectLink} />
		</div>
	);
};

export default ProjectEditStepsPage;
