import FormGeneral from "@/components/ProjectEdit/GeneralTab/FormGeneral";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditGeneralPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<FormGeneral project={project} />
		</div>
	);
};

export default ProjectEditGeneralPage;
