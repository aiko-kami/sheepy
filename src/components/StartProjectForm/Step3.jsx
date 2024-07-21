"use client";

import TextAreaField from "@/components/Forms/TextAreaField";

const StepThree = ({ formInputs, onChange }) => {
	return (
		<>
			<div className="container min-w-full m-auto lg:px-8 text-justify xl:grid grid-cols-5 gap-8">
				<div className="col-span-2 xl:pl-14">
					<p className="text-xl mb-4 text-center">Now it’s time to dive into the details!</p>
					<p className="mb-6 text-justify">Share a complete description of your project to give others a clear understanding of what it's all about.</p>
				</div>
				<div className="col-span-3">
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
									placeholder="What's the story behind your project?... (10 000 characters max)"
									maxLength={10000}
									rows="20"
									required={true}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default StepThree;
