"use client";

import { useState } from "react";
import InputField from "@/components/Forms/InputField";
import { ToggleField } from "@/components/Forms/ToggleField";
import { Button } from "@/components/Buttons/Buttons";
import { IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import DatePickerField from "@/components/Forms/DatePickerField";

const StepFive = ({ formInputs, onChange, tagInput, addTag, removeTag, handleTagInputChange, setProjectStartDate }) => {
	return (
		<>
			<div className="container min-w-full m-auto pr-2 lg:px-8 text-justify xl:grid grid-cols-5 gap-8">
				<div className="col-span-2 xl:pl-14">
					<p className="text-xl mb-4 text-center">Your project creation is almost complete! Just a few more details to finalize.</p>
					<div className="mb-6 text-justify">
						<ul className="list-disc list-inside">
							<li className="mb-4">Specify whether the project is online-only, meaning it doesn't require a physical location and participants can join remotely from anywhere.</li>
							<li className="mb-4">If the project is not online-only, provide the project's location.</li>
							<li className="mb-4">
								Set the visibility of the project:
								<ul className="list-['-__'] list-inside ml-4 text-left">
									<li>Public projects are accessible to everyone.</li>
									<li>Private projects are only visible to a selected audience.</li>
								</ul>
							</li>
							<li className="mb-4">Choose a start date for your project (Optional).</li>
							<li className="mb-4">Add relevant tags to help people find your project based on specific keywords (Optional).</li>
						</ul>
					</div>
				</div>
				<div className="col-span-3">
					{/* List of fields */}
					<div className="flex justify-end items-center">
						<div className="flex flex-col items-center w-full">
							<div className="w-full sm:w-100 xl:w-120">
								{/* Location online only (toggle button) */}
								<div className="mb-4">
									<ToggleField inputName="locationOnlineOnly" checked={formInputs.locationOnlineOnly} label="Project online only" onChange={onChange} />
								</div>
								{/* Location country */}
								<div className="mb-6">
									<InputField inputName="locationCountry" inputType="text" label="Country" inputValue={formInputs.locationCountry} onChange={onChange} disabled={formInputs.locationOnlineOnly} />
								</div>
								{/* Location city */}
								<div className="mb-6">
									<InputField inputName="locationCity" inputType="text" label="City" inputValue={formInputs.locationCity} onChange={onChange} disabled={formInputs.locationOnlineOnly} />
								</div>
								{/* Project visibility */}
								<select
									id="projectVisibility"
									name="projectVisibility"
									value={formInputs.projectVisibility}
									onChange={onChange}
									className={`block mb-6 py-3 px-1 w-full bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none hover:border-gray-500 hover:shadow-lg ${
										formInputs.projectVisibility === "" ? "text-gray-400" : "text-white"
									}`}
								>
									<option value="" className="bg-gray-700 italic text-gray-400">
										Select the project privacy
									</option>
									<option className="bg-gray-700 text-gray-400" value="public">
										Public
									</option>
									<option className="bg-gray-700 text-gray-400" value="private">
										Private
									</option>
								</select>
								{/* Start date picker */}
								<div className="w-60">
									<DatePickerField label="Set a start date (optional)" value={formInputs.projectStartDate} onChange={(newValue) => setProjectStartDate(newValue)} />
								</div>
								{/* Tag input field */}
								<div className="flex items-center mt-6">
									<div className="w-full mr-2 mb-6">
										<InputField inputName="tag" inputType="text" label="Tag (optional)" inputValue={tagInput} onChange={handleTagInputChange} />
									</div>
									<div className="min-w-fit">
										<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: addTag }}>
											<div className="flex">
												Add tag <IoAddCircleOutline className="text-xl ml-2" />
											</div>
										</Button>
									</div>
								</div>
								{/* List of tags */}
								<div className="min-h-32">
									{formInputs.tags.length > 0 && (
										<div className="flex flex-wrap gap-2">
											{formInputs.tags.map((tag, index) => (
												<span key={index} className="flex items-center px-3 pt-0.5 pb-1 mt-1 bg-gray-200 text-gray-800 rounded-full">
													{tag}
													<button type="button" className="ml-1 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out" onClick={() => removeTag(tag)}>
														<IoCloseCircleOutline className="text-lg" title="Remove tag" />
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
export default StepFive;
