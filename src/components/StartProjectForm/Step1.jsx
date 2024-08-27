"use client";

import { useState, useEffect } from "react";
import InputField from "@/components/Forms/InputField";
import { SelectField } from "@/components/Forms/SelectField";

const StepOne = ({ categories, formInputs, onChange }) => {
	const [subCategories, setSubCategories] = useState([]);

	let optionsListCat = [];

	categories.forEach((category) => {
		// Add the main category name
		optionsListCat.push({
			value: category.name,
			option: category.name,
		});
	});

	const optionsListSubcat = subCategories.map((subCategory) => ({
		value: subCategory.name,
		option: `${subCategory.name} ${subCategory.symbol}`,
	}));

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
									<SelectField inputName="selectedCategory" possibleValues={optionsListCat} inputValue={formInputs.selectedCategory} label="Choose a category" onChange={handleCategoryChange} />
								</div>
								{/* Project sub-category */}
								<div className="flex-1 min-h-[3.5rem] lg:ml-2">
									{formInputs.selectedCategory && subCategories.length > 0 && (
										<>
											<SelectField inputName="selectedSubCategory" possibleValues={optionsListSubcat} inputValue={formInputs.selectedSubCategory} label="Select a sub-category" onChange={onChange} />
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
