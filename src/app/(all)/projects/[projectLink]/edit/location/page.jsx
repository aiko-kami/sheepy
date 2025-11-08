import { redirect } from "next/navigation";

import FormLocation from "@/components/ProjectEdit/LocationTab/FormLocation";
import ProjectNotFound from "@/components/Errors/ProjectNotFound";

import { ApiGetEditProjectLocation } from "@/lib/api/projectEditionServer";

export const metadata = {
	title: "Edit project | Make It",
	description: "Project edition page",
};

const ProjectEditLocationPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectLocation(projectLink);

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
	const onlineOnly = project?.location?.onlineOnly;
	const city = project?.location?.city;
	const country = project?.location?.country;

	if (!project) {
		return <ProjectNotFound />;
	}

	return <FormLocation projectId={projectId} projectLink={projectLink} status={status} statusBgColor={statusBgColor} onlineOnly={onlineOnly} city={city} country={country} />;
};

export default ProjectEditLocationPage;
