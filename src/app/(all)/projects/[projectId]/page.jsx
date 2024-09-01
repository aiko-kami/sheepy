import HeadSection from "@/components/ProjectPublic/HeadSection";
import Cover from "@/components/ProjectPublic/Cover";
import ProjectDescription from "@/components/ProjectPublic/ProjectDescription";
import ActionButtons from "@/components/ProjectPublic/ActionButtons";
import ProjectGoal from "@/components/ProjectPublic/ProjectGoal";
import TalentsNeeded from "@/components/ProjectPublic/TalentsNeeded";
import ProjectTags from "@/components/ProjectPublic/ProjectTags";
import ProjectMembers from "@/components/ProjectPublic/ProjectMembers";
import StepsQAComments from "@/components/ProjectPublic/StepsQAComments";
import SimilarProjects from "@/components/ProjectPublic/SimilarProjects";

import project from "@/mock/project.json";
import user from "@/mock/user.json";

export const metadata = {
	title: "Project - Sheepy",
	description: "Project public page",
};

const ProjectPublicPage = () => {
	return (
		<div className="container mx-auto py-8 hyphens-auto">
			{/* Project title, summary and creator */}
			<HeadSection project={project} />

			{/* Project cover and list with category, location, likes, project status */}
			<Cover project={project} />
			<div className="lg:px-16">
				<div className="grid sm:grid-cols-3 mb-4 sm:mb-12">
					<div className="sm:col-span-2 mb-4 sm:pr-8 lg:pr-16 sm:mb-0">
						{/* Project description */}
						<ProjectDescription project={project} />
					</div>

					<div>
						{/* Buttons Join project, Like and Share */}
						<ActionButtons project={project} user={user} />

						{/* Goal */}
						<ProjectGoal goal={project.goal} />

						{/* Talents needed */}
						<TalentsNeeded project={project} user={user} />

						{/* Tags */}
						<ProjectTags tags={project.tags} />

						{/* Members */}
						<ProjectMembers members={project.members} />
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
		</div>
	);
};

export default ProjectPublicPage;
