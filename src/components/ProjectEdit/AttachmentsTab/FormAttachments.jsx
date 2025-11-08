import Attachments from "@/components/ProjectEdit/AttachmentsTab/Attachments";
import SideMenu from "@/components/ProjectEdit/SideMenu";
import ProjectEditNavbar from "@/components/ProjectEdit/ProjectEditNavbar";

const FormAttachments = ({ project, projectLink }) => {
	return (
		<>
			{/* Project Attachments information */}
			<Attachments project={project} />
		</>
	);
};
export default FormAttachments;
