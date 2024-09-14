import Status from "@/components/ProjectEdit/StatusTab/Status";
import SideMenu from "@/components/ProjectEdit/SideMenu";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Sheepy",
	description: "Project edition page",
};

const ProjectEditStatusPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<div className="lg:grid grid-cols-5">
				<div className="p-2 mb-6">
					{/* Project Status and links */}
					<SideMenu project={project} />
				</div>
				<div className="col-span-4 lg:px-2 lg:pl-10">
					{/* Project status information */}
					<Status project={project} />
				</div>
			</div>
		</div>
	);
};

export default ProjectEditStatusPage;
