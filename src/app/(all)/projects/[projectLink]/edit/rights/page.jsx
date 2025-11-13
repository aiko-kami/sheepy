import { redirect } from "next/navigation";

import FormRights from "@/components/ProjectEdit/RightsTab/FormRights";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectRights } from "@/lib/api/projectEditionServer";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditRightsPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectRights(projectLink);
	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" extraMessage={result.message} />;
	}

	const projectId = result.data?.projectId;
	const membersProjectRights = result.data?.membersProjectRights;

	if (!projectId) {
		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" />;
	}

	return <FormRights projectId={projectId} membersProjectRights={membersProjectRights} />;
};

export default ProjectEditRightsPage;
