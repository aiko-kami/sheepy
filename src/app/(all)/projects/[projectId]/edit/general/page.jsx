import General from "@/components/ProjectEdit/GeneralTab/General";
import FormGeneral from "@/components/ProjectEdit/GeneralTab/FormGeneral";
import SideMenu from "@/components/ProjectEdit/SideMenu";

import project from "@/mock/project.json";

export const metadata = {
	title: "Edit project - Sheepy",
	description: "Project edition page",
};

const ProjectEditGeneralPage = () => {
	return (
		<div className="container mx-auto hyphens-auto">
			<FormGeneral project={project} />
		</div>
	);
};

export default ProjectEditGeneralPage;
