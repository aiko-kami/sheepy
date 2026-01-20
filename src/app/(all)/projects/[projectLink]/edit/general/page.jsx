import { redirect } from "next/navigation";

import FormGeneral from "@/components/ProjectEdit/GeneralTab/FormGeneral";
import Error from "@/components/Errors/Error";

import { ApiGetEditProjectGeneral } from "@/lib/api/projectEditionServer";
import ERRORS from "@/lib/constants/errors";

export const metadata = {
	title: "Edit project | Make It",
	description: "Project edition page",
};

const ProjectEditGeneralPage = async ({ params }) => {
	const { projectLink } = params;

	const result = await ApiGetEditProjectGeneral(projectLink);
	if (!result.ok || !result.data || !result.data.project || !result.data.tagsList || !result.data.userPermissions) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.PROJECT_TITLE} message={ERRORS.NOT_FOUND.PROJECT_MESSAGE} extraMessage={result.message} />;
	}

	const project = result.data.project;

	const tagsList = result.data.tagsList;

	const projectId = project?.projectId;
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

	const userPermissions = result.data.userPermissions;

	return (
		<FormGeneral
			projectId={projectId}
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
			userPermissions={userPermissions}
		/>
	);
};

export default ProjectEditGeneralPage;
