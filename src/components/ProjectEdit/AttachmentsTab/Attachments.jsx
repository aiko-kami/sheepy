import AttachmentsDetails from "@/components/ProjectEdit/AttachmentsTab/AttachmentsDetails";

const Attachments = ({ projectId, attachments, userPermissions }) => {
	return (
		<>
			{/* Project attachments */}
			<AttachmentsDetails projectId={projectId} attachments={attachments} userPermissions={userPermissions} />
		</>
	);
};
export default Attachments;
