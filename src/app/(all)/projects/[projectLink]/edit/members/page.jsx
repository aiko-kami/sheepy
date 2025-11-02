import { redirect } from "next/navigation";

import FormMembers from "@/components/ProjectEdit/MembersTab/FormMembers";
import ProjectNotFound from "@/components/Errors/ProjectNotFound";

import { ApiGetEditProjectMembers } from "@/lib/api/projectEditionServer";

import user from "@/mock/user.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditMembersPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectMembers(projectLink);
	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <ProjectNotFound message={result.message} />;
	}

	const project = result.data;

	const projectId = project?.projectId;
	const status = project?.statusInfo?.currentStatus.status;
	const statusBgColor = project?.statusInfo?.currentStatus.colors.bgColor;
	const members = project?.members;

	const talentsNeeded = project?.talentsNeeded;
	console.log("🚀 ~ ProjectEditMembersPage ~ talentsNeeded:", talentsNeeded);

	if (!project) {
		return <ProjectNotFound />;
	}

	return (
		<div className="container mx-auto hyphens-auto">
			<FormMembers project={project} user={user} projectId={projectId} projectLink={projectLink} status={status} statusBgColor={statusBgColor} members={members} talentsNeeded={talentsNeeded} />
		</div>
	);
};

export default ProjectEditMembersPage;
