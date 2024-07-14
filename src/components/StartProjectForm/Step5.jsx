"use client";

import { useState } from "react";
import InputField from "@/components/Forms/InputField";
import ToggleField from "@/components/Forms/ToggleField";
import { Button } from "@/components/Buttons/Buttons";
import { IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

const StepFive = () => {
	const [formInputs, setFormInputs] = useState({
		locationOnlineOnly: false,
		locationCountry: "",
		locationCity: "",
		projectVisibility: "",
		projectStartDate: "",
		tags: [],
	});

	const [tagInput, setTagInput] = useState("");

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const inputValue = type === "checkbox" ? checked : value;
		setFormInputs((prevState) => ({
			...prevState,
			[name]: inputValue,
		}));
	};

	const handleTagInputChange = (e) => {
		setTagInput(e.target.value);
	};

	const addTag = () => {
		if (tagInput && !formInputs.tags.includes(tagInput)) {
			setFormInputs((prevState) => ({
				...prevState,
				tags: [...prevState.tags, tagInput],
			}));
			setTagInput("");
		}
	};

	const removeTag = (tagToRemove) => {
		setFormInputs((prevState) => ({
			...prevState,
			tags: prevState.tags.filter((tag) => tag !== tagToRemove),
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form data:", formInputs);
	};

	return (
		<>
			<div className="container min-w-full mx-auto lg:px-8 mb-8 md:mb-20 text-justify xl:grid grid-cols-5 gap-8">
				<div className="col-span-2 xl:pl-14">
					<p className="text-xl mb-2 text-center">Your project creation is almost complete! Just a few more details to finalize.</p>
					<p className="mb-6 text-justify">
						Specify if the project is online-only or set the project location, provide the visibility of the project (public or private), and start date, and add relevant tags to help people find your
						project based on specific keywords.
					</p>
				</div>
				<form onSubmit={handleSubmit} className="col-span-3">
					{/* List of fields */}
					<div className="flex justify-end items-center">
						<div className="flex flex-col items-center w-full md:w-200">
							<div className="min-w-60 sm:w-90">
								{/* Location online only (toggle button) */}
								<ToggleField inputName="locationOnlineOnly" checked={formInputs.locationOnlineOnly} label="Project online only" onChange={onChange} />
								{/* Location country */}
								<InputField inputName="locationCountry" inputType="text" label="Country" inputValue={formInputs.locationCountry} onChange={onChange} disabled={formInputs.locationOnlineOnly} />
								{/* Location city */}
								<InputField inputName="locationCity" inputType="text" label="City" inputValue={formInputs.locationCity} onChange={onChange} disabled={formInputs.locationOnlineOnly} />
								{/* Project visibility */}
								<select
									id="projectVisibility"
									name="projectVisibility"
									value={formInputs.projectVisibility}
									onChange={onChange}
									className={`block py-3 px-1 w-full bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none ${formInputs.projectVisibility === "" ? "text-gray-400" : "text-white"}`}
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
							</div>
							{/* Start date picker */}
							{/* Tag input field */}
							<div className="flex items-center mt-4">
								<div className="w-32 sm:w-64 mr-2">
									<InputField inputName="tag" inputType="text" label="Tag" inputValue={tagInput} onChange={handleTagInputChange} />
								</div>
								<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: addTag }}>
									<div className="flex">
										Add tag <IoAddCircleOutline className="text-xl ml-2" />
									</div>
								</Button>
							</div>
							{/* List of tags */}
							{formInputs.tags.length > 0 && (
								<div className="flex flex-wrap gap-2">
									{formInputs.tags.map((tag, index) => (
										<span key={index} className="flex items-center px-3 pt-0.5 pb-1 mt-1 bg-gray-200 text-gray-800 rounded-full">
											{tag}
											<button type="button" className="ml-1 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out" onClick={() => removeTag(tag)}>
												<IoCloseCircleOutline className="text-lg" />
											</button>
										</span>
									))}
								</div>
							)}
						</div>
					</div>
				</form>
			</div>
		</>
	);
};
export default StepFive;
