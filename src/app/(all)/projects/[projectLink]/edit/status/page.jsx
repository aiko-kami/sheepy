import { redirect } from "next/navigation";

import FormStatus from "@/components/ProjectEdit/StatusTab/FormStatus";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectStatus } from "@/lib/api/projectEditionServer";

export const metadata = {
	title: "Edit project | Make It",
	description: "Project edition page",
};

const ProjectEditStatusPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectStatus(projectLink);
	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" extraMessage={result.message} />;
	}

	const project = result.data;

	const projectId = project?.projectId;
	const status = project?.statusInfo?.currentStatus.status;
	const statusHistory = project?.statusInfo?.statusHistory;
	const visibility = project?.visibility;
	const startDate = project?.startDate;

	if (!project) {
		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" />;
	}

	return <FormStatus projectId={projectId} projectLink={projectLink} status={status} statusHistory={statusHistory} visibility={visibility} startDate={startDate} />;
};

export default ProjectEditStatusPage;
