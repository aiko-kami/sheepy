import Settings from "@/components/UserSettingsPrivate/Settings";

import user from "@/mock/user.json";

export const metadata = {
	title: "Settings - Sheepy",
	description: "User personal settings page",
};

const SettingsPage = () => {
	return (
		<>
			<div className="container min-w-full mx-auto px-2 md:px-8">
				<Settings user={user} />
			</div>
		</>
	);
};

export default SettingsPage;
