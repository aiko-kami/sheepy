"use client";

import { useState, useEffect } from "react";

import MySettingsPrivacy from "@/components/User/UserSettingsPrivate/MySettingsPrivacy";
import MySettingsAppearance from "@/components/User/UserSettingsPrivate/MySettingsAppearance";
import MySettingsLanguages from "@/components/User/UserSettingsPrivate/MySettingsLanguages";
import MySettingsNotifications from "@/components/User/UserSettingsPrivate/MySettingsNotifications";
import Triforce from "@/components/Loaders/Triforce";
import { ApiGetUserSettings } from "@/lib/api/usersClient";
import { showErrorToast } from "@/utils/toast";

const MySettings = () => {
	const [loading, setLoading] = useState(true);
	const [userSettings, setUserSettings] = useState(null);

	useEffect(() => {
		const fetchSettings = async () => {
			try {
				const result = await ApiGetUserSettings();

				if (!result || typeof result !== "object") {
					throw new Error("Invalid response received.");
				}

				setUserSettings(result);
			} catch (error) {
				showErrorToast(error.message || "An error occurred while loading your settings.");
			} finally {
				setLoading(false);
			}
		};
		fetchSettings();
	}, []);

	if (loading) {
		return (
			<div className="relative flex flex-col py-20 items-center h-full">
				<div className="absolute inset-0 flex items-center justify-center z-10">
					<Triforce />
				</div>
			</div>
		);
	}
	if (!userSettings) return <div>Could not load settings.</div>;

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
