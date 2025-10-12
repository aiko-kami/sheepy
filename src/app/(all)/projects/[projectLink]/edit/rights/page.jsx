import FormRights from "@/components/ProjectEdit/RightsTab/FormRights";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditRightsPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<FormRights project={project} />
		</div>
	);
};

export default ProjectEditRightsPage;
