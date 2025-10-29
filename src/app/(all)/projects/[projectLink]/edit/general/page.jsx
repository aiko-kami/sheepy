import { redirect } from "next/navigation";

import FormGeneral from "@/components/ProjectEdit/GeneralTab/FormGeneral";
import ProjectNotFound from "@/components/Errors/ProjectNotFound";

import { ApiGetEditProjectGeneral } from "@/lib/api/projectEditionServer";

export const metadata = {
	title: "Edit project | Make It",
	description: "Project edition page",
};

const ProjectEditGeneralPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectGeneral(projectLink);
	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <ProjectNotFound message={result.message} />;
	}

	const project = result.data?.project;
	const projectTags = result.data?.project.tags;

	const tagsList = result.data?.tagsList;

	const projectId = project?.projectId;
	const status = project?.statusInfo?.currentStatus.status;
	const statusBgColor = project?.statusInfo?.currentStatus.colors.bgColor;
	const title = project?.title;
	const category = project?.category;
	const subCategory = project?.subCategory;
	const goal = project?.goal;
	const summary = project?.summary;
	const description = project?.description;
	const cover = project?.cover;
	const tags = project?.tags;
	const creatorMotivation = project?.creatorMotivation;
	const objectives = project?.objectives;

	if (!project) {
		return <ProjectNotFound />;
	}

	return (
		<div className="container mx-auto hyphens-auto">
			<FormGeneral
				project={project}
				projectId={projectId}
				projectLink={projectLink}
				status={status}
				statusBgColor={statusBgColor}
				title={title}
				category={category}
				subCategory={subCategory}
				goal={goal}
				summary={summary}
				description={description}
				cover={cover}
				tags={tags}
				tagsList={tagsList}
				creatorMotivation={creatorMotivation}
				objectives={objectives}
			/>
		</div>
	);
};

export default ProjectEditGeneralPage;
