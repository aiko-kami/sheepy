import MyProjects from "@/components/UserProjectsPrivate/MyProjects";

import user from "@/mock/user.json";

export const metadata = {
	title: "Settings - Sheepy",
	description: "User personal projects page",
};

const SettingsPage = () => {
	return (
		<>
			<div className="container min-w-full mx-auto py-8 px-2 md:px-8">This my settings Page</div>
			<div className="container min-w-full mx-auto py-8 px-2 md:px-8">Privacy</div>
			<div className="container min-w-full mx-auto py-8 px-2 md:px-8">Languages</div>
			<div className="container min-w-full mx-auto py-8 px-2 md:px-8">Appearance</div>
			<div className="container min-w-full mx-auto py-8 px-2 md:px-8">Newsletter</div>
		</>
	);
};

export default SettingsPage;
