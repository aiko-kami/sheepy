import FormDetails from "@/components/ProjectEdit/DetailsTab/FormDetails";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditDetailsPage = ({ params }) => {
	const { projectLink } = params;

	return <FormDetails project={project} projectLink={projectLink} />;
};

export default ProjectEditDetailsPage;
