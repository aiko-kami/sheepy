"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { SelectRoundedField } from "@/components/Forms/SelectField";
import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/Buttons/Buttons";
import { Badge } from "@/components/Badges/Badges";

const HeadSection = ({ project }) => {
	const [formState, setFormState] = useState({
		projectTitle: "My Title",
		projectCategory: "Art",
		projectSummary: "blablablablabla",
		projectDescription: "blablablablabla",
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
			{/* Page title */}
			<h1 className="text-xl sm:text-3xl lg:text-3xl font-semibold mb-8 ">Project edition</h1>
			<form onSubmit={onSubmit}>
				<div className="grid grid-cols-3">
					<div className=""></div>
					<div className="col-span-2">
						<div className="mb-8">
							<InputField inputName="projectTitle" inputType="text" label="Project title" inputValue={formState.projectTitle} onChange={onChange} />
						</div>
						<div className="mb-8">
							<InputField inputName="projectCategory" inputType="text" label="Project category" inputValue={formState.projectCategory} onChange={onChange} />
						</div>
						<div className="mb-8">
							<InputField inputName="projectSubcategory" inputType="text" label="Project sub-category" inputValue={formState.projectSubcategory} onChange={onChange} />
						</div>
						<div className="mb-8">
							<InputField inputName="projectSummary" inputType="text" label="Project summary" inputValue={formState.projectSummary} onChange={onChange} />
						</div>
						<div className="mb-8">
							<InputField inputName="projectDescription" inputType="text" label="Project description" inputValue={formState.projectDescription} onChange={onChange} />
						</div>
						<div className="mb-8">
							<InputField inputName="projectLocationCountry" inputType="text" label="Project country" inputValue={formState.projectLocationCountry} onChange={onChange} />
						</div>
						<div className="mb-8">
							<InputField inputName="projectLocationCity" inputType="text" label="Project city" inputValue={formState.projectLocationCity} onChange={onChange} />
						</div>
					</div>
				</div>
			</form>
			{/* Summary */}
			<p className="mb-2 text-lg lg:mx-1/7 text-justify">{project.summary}</p>
			{/* Creator */}
			<div className="text-gray-300 text-lg mb-6 flex items-center justify-center">
				<span className="">by</span>
				<Link href={`/users/${project.userId}`} className="ml-1 mr-2 font-semibold">
					{project.creator}
				</Link>
				<Link href={`/users/${project.userId}`}>
					<Image src={project.creatorProfilePicture} className="object-cover rounded-full w-10 h-10" alt="creator profile picture" height={0} width={0} sizes="100vw" />
				</Link>
			</div>
		</>
	);
};
export default HeadSection;
