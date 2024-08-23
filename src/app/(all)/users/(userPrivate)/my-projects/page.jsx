import MyProjects from "@/components/UserProjectsPrivate/MyProjects";

import user from "@/mock/user.json";

export const metadata = {
	title: "My projects - Sheepy",
	description: "User personal projects page",
};

const MyProjectsPage = () => {
	return (
		<>
			<div className="container min-w-full mx-auto px-2 md:px-8">
				<MyProjects user={user} />
			</div>
		</>
	);
};

export default MyProjectsPage;
