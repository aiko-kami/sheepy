import FormRights from "@/components/ProjectEdit/RightsTab/FormRights";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditRightsPage = ({ params }) => {
	const { projectLink } = params;

	return (
		<div className="container mx-auto hyphens-auto">
			<FormRights project={project} projectLink={projectLink} />
		</div>
	);
};

export default ProjectEditRightsPage;
