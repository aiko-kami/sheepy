"use client";

import { useState } from "react";

import InputField from "@/components/Forms/InputField";

import TitleCategory from "@/components/ProjectEdit/GeneralTab/TitleCategory";
import Summary from "@/components/ProjectEdit/GeneralTab/Summary";
import Cover from "@/components/ProjectEdit/GeneralTab/Cover";
import Location from "@/components/ProjectEdit/GeneralTab/Location";

const General = ({ project }) => {
	const [formState, setFormState] = useState({
		projectTitle: project.title,
		projectCategory: project.category.name,
		projectSubCategory: project.subCategory.name,
		projectSummary: project.summary,
		projectDescription: project.description,
		projectGoal: project.goal,
		projectLocationCity: project.locationCity,
		projectLocationCountry: project.locationCountry,
		projectGoal: project.goal,
	});

	const onChange = (event) => {
		const { name, value } = event.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
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
				<div className="pl-10">
					{/* Project title and category */}
					<TitleCategory formState={formState} setFormState={setFormState} onChange={onChange} />
					{/* Project summary, description and goals */}
					<Summary formState={formState} onChange={onChange} />
					{/* Project summary, description and goals */}
					<Cover formState={formState} onChange={onChange} />

					{/* Project location */}
					<Location formState={formState} onChange={onChange} />

					<div className="mb-8">
						<InputField inputName="projectLocationCity" inputType="text" label="Tags" inputValue={formState.projectLocationCity} onChange={onChange} />
					</div>
					<div className="mb-8">
						<InputField inputName="projectLocationCity" inputType="text" label="Status" inputValue={formState.projectLocationCity} onChange={onChange} />
					</div>
				</div>
			</form>
		</>
	);
};
export default General;
