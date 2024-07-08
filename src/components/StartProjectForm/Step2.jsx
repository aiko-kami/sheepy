"use client";

import { useState } from "react";
import FormInputField from "@/components/Forms/FormInputField";

const StepTwo = () => {
	const [formInputs, setFormInputs] = useState({
		projectSummary: "",
		projectGoal: "",
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
			<div className="container min-w-full mx-auto lg:px-8 mb-20 text-justify xl:grid grid-cols-3 gap-8">
				<p className="mb-8 text-center">Presentation of step 2</p>
				<form onSubmit={handleSubmit} className="col-span-2">
					{/* List of fields */}
					<div className="flex justify-center items-center">
						<div className="mb-10 w-full md:w-200">
							{/* Project summary */}
							<FormInputField inputName="projectSummary" inputType="text" label="Project summary" inputValue={formInputs.projectSummary} onChange={onChange}></FormInputField>
							{/* Project goal */}
							<FormInputField inputName="projectGoal" inputType="text" label="Project goal" inputValue={formInputs.projectGoal} onChange={onChange}></FormInputField>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default StepTwo;
