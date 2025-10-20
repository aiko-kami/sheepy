import Cover from "@/components/ProjectPublic/Cover";
import OverviewBar from "@/components/ProjectPublic/OverviewBar";
import ProjectSummary from "@/components/ProjectPublic/ProjectSummary";
import ProjectDescription from "@/components/ProjectPublic/ProjectDescription";
import ProjectCreatorMotivation from "@/components/ProjectPublic/ProjectCreatorMotivation";
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

	const result = await ApiGetProjectPublicDataByLink(projectLink);
	if (!result.ok) {
		return <ProjectNotFound message={result.message} />;
	}

	const project = normalizeProjectData(result.data.project);
	if (!project) {
		return <ProjectNotFound />;
	}

	const projectId = project.projectId;
	const status = project.statusInfo?.currentStatus.status;
	const statusColorClass = project.statusInfo?.currentStatus.colors.bgColor;
	const title = project.title;
	const owner = project.owner;
	const { userId: ownerUserId, username: ownerUsername, profilePicture: ownerProfilePicture } = owner;
	const coverLink = project.cover.link;
	const category = project.category;
	const subCategoryDetails = project.subCategoryDetails;
	const location = project.location;
	const likes = project.likes;
	const talentsNeeded = project.talentsNeeded;
	const talentProfilePicture = project.talentProfilePicture;
	const summary = project.summary;
	const goal = project.goal;
	const members = project.members;
	const description = project.description;
	const tags = project.tags;
	const similarProjects = project.similarProjects;
	const projectCount = project.projectCount;
	const steps = project.steps;
	const qnas = project.qnas;
	const comments = project.comments;
	const creatorMotivation = project.creatorMotivation;
	const objectives = project.objectives;

	return (
		<div className="container mx-auto py-8 hyphens-auto">
			{/* Project cover with title and creator */}
			<Cover title={title} coverLink={coverLink} ownerUserId={ownerUserId} ownerUsername={ownerUsername} ownerProfilePicture={ownerProfilePicture} />
			{/* List with category, location, likes and project status */}
			<OverviewBar
				category={category}
				subCategoryDetails={subCategoryDetails}
				statusColorClass={statusColorClass}
				location={location}
				likes={likes}
				status={status}
				projectLink={projectLink}
				talentsNeeded={talentsNeeded}
			/>
			{/* Summary */}
			<ProjectSummary summary={summary} />
			<div className="sm:grid sm:grid-cols-3 mb-4 sm:mb-12">
				<div className="sm:col-start-3 order-1 sm:order-2">
					{/* Goal */}
					<ProjectGoal goal={goal} />

					{/* Creator motivation */}
					<ProjectCreatorMotivation creatorMotivation={creatorMotivation} />

					{/* Talents needed */}
					<TalentsNeeded talentsNeeded={talentsNeeded} talentProfilePicture={talentProfilePicture} />

					{/* Tags */}
					<ProjectTags tags={tags} />

					{/* Members */}
					<ProjectMembers members={members} />
				</div>
				<div className="sm:col-span-2 sm:order-1 order-2 mb-4 sm:mb-0">
					{/* Project description */}
					<ProjectDescription description={description} />
				</div>
			</div>
			{/* Q&A and comments */}
			<div className="mb-4 sm:mb-12">
				<StepsQAComments projectCount={projectCount} steps={steps} qnas={qnas} comments={comments} />
			</div>
			<div className="mb-4">
				<SimilarProjects similarProjects={similarProjects} />
			</div>
		</div>
	);
};

export default ProjectPublicPage;
