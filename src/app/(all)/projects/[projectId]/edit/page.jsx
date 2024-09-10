import General from "@/components/ProjectEdit/GeneralTab/General";
import SideMenu from "@/components/ProjectEdit/SideMenu";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Sheepy",
	description: "Project edition page",
};

const ProjectPublicPage = () => {
	return (
		<div className="container mx-auto py-8 hyphens-auto">
			<h1 className="text-center text-3xl font-semibold mb-6">Project edition</h1>
			<div className="lg:grid grid-cols-5">
				<div className="p-2 mb-6">
					{/* Project Status and links */}
					<SideMenu project={project} />
				</div>
				<div className="col-span-4 py-2 lg:px-2">
					{/* Project general information */}
					<General project={project} />
				</div>
			</div>
		</div>
	);
};

export default ProjectPublicPage;
