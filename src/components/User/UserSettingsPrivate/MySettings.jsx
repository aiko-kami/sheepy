import MySettingsPrivacy from "@/components/User/UserSettingsPrivate/MySettingsPrivacy";
import MySettingsAppearance from "@/components/User/UserSettingsPrivate/MySettingsAppearance";
import MySettingsLanguages from "@/components/User/UserSettingsPrivate/MySettingsLanguages";
import MySettingsNotifications from "@/components/User/UserSettingsPrivate/MySettingsNotifications";
import { ApiGetUserSettingsServer } from "@/lib/api/usersServer";

const MySettings = async () => {
	const result = await ApiGetUserSettingsServer();
	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title="404 - User settings Not Found" message="Sorry, we couldn’t find the user settings you are looking for... 😥" extraMessage={result.message} />;
	}

	const userSettings = result.data?.userSettings;
	if (!userSettings) {
		return <Error title="404 - User settings Not Found" message="Sorry, we couldn’t find the user settings you are looking for... 😥" />;
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
