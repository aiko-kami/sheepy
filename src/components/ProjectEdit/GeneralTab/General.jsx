"use client";

import { useState } from "react";

import TitleCategory from "@/components/ProjectEdit/GeneralTab/TitleCategory";
import Summary from "@/components/ProjectEdit/GeneralTab/Summary";
import Cover from "@/components/ProjectEdit/GeneralTab/Cover";
import Tags from "@/components/ProjectEdit/GeneralTab/Tags";

const General = ({ project }) => {
	const [formState, setFormState] = useState({
		projectTitle: project.title,
		projectCategory: project.category.name,
		projectSubCategory: project.subCategory.name,
		projectSummary: project.summary,
		projectDescription: project.description,
		projectGoal: project.goal,
		projectTags: project.tags.map((tag) => tag.name),
	});

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
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formState);
		closeModalReport();
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project title and category */}
				<TitleCategory formState={formState} setFormState={setFormState} onChange={onChange} />

				{/* Project summary, description and goals */}
				<Summary formState={formState} onChange={onChange} />

				{/* Project summary, description and goals */}
				<Cover formState={formState} onChange={onChange} />

				{/* Project tags */}
				<Tags formState={formState} setFormState={setFormState} />
			</form>
		</>
	);
};
export default General;
