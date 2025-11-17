import { redirect } from "next/navigation";

import FormLocation from "@/components/ProjectEdit/LocationTab/FormLocation";
import Error from "@/components/Errors/Error";

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

		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" extraMessage={result.message} />;
	}

	const project = result.data?.project;

	const projectId = project?.projectId;
	const onlineOnly = project?.location?.onlineOnly;
	const city = project?.location?.city;
	const country = project?.location?.country;

	if (!project) {
		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" />;
	}

	return <FormLocation projectId={projectId} onlineOnly={onlineOnly} city={city} country={country} />;
};

export default ProjectEditLocationPage;
