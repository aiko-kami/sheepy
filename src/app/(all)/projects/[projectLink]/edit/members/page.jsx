import FormMembers from "@/components/ProjectEdit/MembersTab/FormMembers";

import project from "@/mock/project.json";
import user from "@/mock/user.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditMembersPage = ({ params }) => {
	const { projectLink } = params;

	return (
		<div className="container mx-auto hyphens-auto">
			<FormMembers project={project} user={user} projectLink={projectLink} />
		</div>
	);
};

export default ProjectEditMembersPage;
