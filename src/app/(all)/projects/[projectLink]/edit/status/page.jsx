import { redirect } from "next/navigation";

import FormStatus from "@/components/ProjectEdit/StatusTab/FormStatus";
import ProjectNotFound from "@/components/Errors/ProjectNotFound";

import { ApiGetEditProjectGetStatus } from "@/lib/api/projectEditionServer";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditStatusPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectGetStatus(projectLink);

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
			<FormStatus project={project} />
		</div>
	);
};

export default ProjectEditStatusPage;
