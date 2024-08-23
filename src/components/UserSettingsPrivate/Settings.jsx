"use client";

import { useState } from "react";

import InputField from "@/components/Forms/InputField";
import ToggleField from "@/components/Forms/ToggleField";
import { Button } from "@/components/Buttons/Buttons";
import { IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

import ProjectsTableActions from "@/components/Tables/ProjectsTableActions";

const Settings = ({ user }) => {
	const [displayMode, setDisplayMode] = useState("table");

	const [formInputs, setFormInputs] = useState({
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
	const settings = user.settings;
	return (
		<>
			<form onSubmit={handleSubmit}>
				{/* Page title */}
				<h1 className="text-4xl mb-12 text-center">Settings</h1>

				{/* Privacy settings */}
				<h2 className="text-xl mb-2 sm:ml-4">Privacy</h2>
				<p className="mb-6 sm:ml-4">blablabla</p>
				<div className="mb-12">
					{/* Location online only (toggle button) */}
					<div className="mb-4">
						<ToggleField inputName="locationOnlineOnly" checked={formInputs.locationOnlineOnly} label="Profile picture" onChange={onChange} />
					</div>
					<div className="mb-4">
						<ToggleField inputName="locationOnlineOnly" checked={formInputs.locationOnlineOnly} label="Project online only" onChange={onChange} />
					</div>
					{/* Location country */}
					<div className="mb-6">
						<InputField inputName="locationCountry" inputType="text" label="Country" inputValue={formInputs.locationCountry} onChange={onChange} disabled={formInputs.locationOnlineOnly} />
					</div>
					{/* Location city */}
					<div className="mb-6">
						<InputField inputName="locationCity" inputType="text" label="City" inputValue={formInputs.locationCity} onChange={onChange} disabled={formInputs.locationOnlineOnly} />
					</div>
					{/* Project visibility */}
					<select
						id="projectVisibility"
						name="projectVisibility"
						value={formInputs.projectVisibility}
						onChange={onChange}
						className={`block mb-6 py-3 px-1 w-full bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none hover:border-gray-500 hover:shadow-lg ${
							formInputs.projectVisibility === "" ? "text-gray-400" : "text-white"
						}`}
					>
						<option value="" className="bg-gray-700 italic text-gray-400">
							Select the project privacy
						</option>
						<option className="bg-gray-700 text-gray-400" value="public">
							Public
						</option>
						<option className="bg-gray-700 text-gray-400" value="private">
							Private
						</option>
					</select>
				</div>

				{/* Appearance settings */}
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				<h2 className="text-xl mb-2 sm:ml-4">Appearance</h2>
				<p className="mb-6 sm:ml-4">blablabla</p>
				<div className="mb-12">
					<p className=" text-xl text-center italic">No settings found</p>
				</div>

				{/* Languages settings */}
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				<h2 className="text-xl mb-2 sm:ml-4">Languages</h2>
				<p className="mb-6 sm:ml-4">blablabla</p>
				<div className="mb-12">
					<p className=" text-xl text-center italic">No settings found</p>
				</div>

				{/* Notifications settings */}
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				<h2 className="text-xl mb-2 sm:ml-4">Notifications</h2>
				<p className="mb-6 sm:ml-4">blablabla</p>
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
			</form>
		</>
	);
};

export default Settings;
