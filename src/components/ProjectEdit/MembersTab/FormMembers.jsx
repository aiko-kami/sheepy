"use client";

import { useState } from "react";
import { Button } from "@/components/Buttons/Buttons";
import Members from "@/components/ProjectEdit/MembersTab/Members";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormMembers = ({ project }) => {
	const [formState, setFormState] = useState({
		projectTitle: project.title,
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
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className="lg:grid grid-cols-5">
					<div className="p-2 mb-6">
						{/* Project Status and links */}
						<SideMenu project={project} />
					</div>
					<div className="col-span-4 lg:px-2 lg:pl-10">
						{/* Project members information */}
						<Members formState={formState} onChange={onChange} members={project.members} />
					</div>
				</div>
			</form>
		</>
	);
};
export default FormMembers;
