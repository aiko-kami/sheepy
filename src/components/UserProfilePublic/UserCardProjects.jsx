import ProjectsTabsList from "@/components/UserProfilePublic/ProjectsTabsList";

const UserCardProjects = () => {
	return (
		<div className="md:col-span-3 bg-base-450 shadow-2xl p-6">
			<h2 className="text-2xl font-semibold mb-4">My Projects</h2>
			<ProjectsTabsList />
		</div>
	);
};
export default UserCardProjects;
