import AttachmentsDetails from "@/components/ProjectEdit/AttachmentsTab/AttachmentsDetails";

const Attachments = ({ project }) => {
	return (
		<>
			{/* Project attachments */}
			<AttachmentsDetails project={project} />
		</>
	);
};
export default Attachments;
