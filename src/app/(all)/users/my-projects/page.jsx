import MyProjects from "@/components/UserProjectsPrivate/MyProjects";

import user from "@/mock/user.json";

export const metadata = {
	title: "My projects - Sheepy",
	description: "User personal projects page",
};

const MyProjectsPage = () => {
	const allProjects = [...user.projects.projectsOnGoing, ...user.projects.projectsCreated, ...user.projects.projectsCompleted];

	return (
		<>
			<div className="container min-w-full mx-auto py-8 px-2 md:px-8">
				<MyProjects projects={allProjects} />
			</div>
		</>
	);
};

export default MyProjectsPage;
