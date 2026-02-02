import ProjectsTabsList from "@/components/User/UserProfilePublic/ProjectsTabsList";

const UserCardProjects = ({ projects, projectsCount }) => {
	return (
		<div className="md:col-span-3 bg-base-450 shadow-2xl p-6 pb-8">
			<h2 className="text-2xl font-semibold mb-4">My Projects</h2>
			<ProjectsTabsList projects={projects} projectsCount={projectsCount} />
		</div>
	);
};
export default UserCardProjects;
