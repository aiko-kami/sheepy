import MyProjects from "@/components/User/UserProjectsPrivate/MyProjects";

import user from "@/mock/user.json";

export const metadata = {
	title: "Settings - Make It",
	description: "User personal projects page",
};

const SettingsPage = () => {
	return (
		<>
			<div className="container min-w-full mx-auto px-2 md:px-8">
				{/* Privacy settings */}
				<h2 className="text-xl mb-2 sm:ml-4">This is the Help page</h2>
				<p className="mb-6 sm:ml-4">Blablabla</p>
			</div>
		</>
	);
};

export default SettingsPage;
