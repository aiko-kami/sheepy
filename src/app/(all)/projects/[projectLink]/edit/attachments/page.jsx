import FormAttachments from "@/components/ProjectEdit/AttachmentsTab/FormAttachments";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditAttachmentsPage = ({ params }) => {
	const { projectLink } = params;

	return <FormAttachments project={project} projectLink={projectLink} />;
};

export default ProjectEditAttachmentsPage;
