import FormQandAs from "@/components/ProjectEdit/QandAsTab/FormQandAs";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditQandAPage = ({ params }) => {
	const { projectLink } = params;

	return (
		<div className="container mx-auto hyphens-auto">
			<FormQandAs project={project} projectLink={projectLink} />
		</div>
	);
};

export default ProjectEditQandAPage;
