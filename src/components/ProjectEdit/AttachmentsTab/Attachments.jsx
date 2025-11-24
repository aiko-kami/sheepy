import AttachmentsDetails from "@/components/ProjectEdit/AttachmentsTab/AttachmentsDetails";
import AddAttachments from "@/components/ProjectEdit/AttachmentsTab/AddAttachments";

const Attachments = ({ projectId, attachments, userPermissions }) => {
	return (
		<>
			{/* Project attachments */}
			<div className="mb-8 lg:mb-14">
				<AttachmentsDetails projectId={projectId} attachments={attachments} userPermissions={userPermissions} />
			</div>
			{/* Add attachment */}
			<div className="mb-8 lg:mb-14">
				<AddAttachments projectId={projectId} userPermissions={userPermissions} />
			</div>
		</>
	);
};
export default Attachments;
