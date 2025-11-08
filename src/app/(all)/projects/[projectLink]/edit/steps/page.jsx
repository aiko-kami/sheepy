import { redirect } from "next/navigation";

import FormSteps from "@/components/ProjectEdit/StepsTab/FormSteps";
import ProjectNotFound from "@/components/Errors/ProjectNotFound";

import { ApiGetEditProjectSteps } from "@/lib/api/projectEditionServer";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditStepsPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectSteps(projectLink);
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
	const steps = project?.steps;

	if (!project) {
		return <ProjectNotFound />;
	}

	return <FormSteps projectId={projectId} projectLink={projectLink} status={status} statusBgColor={statusBgColor} steps={steps} />;
};

export default ProjectEditStepsPage;
