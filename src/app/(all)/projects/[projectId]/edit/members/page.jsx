import FormMembers from "@/components/ProjectEdit/MembersTab/FormMembers";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Sheepy",
	description: "Project edition page",
};

const ProjectEditMembersPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<FormMembers project={project} />
		</div>
	);
};

export default ProjectEditMembersPage;
