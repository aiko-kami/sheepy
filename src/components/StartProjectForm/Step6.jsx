"use client";

import { useState } from "react";
import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/Buttons/Buttons";
import { IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

const StepSix = () => {
	const [formInputs, setFormInputs] = useState({
		tags: [],
	});

	const [tagInput, setTagInput] = useState("");

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormInputs((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleTagInputChange = (e) => {
		setTagInput(e.target.value);
	};

	const addTag = () => {
		if (tagInput && !formInputs.tags.includes(tagInput) && formInputs.tags.length < 8) {
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
					<p className="text-xl mb-4 text-center">You reached the final step!</p>
					<p className="mb-6 text-justify">List the talents you need for your project.</p>
				</div>
				<form onSubmit={handleSubmit} className="col-span-3">
					{/* List of fields */}
					<div className="flex justify-end items-center">
						<div className="flex flex-col items-center w-full">
							<div className="w-full sm:w-100 xl:w-120">
								{/* Tag input field */}
								<div className="flex items-center mt-6">
									<div className="w-full mr-2">
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
								{/* List of talents needed */}
								<div className="min-h-32">
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
						</div>
					</div>
				</form>
			</div>
		</>
	);
};
export default StepSix;
