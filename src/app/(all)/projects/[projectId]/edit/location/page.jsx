import FormLocation from "@/components/ProjectEdit/LocationTab/FormLocation";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Sheepy",
	description: "Project edition page",
};

const ProjectEditLocationPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<FormLocation project={project} />
		</div>
	);
};

export default ProjectEditLocationPage;
