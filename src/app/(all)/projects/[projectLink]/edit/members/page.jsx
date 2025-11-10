import { redirect } from "next/navigation";

import FormMembers from "@/components/ProjectEdit/MembersTab/FormMembers";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectMembers } from "@/lib/api/projectEditionServer";

import user from "@/mock/user.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditMembersPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectMembers(projectLink);

	//	console.log("🚀 ~ ProjectEditMembersPage ~ result:", result);
	//	console.dir(result, { depth: null, colors: true });

	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" extraMessage={result.message} />;
	}

	const project = result.data;

	const projectId = project?.projectId;
	const members = project?.members;
	const talentsNeeded = project?.talentsNeeded;

	if (!project) {
		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" />;
	}

	return <FormMembers project={project} user={user} projectId={projectId} members={members} talentsNeeded={talentsNeeded} />;
};

export default ProjectEditMembersPage;
