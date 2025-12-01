import { redirect } from "next/navigation";

import FormStatus from "@/components/ProjectEdit/StatusTab/FormStatus";
import Error from "@/components/Errors/Error";
import { DateTime } from "luxon";

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

	const project = result.data?.project;
	const statusesList = result.data?.statusesList;

	const projectId = project?.projectId;
	const status = project?.statusInfo?.currentStatus;

	const statusHistory = project?.statusInfo?.statusHistory;
	const formattedStatusHistory = statusHistory?.map((stat) => {
		const dt = DateTime.fromISO(stat.timestamp).toLocal();
		const now = DateTime.local();
		const diffInHours = now.diff(dt, "hours").hours;
		const finalDate =
			diffInHours < 1
				? dt.toRelative({ base: now }) // "23 minutes ago"
				: `${dt.toFormat("dd LLL yyyy • HH:mm")} (${dt.zoneName})`; // absolute time

		return {
			...stat,
			formattedDate: finalDate,
		};
	});

	const visibility = project?.visibility;
	const startDate = project?.startDate;

	const userPermissions = result.data?.userPermissions;

	if (!project) {
		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" />;
	}

	return (
		<FormStatus
			projectId={projectId}
			projectLink={projectLink}
			status={status}
			statusHistory={formattedStatusHistory}
			statusesList={statusesList}
			visibility={visibility}
			startDate={startDate}
			userPermissions={userPermissions}
		/>
	);
};

export default ProjectEditStatusPage;
