import { redirect } from "next/navigation";
import FormDetails from "@/components/ProjectEdit/DetailsTab/FormDetails";
import Error from "@/components/Errors/Error";
import { ApiGetEditProjectDetails } from "@/lib/api/projectEditionServer";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditDetailsPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectDetails(projectLink);
	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" extraMessage={result.message} />;
	}

	const project = result.data?.project;

	const creator = project?.createdBy;
	const owners = project?.owners;
	const createdAt = project?.createdAt;
	const updatedAt = project?.updatedAt;
	const updatedBy = project?.updatedBy;
	const likes = project?.likes;
	const crush = project?.crush;

	if (!project) {
		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" />;
	}

	return <FormDetails project={project} creator={creator} owners={owners} createdAt={createdAt} updatedAt={updatedAt} updatedBy={updatedBy} likes={likes} crush={crush} />;
};

export default ProjectEditDetailsPage;
