"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/Buttons/Buttons";
import MySettingsPrivacy from "@/components/User/UserSettingsPrivate/MySettingsPrivacy";
import MySettingsAppearance from "@/components/User/UserSettingsPrivate/MySettingsAppearance";
import MySettingsLanguages from "@/components/User/UserSettingsPrivate/MySettingsLanguages";
import MySettingsNotifications from "@/components/User/UserSettingsPrivate/MySettingsNotifications";
import { ApiGetUserSettings } from "@/lib/api/usersClient";
import { showSuccessToast, showErrorToast } from "@/utils/toast";

const MySettings = () => {
	const [formInputs, setFormInputs] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchSettings = async () => {
			try {
				const userSettings = await ApiGetUserSettings();
				if (userSettings) {
					setFormInputs({
						// Privacy
						privacyProfilePicture: userSettings.privacySettings.privacyProfilePicture,
						privacyBio: userSettings.privacySettings.privacyBio,
						privacyLocationCity: userSettings.privacySettings.privacyLocationCity,
						privacyLocationCountry: userSettings.privacySettings.privacyLocationCountry,
						privacyCompany: userSettings.privacySettings.privacyCompany,
						privacyLanguages: userSettings.privacySettings.privacyLanguages,
						privacyWebsite: userSettings.privacySettings.privacyWebsite,
						privacyProjectLike: userSettings.privacySettings.privacyProjectLike,

						// Display
						appearance: userSettings.appearance,
						language: userSettings.language,
						displayMode: userSettings.displayMode,

						// Notifications (convert to boolean if needed)
						notificationNewsletter: userSettings.notificationNewsletter,
						notificationProjects: userSettings.notificationProjects,
						notificationMessages: userSettings.notificationMessages,
						notificationComments: userSettings.notificationComments,
					});
				} else {
					throw new Error(result.message || "Failed to load settings");
				}
			} catch (error) {
				showErrorToast(error.message || "An error occurred while loading your settings.");
			} finally {
				setLoading(false);
			}
		};

		fetchSettings();
	}, []);

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const inputValue = type === "checkbox" ? checked : value;
		setFormInputs((prevState) => ({
			...prevState,
			[name]: inputValue,
		}));
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// You can perform actions like searching here
		console.log("🚀 ~ handleSubmit ~ Project inputs:", formInputs);
	};

	if (loading) return <div>Loading settings...</div>;
	if (!formInputs) return <div>Could not load settings.</div>;

	return (
		<>
			<form onSubmit={handleSubmit}>
				{/* Privacy settings*/}
				<MySettingsPrivacy formInputs={formInputs} onChange={onChange} />

				{/* Appearance settings*/}
				<MySettingsAppearance setFormInputs={setFormInputs} formInputs={formInputs} />

				{/* Languages settings*/}
				<MySettingsLanguages formInputs={formInputs} onChange={onChange} />

				{/* Notifications settings*/}
				<MySettingsNotifications formInputs={formInputs} onChange={onChange} />

				{/* Save data (submit form)*/}
				<div className="text-center">
					<Button btnProps={{ btnSize: "std", type: "submit", btnColor: "blue" }}>Save my settings</Button>
				</div>
			</form>
		</>
	);
};

export default MySettings;
