"use client";

import { useState } from "react";

import InputField from "@/components/Forms/InputField";
import { RadioMultiField } from "@/components/Forms/ToggleField";
import { Button } from "@/components/Buttons/Buttons";
import { IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

import ProjectsTableActions from "@/components/Tables/ProjectsTableActions";

const Settings = ({ user }) => {
	const settings = user.settings;

	const [displayMode, setDisplayMode] = useState("table");

	const [formInputs, setFormInputs] = useState({
		privacyProfilePicture: settings.privacyProfilePicture,
		privacyBio: settings.privacyBio,
		privacyLocationCity: settings.privacyLocationCity,
		privacyLocationCountry: settings.privacyLocationCountry,
		privacyCompany: settings.privacyCompany,
		privacyLanguages: settings.privacyLanguages,
		privacyWebsite: settings.privacyWebsite,
		privacyProjectLike: settings.privacyProjectLike,

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
	const inputValues = ["private", "friends", "public"];
	const inputLabels = ["Only me", "My Friends", "Everyone"];

	return (
		<>
			<form onSubmit={handleSubmit}>
				{/* Page title */}
				<h1 className="text-4xl mb-12 text-center">Settings</h1>
				{/* Privacy settings */}
				<h2 className="text-xl mb-2 sm:ml-4">Privacy</h2>
				<p className="mb-6 sm:ml-4">
					Control who can see your personal information and project activities. Adjust these settings to determine the level of privacy you prefer for each aspect of your profile.
				</p>
				<div className="mb-12">
					<div className="flex justify-center">
						<div className="grid grid-cols-2 gap-8">
							<RadioMultiField
								fieldName="Profile picture"
								inputName="privacyProfilePicture"
								inputValues={inputValues}
								inputLabels={inputLabels}
								checkedValue={formInputs.privacyProfilePicture}
								onChange={onChange}
							/>
							<RadioMultiField fieldName="Your bio" inputName="privacyBio" inputValues={inputValues} inputLabels={inputLabels} checkedValue={formInputs.privacyBio} onChange={onChange} />
							<RadioMultiField
								fieldName="Your city"
								inputName="privacyLocationCity"
								inputValues={inputValues}
								inputLabels={inputLabels}
								checkedValue={formInputs.privacyLocationCity}
								onChange={onChange}
							/>
							<RadioMultiField
								fieldName="Your country"
								inputName="privacyLocationCountry"
								inputValues={inputValues}
								inputLabels={inputLabels}
								checkedValue={formInputs.privacyLocationCountry}
								onChange={onChange}
							/>
							<RadioMultiField fieldName="Your company" inputName="privacyCompany" inputValues={inputValues} inputLabels={inputLabels} checkedValue={formInputs.privacyCompany} onChange={onChange} />
							<RadioMultiField
								fieldName="Your languages"
								inputName="privacyLanguages"
								inputValues={inputValues}
								inputLabels={inputLabels}
								checkedValue={formInputs.privacyLanguages}
								onChange={onChange}
							/>
							<RadioMultiField fieldName="Your website" inputName="privacyWebsite" inputValues={inputValues} inputLabels={inputLabels} checkedValue={formInputs.privacyWebsite} onChange={onChange} />
							<RadioMultiField
								fieldName="Projects you like"
								inputName="privacyProjectLike"
								inputValues={inputValues}
								inputLabels={inputLabels}
								checkedValue={formInputs.privacyProjectLike}
								onChange={onChange}
							/>
						</div>
					</div>
				</div>
				{/* Appearance settings */}
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				<h2 className="text-xl mb-2 sm:ml-4">Appearance</h2>
				<p className="mb-6 sm:ml-4">Customize how your profile and project pages look to others.</p>
				<div className="mb-12">
					<p className=" text-xl text-center italic">No settings found</p>
				</div>
				{/* Languages settings */}
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				<h2 className="text-xl mb-2 sm:ml-4">Languages</h2>
				<p className="mb-6 sm:ml-4">Set your preferred languages for interacting with the platform and other users.</p>
				<div className="mb-12">
					<p className=" text-xl text-center italic">No settings found</p>
				</div>
				{/* Notifications settings */}
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				<h2 className="text-xl mb-2 sm:ml-4">Notifications</h2>
				<p className="mb-6 sm:ml-4">Manage your notification preferences for updates, messages, and activity alerts.</p>
				<div className="mb-12">
					<p className=" text-xl text-center italic">No settings found</p>
				</div>
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				<h2 className="text-xl mb-2 sm:ml-4">Projects I work on</h2>
				<p className="mb-6 sm:ml-4">The projects for which you are a team member</p>
				{projects.projectsOnGoing && projects.projectsOnGoing.length !== 0 ? (
					<div className="mb-12">{displayMode === "table" && <ProjectsTableActions projects={projects.projectsOnGoing} />}</div>
				) : (
					<p className=" text-xl text-center mb-12 italic">No projects found</p>
				)}
				{/* Post comment (submit form) */}
				<Button btnProps={{ btnSize: "sm", type: "submit", btnColor: "blue" }}>Post comment</Button>
			</form>
		</>
	);
};

export default Settings;
