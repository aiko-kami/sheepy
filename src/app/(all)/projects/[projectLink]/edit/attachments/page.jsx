import { redirect } from "next/navigation";
import FormAttachments from "@/components/ProjectEdit/AttachmentsTab/FormAttachments";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectAttachments } from "@/lib/api/projectEditionServer";
import ERRORS from "@/lib/constants/errors";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditAttachmentsPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectAttachments(projectLink);
	if (!result.ok || !result.data || !result.data.project || !result.data.userPermissions) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.PROJECT_TITLE} message={ERRORS.NOT_FOUND.PROJECT_MESSAGE} extraMessage={result.message} />;
	}

	const project = result.data.project;

	const projectId = project?.projectId;
	const attachments = project?.privateData?.attachments;

	const userPermissions = result.data.userPermissions;

	return <FormAttachments projectId={projectId} attachments={attachments} userPermissions={userPermissions} />;
};

export default ProjectEditAttachmentsPage;
