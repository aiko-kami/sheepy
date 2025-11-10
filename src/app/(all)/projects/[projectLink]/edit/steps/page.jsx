import { redirect } from "next/navigation";

import FormSteps from "@/components/ProjectEdit/StepsTab/FormSteps";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectSteps } from "@/lib/api/projectEditionServer";

export const metadata = {
	title: "Edit project - Make It",
	description: "Project edition page",
};

const ProjectEditStepsPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectSteps(projectLink);
	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" extraMessage={result.message} />;
	}

	const project = result.data;

	const projectId = project?.projectId;
	const steps = project?.steps;

	console.dir(`🚀 ~ steps:::: ${steps.stepsList[0].status.status}`, { depth: null, colors: true });

	if (!project) {
		return <Error title="404 - Project Not Found" message="Sorry, we couldn’t find the project you are looking for... 😥" />;
	}

	return <FormSteps projectId={projectId} steps={steps} />;
};

export default ProjectEditStepsPage;
