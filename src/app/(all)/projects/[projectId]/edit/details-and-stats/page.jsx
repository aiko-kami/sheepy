import FormDetailsandStats from "@/components/ProjectEdit/DetailsandStatsTab/FormDetailsandStats";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Sheepy",
	description: "Project edition page",
};

const ProjectEditDetailsandStatsPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<FormDetailsandStats project={project} />
		</div>
	);
};

export default ProjectEditDetailsandStatsPage;
