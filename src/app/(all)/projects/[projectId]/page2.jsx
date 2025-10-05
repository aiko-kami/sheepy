import Cover from "@/components/ProjectPublic/Cover";
import ProjectDescription from "@/components/ProjectPublic/ProjectDescription";
import ProjectGoal from "@/components/ProjectPublic/ProjectGoal";
import TalentsNeeded from "@/components/ProjectPublic/TalentsNeeded";
import ProjectTags from "@/components/ProjectPublic/ProjectTags";
import ProjectMembers from "@/components/ProjectPublic/ProjectMembers";
import StepsQAComments from "@/components/ProjectPublic/StepsQAComments";
import SimilarProjects from "@/components/ProjectPublic/SimilarProjects";

import project from "@/mock/project.json";

import { ApiGetProjectPublicData } from "@/lib/api/projectCore";

export const metadata = {
	title: "Project - Sheepy",
	description: "Project public page",
};

const ProjectPublicPage = () => {
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
