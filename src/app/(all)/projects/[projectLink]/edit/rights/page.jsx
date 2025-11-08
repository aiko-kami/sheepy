import FormRights from "@/components/ProjectEdit/RightsTab/FormRights";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditRightsPage = ({ params }) => {
	const { projectLink } = params;

	return <FormRights project={project} projectLink={projectLink} />;
};

export default ProjectEditRightsPage;
