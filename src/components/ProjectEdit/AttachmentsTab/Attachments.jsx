import AttachmentsDetails from "@/components/ProjectEdit/AttachmentsTab/AttachmentsDetails";

const Attachments = ({ setFormState, attachments }) => {
	return (
		<>
			{/* Project attachments */}
			<AttachmentsDetails setFormState={setFormState} attachments={attachments} />
		</>
	);
};
export default Attachments;
