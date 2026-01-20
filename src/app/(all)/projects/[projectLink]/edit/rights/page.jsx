import { redirect } from "next/navigation";

import FormRights from "@/components/ProjectEdit/RightsTab/FormRights";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectRights } from "@/lib/api/projectEditionServer";
import ERRORS from "@/lib/constants/errors";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditRightsPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectRights(projectLink);
	if (!result.ok || !result.data || !result.data.projectId || !result.data.membersProjectRights || !result.data.userPermissions) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.PROJECT_TITLE} message={ERRORS.NOT_FOUND.PROJECT_MESSAGE} extraMessage={result.message} />;
	}

	const projectId = result.data.projectId;
	const membersProjectRights = result.data.membersProjectRights;
	const userPermissions = result.data.userPermissions;

	return <FormRights projectId={projectId} membersProjectRights={membersProjectRights} userPermissions={userPermissions} />;
};

export default ProjectEditRightsPage;
