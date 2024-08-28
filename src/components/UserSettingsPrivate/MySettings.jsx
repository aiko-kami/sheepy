"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import MySettingsPrivacy from "@/components/UserSettingsPrivate/MySettingsPrivacy";
import MySettingsAppearance from "@/components/UserSettingsPrivate/MySettingsAppearance";
import MySettingsLanguages from "@/components/UserSettingsPrivate/MySettingsLanguages";
import MySettingsNotifications from "@/components/UserSettingsPrivate/MySettingsNotifications";

const MySettings = ({ user }) => {
	const settings = user.settings;

	const [formInputs, setFormInputs] = useState({
		privacyProfilePicture: settings.privacyProfilePicture,
		privacyBio: settings.privacyBio,
		privacyLocationCity: settings.privacyLocationCity,
		privacyLocationCountry: settings.privacyLocationCountry,
		privacyCompany: settings.privacyCompany,
		privacyLanguages: settings.privacyLanguages,
		privacyWebsite: settings.privacyWebsite,
		privacyProjectLike: settings.privacyProjectLike,

		appearance: settings.appearance,

		language: settings.language,

		notificationNewsletter: settings.notificationNewsletter,
		notificationProjects: settings.notificationProjects,
		notificationMessages: settings.notificationMessages,
		notificationComments: settings.notificationComments,
	});

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

	const projects = user.projects;

	return (
		<>
			<form onSubmit={handleSubmit}>
				{/* Page title */}

				{/* Privacy settings */}
				<MySettingsPrivacy formInputs={formInputs} onChange={onChange} />

				{/* Appearance settings */}
				<MySettingsAppearance setFormInputs={setFormInputs} formInputs={formInputs} />

				{/* Languages settings */}
				<MySettingsLanguages formInputs={formInputs} onChange={onChange} />

				{/* Notifications settings */}
				<MySettingsNotifications formInputs={formInputs} onChange={onChange} />

				{/* Save data (submit form) */}
				<div className="text-center">
					<Button btnProps={{ btnSize: "std", type: "submit", btnColor: "blue" }}>Save my settings</Button>
				</div>
			</form>
		</>
	);
};

export default MySettings;
