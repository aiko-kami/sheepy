"use client";

import { useState } from "react";

import InputField from "@/components/Forms/InputField";

import TitleCategory from "@/components/ProjectEdit/GeneralTab/TitleCategory";
import Summary from "@/components/ProjectEdit/GeneralTab/Summary";
import Cover from "@/components/ProjectEdit/GeneralTab/Cover";
import Location from "@/components/ProjectEdit/GeneralTab/Location";
import Tags from "@/components/ProjectEdit/GeneralTab/Tags";
import Status from "@/components/ProjectEdit/GeneralTab/Status";

const General = ({ project }) => {
	const [formState, setFormState] = useState({
		projectTitle: project.title,
		projectCategory: project.category.name,
		projectSubCategory: project.subCategory.name,
		projectSummary: project.summary,
		projectDescription: project.description,
		projectGoal: project.goal,
		locationOnlineOnly: project.locationOnlineOnly,
		projectLocationCity: project.locationCity,
		projectLocationCountry: project.locationCountry,
		projectTags: [],
	});

	const [tagInput, setTagInput] = useState("");
	const [tagError, setTagError] = useState("");

	const addTag = () => {
		if (!tagInput) {
			setTagError("Please enter a tag.");
		}
		if (tagInput && formState.projectTags.includes(tagInput)) {
			setTagError("This tag is already present in the list.");
		}
		if (tagInput && formState.projectTags.length >= 8) {
			setTagError("You can only add up to 8 tags.");
		}
		if (tagInput && !formState.projectTags.includes(tagInput) && formState.projectTags.length < 8) {
			setFormState((prevState) => ({
				...prevState,
				projectTags: [...prevState.projectTags, tagInput],
			}));
			setTagInput("");
			setTagError("");
		}
	};

	const removeTag = (tagToRemove) => {
		setFormState((prevState) => ({
			...prevState,
			projectTags: prevState.projectTags.filter((tag) => tag !== tagToRemove),
		}));
	};

	const handleTagInputChange = (e) => {
		setTagError("");
		setTagInput(e.target.value);
	};

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const inputValue = type === "checkbox" ? checked : value;
		setFormState((prevState) => ({
			...prevState,
			[name]: inputValue,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The invitation has been reported:", formState);
		closeModalReport();
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className="lg:pl-10">
					{/* Project title and category */}
					<TitleCategory formState={formState} setFormState={setFormState} onChange={onChange} />

					{/* Project summary, description and goals */}
					<Summary formState={formState} onChange={onChange} />

					{/* Project summary, description and goals */}
					<Cover formState={formState} onChange={onChange} />

					{/* Project location */}
					<Location formState={formState} onChange={onChange} />

					{/* Project tags */}
					<Tags formState={formState} tagInput={tagInput} addTag={addTag} removeTag={removeTag} handleTagInputChange={handleTagInputChange} tagError={tagError} />

					{/* Project status */}
					<Status formState={formState} />
				</div>
			</form>
		</>
	);
};
export default General;
