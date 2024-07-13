"use client";

import { useState } from "react";
import InputField from "@/components/Forms/InputField";

const StepOne = ({ categories }) => {
	const [formInputs, setFormInputs] = useState({
		projectTitle: "",
		selectedCategory: "",
		selectedSubCategory: "",
	});

	const [subCategories, setSubCategories] = useState([]);

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormInputs((prevState) => ({
			...prevState,
			[name]: value,
		}));

		if (name === "selectedCategory") {
			setSubCategories(getSubCategories(value));
			setFormInputs((prevState) => ({
				...prevState,
				selectedSubCategory: "",
			}));
		}

		if (name === "selectedCategory") {
			const selectedSubCategories = getSubCategories(value);
			setSubCategories(selectedSubCategories);
			setFormInputs((prevState) => ({
				...prevState,
				selectedSubCategory: "",
			}));
		}
	};
	// Get sub-categories for the selected category
	const getSubCategories = (categoryName) => {
		const category = categories.find((cat) => cat.name === categoryName);
		return category ? category.subCategories : [];
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
					<p className="text-xl mb-2 text-center">Let's start with the basics!</p>
					<p className="mb-6 text-justify">Give your project a cool title and pick a category and a sub-category that best describe it. This helps people know what your project is all about.</p>
				</div>
				<form onSubmit={handleSubmit} className="col-span-3">
					{/* List of fields */}
					<div className="flex justify-end items-center">
						<div className="mb-10 w-full md:w-200">
							{/* Project title */}
							<InputField inputName="projectTitle" inputType="text" label="Project title" inputValue={formInputs.projectTitle} onChange={onChange}></InputField>
							<div className="flex flex-col lg:flex-row justify-between">
								{/* Project category */}
								<div className="flex-1 mb-6 lg:mb-0 lg:mr-2">
									<label htmlFor="category" className="sr-only">
										Choose a category for your project:
									</label>
									<select
										id="category"
										name="selectedCategory"
										value={formInputs.selectedCategory}
										onChange={onChange}
										className={`block py-3 px-1 w-full bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none ${formInputs.selectedCategory === "" ? "text-gray-400" : "text-white"}`}
									>
										<option value="" className="bg-gray-700 text-gray-400">
											Choose a category for your project
										</option>
										{categories.map((category, index) => (
											<option key={index} className="bg-gray-700 text-gray-400" value={category.name}>
												{category.name}
											</option>
										))}
									</select>
								</div>
								{/* Project sub-category */}
								<div className="flex-1 min-h-[3.5rem] lg:ml-2">
									{formInputs.selectedCategory && subCategories.length > 0 && (
										<>
											<label htmlFor="subCategory" className="sr-only">
												Choose a sub-category for your project
											</label>
											<select
												id="subCategory"
												name="selectedSubCategory"
												value={formInputs.selectedSubCategory}
												onChange={onChange}
												className={`block py-3 px-1 w-full bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none ${
													formInputs.selectedSubCategory === "" ? "text-gray-400" : "text-white"
												}`}
											>
												<option value="" className="bg-gray-700 text-gray-400">
													Select a sub-category
												</option>
												{subCategories.map((subCategory, index) => (
													<option key={index} className="bg-gray-700 text-gray-400" value={subCategory.name}>
														{subCategory.name}
													</option>
												))}
											</select>
										</>
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

export default StepOne;
