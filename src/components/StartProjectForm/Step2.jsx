"use client";

import { TextAreaField } from "@/components/Forms/TextAreaField";

const StepTwo = ({ formInputs, onChange }) => {
	return (
		<>
			<div className="container min-w-full m-auto lg:px-8 text-justify xl:grid grid-cols-5 gap-8">
				<div className="col-span-2 xl:pl-14">
					<p className="text-xl mb-4 text-center">Let's add some details to your project!</p>
					<p className="mb-6 text-justify xl:text-center">Give a brief summary and set a goal for your project.</p>
				</div>
				<div className="col-span-3">
					{/* List of fields */}
					<div className="flex justify-end items-center">
						<div className="w-full md:w-200">
							<div className="mb-4 xl:mb-8">
								{/* Project summary */}
								<TextAreaField
									label="Project summary:"
									labelStyle="block mb-2"
									inputName="projectSummary"
									inputValue={formInputs.projectSummary}
									onChange={onChange}
									placeholder="Summarize your project in a few sentences... (300 characters max)"
									maxLength={300}
									rows="6"
									required={true}
								/>
							</div>
							{/* Project goal */}
							<TextAreaField
								label="Project goal:"
								labelStyle="block mb-2"
								inputName="projectGoal"
								inputValue={formInputs.projectGoal}
								onChange={onChange}
								placeholder="What is the main goal of your project?... (500 characters max)"
								maxLength={500}
								rows="6"
								required={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StepTwo;
