import AttachmentsDetails from "@/components/ProjectEdit/AttachmentsTab/AttachmentsDetails";

const Attachments = ({ setFormState, project }) => {
	return (
		<>
			{/* Project attachments */}
			<AttachmentsDetails setFormState={setFormState} project={project} />
		</>
	);
};
export default Attachments;
