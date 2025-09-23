import Cover from "@/components/ProjectPublic/Cover";
import ProjectDescription from "@/components/ProjectPublic/ProjectDescription";
import ProjectGoal from "@/components/ProjectPublic/ProjectGoal";
import TalentsNeeded from "@/components/ProjectPublic/TalentsNeeded";
import ProjectTags from "@/components/ProjectPublic/ProjectTags";
import ProjectMembers from "@/components/ProjectPublic/ProjectMembers";
import StepsQAComments from "@/components/ProjectPublic/StepsQAComments";
import SimilarProjects from "@/components/ProjectPublic/SimilarProjects";

import { ApiGetProjectPublicData } from "@/lib/api/projectCore";
import { normalizeProjectData } from "@/utils/projectHandlers";

export const metadata = {
	title: "Project - Sheepy",
	description: "Project public page",
};

const ProjectPublicPage = async ({ params }) => {
	const { projectId } = params;

	let project;

	try {
		const rawProject = await ApiGetProjectPublicData(projectId);
		project = normalizeProjectData(rawProject);

		console.log("🚀 ~ ProjectPublicPage ~ project:", project);
	} catch (err) {
		console.error("Failed to load project:", err);
		// Option 1: render a user-friendly message
		return <p>Something went wrong when retrieving the project</p>;
		// Option 2: throw (and let Next.js handle via error.js or not-found.js)
		// throw err;
	}

	if (!project) {
		// This check is useful if the API returns no project but still 200
		return <p>Project not found</p>;
	}

	return (
		<div className="container mx-auto py-8 hyphens-auto">
			{/* Project cover with title and creator and list with category, location, likes, project status and project summary */}
			<Cover project={project} />

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
					<ProjectDescription project={project} />
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
