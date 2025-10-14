import { redirect } from "next/navigation";
import FormLocation from "@/components/ProjectEdit/LocationTab/FormLocation";
import ProjectNotFound from "@/components/Errors/ProjectNotFound";

import { ApiGetEditProjectGetLocation } from "@/lib/api/projectEditionServer";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditLocationPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectGetLocation(projectLink);

	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <ProjectNotFound message={result.message} />;
	}

	const project = result.data;

	if (!project) {
		return <ProjectNotFound />;
	}

	return (
		<div className="container mx-auto hyphens-auto">
			<FormLocation project={project} />
		</div>
	);
};

export default ProjectEditLocationPage;
