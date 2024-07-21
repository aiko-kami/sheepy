"use client";

import { useState } from "react";
import TextAreaField from "@/components/Forms/TextAreaField";

const StepFour = () => {
	const [formInputs, setFormInputs] = useState({
		creatorMotivations: "",
		projectObjectives: "",
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
					<p className="text-xl mb-4 text-center">Let's dive even deeper into your project!</p>
					<p className="mb-6 text-justify">
						This step is optional. Share what motivates you and detail the intermediate objectives necessary to reach your project's goal. Providing this information can give valuable insight into
						your vision and goals.
					</p>
				</div>
				<form onSubmit={handleSubmit} className="col-span-3">
					{/* List of fields */}
					<div className="flex justify-end items-center">
						<div className="w-full md:w-200">
							<div className="mb-4 xl:mb-8">
								{/* Creator motivations */}
								<TextAreaField
									label="Your motivations (optional):"
									labelStyle="block mb-2"
									inputName="creatorMotivations"
									inputValue={formInputs.creatorMotivations}
									onChange={onChange}
									placeholder="What inspired you to start this project?..."
									maxLength={500}
									rows="4"
									required={false}
								/>
							</div>
							{/* Project objectives */}
							<TextAreaField
								label="Objectives (optional):"
								labelStyle="block mb-2"
								inputName="projectObjectives"
								inputValue={formInputs.projectObjectives}
								onChange={onChange}
								placeholder="What are the intermediate steps or milestones necessary for your project to succeed?..."
								maxLength={500}
								rows="5"
								required={false}
							/>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};
export default StepFour;
