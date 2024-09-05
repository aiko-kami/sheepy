import HeadSection from "@/components/ProjectEdit/HeadSection";
import Cover from "@/components/ProjectEdit/Cover";
import ProjectDescription from "@/components/ProjectEdit/ProjectDescription";
import ActionButtons from "@/components/ProjectEdit/ActionButtons";
import ProjectGoal from "@/components/ProjectEdit/ProjectGoal";
import TalentsNeeded from "@/components/ProjectEdit/TalentsNeeded";
import ProjectTags from "@/components/ProjectEdit/ProjectTags";
import ProjectMembers from "@/components/ProjectEdit/ProjectMembers";
import StepsQAComments from "@/components/ProjectEdit/StepsQAComments";
import SimilarProjects from "@/components/ProjectEdit/SimilarProjects";

import project from "@/mock/project.json";
import user from "@/mock/user.json";

export const metadata = {
	title: "Edit project - Sheepy",
	description: "Project edition page",
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
