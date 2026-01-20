import { redirect } from "next/navigation";
import FormDetails from "@/components/ProjectEdit/DetailsTab/FormDetails";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectDetails } from "@/lib/api/projectEditionServer";
import ERRORS from "@/lib/constants/errors";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditDetailsPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectDetails(projectLink);
	if (!result.ok || !result.data || !result.data.project) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.PROJECT_TITLE} message={ERRORS.NOT_FOUND.PROJECT_MESSAGE} extraMessage={result.message} />;
	}

	const project = result.data.project;

	const creator = project?.createdBy;
	const owners = project?.owners;
	const createdAt = project?.createdAt;
	const updatedAt = project?.updatedAt;
	const updatedBy = project?.updatedBy;
	const likes = project?.likes;
	const crush = project?.crush;

	return <FormDetails project={project} creator={creator} owners={owners} createdAt={createdAt} updatedAt={updatedAt} updatedBy={updatedBy} likes={likes} crush={crush} />;
};

export default ProjectEditDetailsPage;
