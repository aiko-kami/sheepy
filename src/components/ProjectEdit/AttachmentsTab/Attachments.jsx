import AttachmentsDetails from "@/components/ProjectEdit/AttachmentsTab/AttachmentsDetails";

const Attachments = ({ formState, onChange, attachments }) => {
	return (
		<>
			{/* Project attachments */}
			<AttachmentsDetails formState={formState} onChange={onChange} attachments={attachments} />
		</>
	);
};
export default Attachments;
