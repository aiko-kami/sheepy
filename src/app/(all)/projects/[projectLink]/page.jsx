import Cover from "@/components/ProjectPublic/Cover";
import OverviewBar from "@/components/ProjectPublic/OverviewBar";
import ProjectSummary from "@/components/ProjectPublic/ProjectSummary";
import ProjectDescription from "@/components/ProjectPublic/ProjectDescription";
import ProjectGoal from "@/components/ProjectPublic/ProjectGoal";
import ProjectNotFound from "@/components/Errors/ProjectNotFound";
import TalentsNeeded from "@/components/ProjectPublic/TalentsNeeded";
import ProjectTags from "@/components/ProjectPublic/ProjectTags";
import ProjectMembers from "@/components/ProjectPublic/ProjectMembers";
import StepsQAComments from "@/components/ProjectPublic/StepsQAComments";
import SimilarProjects from "@/components/ProjectPublic/SimilarProjects";

import { ApiGetProjectPublicDataByLink } from "@/lib/api/projectCore";
import { normalizeProjectData } from "@/utils/projectHandlers";

export const metadata = {
	title: "Project - Make It",
	description: "Project public page",
};

const ProjectPublicPage = async ({ params }) => {
	const { projectLink } = params;

	let project;

	try {
		const rawProject = await ApiGetProjectPublicDataByLink(projectLink);
		project = normalizeProjectData(rawProject);
	} catch (err) {
		console.error("Failed to load project:", err);
		return (
			<>
				<ProjectNotFound />
			</>
		);
	}

	if (!project) {
		return <ProjectNotFound />;
	}

	return (
		<div className="container mx-auto py-8 hyphens-auto">
			{/* Project cover with title and creator */}
			<Cover project={project} />
			{/* List with category, location, likes and project status */}
			<OverviewBar project={project} />
			{/* Summary */}
			<ProjectSummary summary={project.summary} />

			<div className="sm:grid sm:grid-cols-3 mb-4 sm:mb-12">
				<div className="sm:col-start-3 order-1 sm:order-2">
					{/* Goal */}
					<ProjectGoal goal={project.goal} />

					{/* Talents needed */}
					<TalentsNeeded project={project} />

					{/* Tags */}
					<ProjectTags tags={project.tags} />

					{/* Members */}
					<ProjectMembers members={project.members} />
				</div>
				<div className="sm:col-span-2 sm:order-1 order-2 mb-4 sm:mb-0">
					{/* Project description */}
					<ProjectDescription description={project.description} />
				</div>
			</div>
			{/* Q&A and comments */}
			<div className="mb-4 sm:mb-12">
				<StepsQAComments project={project} />
			</div>
			<div className="mb-4">
				<SimilarProjects projects={project.similarProjects} />
			</div>
		</div>
	);
};

export default ProjectPublicPage;
