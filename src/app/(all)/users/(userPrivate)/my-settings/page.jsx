import { redirect } from "next/navigation";

import SeeMyPublicProfileButton from "@/components/User/UserProfilePrivate/SeeMyPublicProfileButton";
import MySettingsPrivacy from "@/components/User/UserSettingsPrivate/MySettingsPrivacy";
import MySettingsAppearance from "@/components/User/UserSettingsPrivate/MySettingsAppearance";
import MySettingsLanguages from "@/components/User/UserSettingsPrivate/MySettingsLanguages";
import MySettingsNotifications from "@/components/User/UserSettingsPrivate/MySettingsNotifications";
import Error from "@/components/Errors/Error";

import { ApiGetUserSettingsServer } from "@/lib/api/userServer";
import ERRORS from "@/lib/constants/errors";

export const metadata = {
	title: "My settings - Make It",
	description: "User personal settings page",
};

const MySettingsPage = async () => {
	const result = await ApiGetUserSettingsServer();
	if (!result.ok || !result.data || !result.data.userId || !result.data.userSettings) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.USER_SETTINGS_TITLE} message={ERRORS.NOT_FOUND.USER_SETTINGS_MESSAGE} extraMessage={result.message} />;
	}

	const userId = result.data.userId;
	const userSettings = result.data.userSettings;

	console.log("🚀 ~ MySettingsPage ~ userSettings:", userSettings);

	return (
		<>
			<div className="container min-w-full mx-auto px-2 md:px-8">
				<div className="flex justify-end mb-1">
					<SeeMyPublicProfileButton userId={userId} />
				</div>

				{/* Privacy settings*/}
				<MySettingsPrivacy userPrivacySettings={userSettings.privacySettings} />

				{/* Appearance settings*/}
				<MySettingsAppearance appearanceSettings={userSettings.appearance} />

				{/* Languages settings*/}
				<MySettingsLanguages languageSettings={userSettings.language} />

				{/* Notifications settings*/}
				<MySettingsNotifications userNotificationsSettings={userSettings.notifications} />
			</div>
		</>
	);
};

export default MySettingsPage;
