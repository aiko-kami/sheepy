"use client";

import { useState } from "react";
import TextAreaField from "@/components/Forms/TextAreaField";

const StepThree = () => {
	const [formInputs, setFormInputs] = useState({
		projectDescription: "",
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormInputs((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form data:", formInputs);
	};

	return (
		<>
			<div className="container min-w-full mx-auto lg:px-8 mb-8 md:mb-20 text-justify xl:grid grid-cols-5 gap-8">
				<div className="col-span-2 xl:pl-14">
					<p className="text-xl mb-2 text-center">Now it’s time to dive into the details!</p>
					<p className="mb-6 text-justify">Share a complete description of your project to give others a clear understanding of what it's all about.</p>
				</div>
				<form onSubmit={handleSubmit} className="col-span-3">
					{/* List of fields */}
					<div className="flex justify-end items-center">
						<div className="w-full md:w-200">
							<div className="mb-4">
								{/* Project description */}
								<TextAreaField
									label="Project description:"
									labelStyle="block mb-2"
									inputName="projectDescription"
									inputValue={formInputs.projectDescription}
									onChange={onChange}
									placeholder="What's the story behind your project?... (2000 characters max)"
									maxLength={2000}
									rows="16"
									required={true}
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};
export default StepThree;
