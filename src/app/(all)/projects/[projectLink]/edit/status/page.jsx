import { redirect } from "next/navigation";

import FormStatus from "@/components/ProjectEdit/StatusTab/FormStatus";
import Error from "@/components/Errors/Error";
import { DateTime } from "luxon";

import { ApiGetEditProjectStatus } from "@/lib/api/projectEditionServer";
import { ERRORS } from "@/lib/constants";

export const metadata = {
	title: "Edit project | Make It",
	description: "Project edition page",
};

const ProjectEditStatusPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectStatus(projectLink);
	if (!result.ok || !result.data || !result.data.project || !result.data.statusesList || !result.data.userPermissions) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.PROJECT_TITLE} message={ERRORS.NOT_FOUND.PROJECT_MESSAGE} extraMessage={result.message} />;
	}

	const project = result.data.project;
	const statusesList = result.data.statusesList;

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

	const userPermissions = result.data.userPermissions;

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
