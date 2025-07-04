"use client";

import { TextAreaField } from "@/components/Forms/TextAreaField";
import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/Buttons/Buttons";
import { IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

const StepFour = ({ formInputs, onChange, objectiveInput, addObjective, removeObjective, handleObjectiveInputChange, objectiveError }) => {
	return (
		<>
			<div className="container min-w-full m-auto lg:px-8 text-justify xl:grid grid-cols-5 gap-8">
				<div className="col-span-2 xl:pl-14">
					<p className="text-xl mb-4 text-center">Let's dive even deeper into your project!</p>
					<p className="mb-6 text-justify">
						This step is optional. Share what motivates you and detail the intermediate objectives necessary to reach your project's goal. Providing this information can give valuable insight into
						your vision and goals.
					</p>
				</div>
				<div className="col-span-3">
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

							<div className="relative">
								<div className="flex items-center">
									<div className="w-full mr-2 mb-6">
										<InputField inputName="objective" inputType="text" label="Objectives (optional)" inputValue={objectiveInput} onChange={handleObjectiveInputChange} />
									</div>
									<div className="min-w-fit">
										<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: addObjective }}>
											<div className="flex">
												Add objective <IoAddCircleOutline className="text-xl ml-2" />
											</div>
										</Button>
									</div>
								</div>
								<div className="absolute left-0 top-12 mb-2 min-h-6 text-sm">{objectiveError && <p className="text-xs text-red-600">{objectiveError}</p>}</div>

								{/* List of project objectives */}
								<div className="mt-2 min-h-32">
									{formInputs.projectObjectives.length > 0 && (
										<div className="flex flex-wrap gap-2">
											{formInputs.projectObjectives.map((objective, index) => (
												<span key={index} className="flex items-center px-3 pt-0.5 pb-1 mt-1 bg-gray-200 text-gray-800 rounded-full">
													{objective}
													<button type="button" className="ml-1 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out" onClick={() => removeObjective(objective)}>
														<IoCloseCircleOutline className="text-lg" title="Remove objective" />
													</button>
												</span>
											))}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default StepFour;
