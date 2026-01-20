import { redirect } from "next/navigation";

import FormSteps from "@/components/ProjectEdit/StepsTab/FormSteps";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectSteps } from "@/lib/api/projectEditionServer";
import ERRORS from "@/lib/constants/errors";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditStepsPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectSteps(projectLink);
	if (!result.ok || !result.data || !result.data.project || !result.data.statusesList || !result.data.userPermissions) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.PROJECT_TITLE} message={ERRORS.NOT_FOUND.PROJECT_MESSAGE} extraMessage={result.message} />;
	}

	const project = result.data.project;
	const statusesList = result.data.statusesList;
	const projectId = project.projectId;
	const steps = project.steps;

	const userPermissions = result.data.userPermissions;

	return <FormSteps projectId={projectId} steps={steps} statusesList={statusesList} userPermissions={userPermissions} />;
};

export default ProjectEditStepsPage;
