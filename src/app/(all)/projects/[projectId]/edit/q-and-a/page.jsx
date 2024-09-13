import QandAs from "@/components/ProjectEdit/QandAsTab/QandAs";
import SideMenu from "@/components/ProjectEdit/SideMenu";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Sheepy",
	description: "Project edition page",
};

const ProjectEditQandAPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<div className="lg:grid grid-cols-5">
				<div className="p-2 mb-6">
					{/* Project Status and links */}
					<SideMenu project={project} />
				</div>
				<div className="col-span-4 py-2 lg:px-2 lg:pl-10">
					{/* Project Q&As information */}
					<QandAs project={project} />
				</div>
			</div>
		</div>
	);
};

export default ProjectEditQandAPage;
