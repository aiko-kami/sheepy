import Rights from "@/components/ProjectEdit/RightsTab/Rights";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormRights = ({ project }) => {
	return (
		<>
			<div className="lg:grid grid-cols-5">
				<div className="p-2 mb-6">
					{/* Project Status and links */}
					<SideMenu project={project} />
				</div>
				<div className="col-span-4 lg:px-2 lg:pl-10">
					{/* Project Q&As information */}
					<Rights project={project} />
				</div>
			</div>
		</>
	);
};
export default FormRights;
