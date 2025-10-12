import FormDetails from "@/components/ProjectEdit/DetailsTab/FormDetails";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditDetailsPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<FormDetails project={project} />
		</div>
	);
};

export default ProjectEditDetailsPage;
