import { redirect } from "next/navigation";

import FormMembers from "@/components/ProjectEdit/MembersTab/FormMembers";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectMembers } from "@/lib/api/projectEditionServer";
import { ERRORS } from "@/lib/constants";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditMembersPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectMembers(projectLink);

	//	console.dir(result, { depth: null, colors: true });

	if (!result.ok || !result.data || !result.data.project || !result.data.userPermissions || !result.data.joinProject) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.PROJECT_TITLE} message={ERRORS.NOT_FOUND.PROJECT_MESSAGE} extraMessage={result.message} />;
	}

	const project = result.data.project;

	const projectId = project?.projectId;
	const members = project?.members;
	const talentsNeeded = project?.talentsNeeded;

	const userPermissions = result.data.userPermissions;

	const joinProject = result.data.joinProject;

	return <FormMembers projectId={projectId} userPermissions={userPermissions} members={members} talentsNeeded={talentsNeeded} joinProject={joinProject} />;
};

export default ProjectEditMembersPage;
