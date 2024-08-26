"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import SettingsPrivacy from "@/components/UserSettingsPrivate/SettingsPrivacy";
import SettingsAppearance from "@/components/UserSettingsPrivate/SettingsAppearance";
import SettingsLanguages from "@/components/UserSettingsPrivate/SettingsLanguages";
import SettingsNotifications from "@/components/UserSettingsPrivate/SettingsNotifications";

import ProjectsTableActions from "@/components/Tables/ProjectsTableActions";

const Settings = ({ user }) => {
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

		projectTitle: "",
		selectedCategory: "",
		selectedSubCategory: "",
		projectSummary: "",
		projectGoal: "",
		projectDescription: "",
		creatorMotivations: "",
		projectObjectives: "",
		locationOnlineOnly: false,
		locationCountry: "",
		locationCity: "",
		projectVisibility: "",
		projectStartDate: null,
		tags: [],
		talentsNeeded: [],
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
				<h1 className="text-4xl mb-12 text-center">Settings</h1>

				{/* Privacy settings */}
				<SettingsPrivacy formInputs={formInputs} onChange={onChange} />
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				{/* Appearance settings */}
				<SettingsAppearance setFormInputs={setFormInputs} formInputs={formInputs} />
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

				{/* Languages settings */}
				<SettingsLanguages formInputs={formInputs} onChange={onChange} />
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

				{/* Notifications settings */}
				<SettingsNotifications formInputs={formInputs} onChange={onChange} />
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

				{/* Other */}
				<h2 className="text-xl mb-2 sm:ml-4">Projects I work on</h2>
				<p className="mb-6 sm:ml-4">The projects for which you are a team member</p>
				{projects.projectsOnGoing && projects.projectsOnGoing.length !== 0 ? (
					<div className="mb-12">
						<ProjectsTableActions projects={projects.projectsOnGoing} />
					</div>
				) : (
					<p className=" text-xl text-center mb-12 italic">No projects found</p>
				)}
				{/* Save data (submit form) */}
				<div className="text-center">
					<Button btnProps={{ btnSize: "sm", type: "submit", btnColor: "blue" }}>Save</Button>
				</div>
			</form>
		</>
	);
};

export default Settings;
