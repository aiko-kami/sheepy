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
			<h1 className="text-center text-xl sm:text-3xl lg:text-3xl font-semibold mb-12">Project edition</h1>
			<div className="grid grid-cols-5">
				<div className="p-2">
					{/* Project Status and links */}
					<SideMenu project={project} />
				</div>
				<div className="col-span-4 p-2">
					{/* Project general information */}
					<General project={project} />
				</div>
			</div>
		</div>
	);
};

export default ProjectPublicPage;
