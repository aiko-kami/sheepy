import { redirect } from "next/navigation";

import MyProjects from "@/components/User/UserProjectsPrivate/MyProjects";

import Error from "@/components/Errors/Error";

import { ApiGetUserProjectsServer } from "@/lib/api/userServer";
import { ERRORS } from "@/lib/constants";

export const metadata = {
	title: "My projects - Make It",
	description: "User personal projects page",
};

const MyProjectsPage = async () => {
	const result = await ApiGetUserProjectsServer();
	if (!result.ok || !result.data || !result.data.user) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.USER_TITLE} message={ERRORS.NOT_FOUND.USER_MESSAGE} extraMessage={result.message} />;
	}

	const user = result.data.user;
	const projects = result.data.projects;

	console.log("🚀 ~ MyProjectsPage ~ projects:", projects.created[1].statusInfo);

	const projectsCount = result.data.projectsCount;

	const joinProjectInvitations = result.data.joinProjectInvitations;
	const joinProjectRequests = result.data.joinProjectRequests;

	return (
		<>
			<div className="container min-w-full mx-auto px-2 md:px-8">
				<MyProjects user={user} projects={projects} projectsCount={projectsCount} joinProjectInvitations={joinProjectInvitations} joinProjectRequests={joinProjectRequests} />
			</div>
		</>
	);
};

export default MyProjectsPage;
