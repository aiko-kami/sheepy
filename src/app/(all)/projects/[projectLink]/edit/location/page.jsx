import { redirect } from "next/navigation";

import FormLocation from "@/components/ProjectEdit/LocationTab/FormLocation";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectLocation } from "@/lib/api/projectEditionServer";
import { ERRORS } from "@/lib/constants";

export const metadata = {
	title: "Edit project | Make It",
	description: "Project edition page",
};

const ProjectEditLocationPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectLocation(projectLink);
	if (!result.ok || !result.data || !result.data.project || !result.data.userPermissions) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.PROJECT_TITLE} message={ERRORS.NOT_FOUND.PROJECT_MESSAGE} extraMessage={result.message} />;
	}

	const project = result.data.project;

	const projectId = project?.projectId;
	const onlineOnly = project?.location?.onlineOnly;
	const city = project?.location?.city;
	const country = project?.location?.country;

	const userPermissions = result.data.userPermissions;

	return <FormLocation projectId={projectId} onlineOnly={onlineOnly} city={city} country={country} userPermissions={userPermissions} />;
};

export default ProjectEditLocationPage;
