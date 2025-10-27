import Attachments from "@/components/ProjectEdit/AttachmentsTab/Attachments";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormAttachments = ({ project, projectLink }) => {
	return (
		<>
			<div className="lg:grid grid-cols-5">
				<div className="p-2 mb-6">
					{/* Project Status and links */}
					<SideMenu project={project} projectLink={projectLink} />
				</div>
				<div className="col-span-4 lg:px-2 lg:pl-10">
					{/* Project Attachments information */}
					<Attachments project={project} />
				</div>
			</div>
		</>
	);
};
export default FormAttachments;
