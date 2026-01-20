import { redirect } from "next/navigation";

import FormQandAs from "@/components/ProjectEdit/QandAsTab/FormQandAs";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectQAs } from "@/lib/api/projectEditionServer";
import ERRORS from "@/lib/constants/errors";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditQandAPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectQAs(projectLink);
	if (!result.ok || !result.data || !result.data.project || !result.data.userPermissions) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.PROJECT_TITLE} message={ERRORS.NOT_FOUND.PROJECT_MESSAGE} extraMessage={result.message} />;
	}

	const project = result.data.project;

	const projectId = project?.projectId;
	const QAs = project?.QAs;

	const userPermissions = result.data.userPermissions;

	return <FormQandAs projectId={projectId} QAs={QAs} userPermissions={userPermissions} />;
};

export default ProjectEditQandAPage;
