import Attachments from "@/components/ProjectEdit/AttachmentsTab/Attachments";

const FormAttachments = ({ projectId, attachments, userPermissions }) => {
	return (
		<>
			{/* Project Attachments information */}
			<Attachments projectId={projectId} attachments={attachments} userPermissions={userPermissions} />
		</>
	);
};
export default FormAttachments;
