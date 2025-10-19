import { redirect } from "next/navigation";

import FormStatus from "@/components/ProjectEdit/StatusTab/FormStatus";
import ProjectNotFound from "@/components/Errors/ProjectNotFound";

import { ApiGetEditProjectGetStatus } from "@/lib/api/projectEditionServer";

export const metadata = {
	title: "Edit project | Make It",
	description: "Project edition page",
};

const ProjectEditStatusPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectGetStatus(projectLink);

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
	const statusHistory = project?.statusInfo?.statusHistory;
	const visibility = project?.visibility;
	const startDate = project?.startDate;

	if (!project) {
		return <ProjectNotFound />;
	}

	return (
		<div className="container mx-auto hyphens-auto">
			<FormStatus projectId={projectId} status={status} statusBgColor={statusBgColor} statusHistory={statusHistory} visibility={visibility} startDate={startDate} />
		</div>
	);
};

export default ProjectEditStatusPage;
