import FormStatus from "@/components/ProjectEdit/StatusTab/FormStatus";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditStatusPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<FormStatus project={project} />
		</div>
	);
};

export default ProjectEditStatusPage;
