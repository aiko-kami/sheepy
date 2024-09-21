import FormQandAs from "@/components/ProjectEdit/QandAsTab/FormQandAs";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Sheepy",
	description: "Project edition page",
};

const ProjectEditQandAPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<FormQandAs project={project} />
		</div>
	);
};

export default ProjectEditQandAPage;
