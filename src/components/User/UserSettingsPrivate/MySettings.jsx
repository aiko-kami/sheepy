import MySettingsPrivacy from "@/components/User/UserSettingsPrivate/MySettingsPrivacy";
import MySettingsAppearance from "@/components/User/UserSettingsPrivate/MySettingsAppearance";
import MySettingsLanguages from "@/components/User/UserSettingsPrivate/MySettingsLanguages";
import MySettingsNotifications from "@/components/User/UserSettingsPrivate/MySettingsNotifications";
import { ApiGetUserSettingsServer } from "@/lib/api/usersServer";

const MySettings = async () => {
	const userSettingsResponse = await ApiGetUserSettingsServer();
	if (!userSettingsResponse.ok) {
		return <p>Error loading user: {userResponse.message}</p>;
	}

	const userSettings = userSettingsResponse.data;

	if (!userSettings) {
		return <div>Could not load settings.</div>;
	}

	return (
		<>
			{/* Privacy settings*/}
			<MySettingsPrivacy userPrivacySettings={userSettings.privacySettings} />

			{/* Appearance settings*/}
			<MySettingsAppearance appearanceSettings={userSettings.appearance} />

			{/* Languages settings*/}
			<MySettingsLanguages languageSettings={userSettings.language} />

			{/* Notifications settings*/}
			<MySettingsNotifications userNotificationsSettings={userSettings.notifications} />
		</>
	);
};

export default MySettings;
