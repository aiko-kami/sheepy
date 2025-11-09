import { redirect } from "next/navigation";

import FormRights from "@/components/ProjectEdit/RightsTab/FormRights";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectRights } from "@/lib/api/projectEditionServer";

import project from "@/mock/project.json";

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

	const projectRights = result.data.projectRights;
	const projectStatus = result.data.projectStatus;
	const status = projectStatus?.status;
	const statusBgColor = projectStatus?.colors.bgColor;

	// const project = result.data;

	// const projectId = project?.projectId;
	// const status = project?.statusInfo?.currentStatus.status;
	// const statusBgColor = project?.statusInfo?.currentStatus.colors.bgColor;
	// const steps = project?.steps;

	if (!project) {
		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" />;
	}

	return <FormRights projectId={projectId} QAs={QAs} />;
};

export default ProjectEditRightsPage;
