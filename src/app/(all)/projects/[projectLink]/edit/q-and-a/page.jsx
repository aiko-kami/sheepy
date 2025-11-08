import { redirect } from "next/navigation";

import FormQandAs from "@/components/ProjectEdit/QandAsTab/FormQandAs";

import ProjectNotFound from "@/components/Errors/ProjectNotFound";

import { ApiGetEditProjectQAs } from "@/lib/api/projectEditionServer";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditQandAPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectQAs(projectLink);
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
	const QAs = project?.QAs;

	if (!project) {
		return <ProjectNotFound />;
	}

	return <FormQandAs projectId={projectId} projectLink={projectLink} status={status} statusBgColor={statusBgColor} QAs={QAs} />;
};

export default ProjectEditQandAPage;
