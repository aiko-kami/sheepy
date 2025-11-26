import { redirect } from "next/navigation";
import FormQandAs from "@/components/ProjectEdit/QandAsTab/FormQandAs";
import Error from "@/components/Errors/Error";
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

		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" extraMessage={result.message} />;
	}

	const project = result.data?.project;

	const projectId = project?.projectId;
	const QAs = project?.QAs;

	const userPermissions = result.data?.userPermissions;

	if (!project) {
		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" />;
	}

	return <FormQandAs projectId={projectId} QAs={QAs} userPermissions={userPermissions} />;
};

export default ProjectEditQandAPage;
