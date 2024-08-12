"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/Forms/InputField";

const StepOne = ({ categories, formInputs, onChange }) => {
	const [subCategories, setSubCategories] = useState([]);

	// Set sub-categories when the component mounts and when selectedCategory changes
	useEffect(() => {
		const selectedSubCategories = getSubCategories(formInputs.selectedCategory);
		setSubCategories(selectedSubCategories);
	}, [formInputs.selectedCategory]);

	// Update the state when the category changes
	const handleCategoryChange = (e) => {
		const { name, value } = e.target;
		onChange(e); // Update the main form state
		const selectedSubCategories = getSubCategories(value);
		setSubCategories(selectedSubCategories);
		onChange({ target: { name: "selectedSubCategory", value: "" } }); // Reset the sub-category
	};

	// Get sub-categories for the selected category
	const getSubCategories = (categoryName) => {
		const category = categories.find((cat) => cat.name === categoryName);
		return category ? category.subCategories : [];
	};

	return (
		<>
			<div className="container min-w-full m-auto lg:px-8 text-justify xl:grid grid-cols-5 gap-8">
				<div className="col-span-2 xl:pl-14">
					<p className="text-xl mb-4 text-center">Let's start with the basics!</p>
					<p className="mb-6 text-justify">Give your project a cool title and pick a category and sub-category that best suit your project.</p>
				</div>
				<div className="col-span-3">
					{/* List of fields */}
					<div className="flex justify-end items-center">
						<div className="mb-10 w-full md:w-200">
							{/* Project title */}
							<div className="mb-6">
								<InputField inputName="projectTitle" inputType="text" label="Project title" inputValue={formInputs.projectTitle} onChange={onChange} />
							</div>
							<div className="flex flex-col lg:flex-row justify-between">
								{/* Project category */}
								<div className="flex-1 mb-6 lg:mb-0 lg:mr-2">
									<label htmlFor="category" className="sr-only">
										Choose a category:
									</label>
									<select
										id="category"
										name="selectedCategory"
										value={formInputs.selectedCategory}
										onChange={handleCategoryChange}
										className={`block py-3 px-1 w-full bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none hover:border-gray-500 hover:shadow-lg ${
											formInputs.selectedCategory === "" ? "text-gray-400" : "text-white"
										}`}
									>
										<option value="" className="bg-gray-700 text-gray-400">
											Choose a category
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
												Choose a sub-category
											</label>
											<select
												id="subCategory"
												name="selectedSubCategory"
												value={formInputs.selectedSubCategory}
												onChange={onChange}
												className={`block py-3 px-1 w-full bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none hover:border-gray-500 hover:shadow-lg ${
													formInputs.selectedSubCategory === "" ? "text-gray-400" : "text-white"
												}`}
											>
												<option className="bg-gray-700 text-gray-400" value="">
													Select a sub-category
												</option>
												{subCategories.map((subCategory, index) => (
													<option key={index} className="bg-gray-700 text-gray-400" value={subCategory.name}>
														{subCategory.name} {subCategory.symbol}
													</option>
												))}
											</select>
										</>
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

export default StepOne;
