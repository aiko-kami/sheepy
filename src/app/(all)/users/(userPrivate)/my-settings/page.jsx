import MySettings from "@/components/User/UserSettingsPrivate/MySettings";

import user from "@/mock/user.json";

export const metadata = {
	title: "My settings - Sheepy",
	description: "User personal settings page",
};

const MySettingsPage = () => {
	return (
		<>
			<div className="container min-w-full mx-auto px-2 md:px-8">
				<MySettings user={user} />
			</div>
		</>
	);
};

export default MySettingsPage;
