import { redirect } from "next/navigation";
import FormAttachments from "@/components/ProjectEdit/AttachmentsTab/FormAttachments";
import Error from "@/components/Errors/Error";
import { ApiGetEditProjectAttachments } from "@/lib/api/projectEditionServer";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditAttachmentsPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectAttachments(projectLink);
	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" extraMessage={result.message} />;
	}

	const project = result.data?.project;

	const projectId = project?.projectId;
	const attachments = project?.privateData?.attachments;

	const userPermissions = result.data?.userPermissions;

	if (!project) {
		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" />;
	}

	return <FormAttachments projectId={projectId} attachments={attachments} userPermissions={userPermissions} />;
};

export default ProjectEditAttachmentsPage;
