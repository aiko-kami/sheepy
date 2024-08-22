import MyProjects from "@/components/UserProjectsPrivate/MyProjects";

import user from "@/mock/user.json";

export const metadata = {
	title: "Settings - Sheepy",
	description: "User personal projects page",
};

const SettingsPage = () => {
	return (
		<>
			<div className="container min-w-full mx-auto px-2 md:px-8">
				This my settings Page
				<p className="py-8">Privacy</p>
				<p className="py-8">Languages</p>
				<p className="py-8">Appearance</p>
				<p className="py-8">Newsletter</p>
			</div>
		</>
	);
};

export default SettingsPage;
