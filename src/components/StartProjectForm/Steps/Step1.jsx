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
			value: category.categoryId,
			option: category.name,
		});
	});

	const optionsListSubcat = subCategories.map((subCategory) => ({
		value: subCategory.name,
		option: `${subCategory.name} ${subCategory.symbol}`,
	}));

	useEffect(() => {
		if (!formInputs.selectedCategoryId && categories.length > 0) {
			// Set first category as default if not set
			onChange({
				target: {
					name: "selectedCategoryId",
					value: categories[0].categoryId,
				},
			});
		}
	}, [categories]);

	// Set sub-categories when the component mounts and when selectedCategoryId changes
	useEffect(() => {
		if (!formInputs.selectedCategoryId) return;

		const selectedSubCategories = getSubCategories(formInputs.selectedCategoryId);
		setSubCategories(selectedSubCategories);

		// Set default subCategory if not valid or not set
		const isValid = selectedSubCategories.some((sub) => sub.name === formInputs.selectedSubCategory);
		if (!isValid && selectedSubCategories.length > 0) {
			onChange({
				target: {
					name: "selectedSubCategory",
					value: selectedSubCategories[0].name,
				},
			});
		}
	}, [formInputs.selectedCategoryId]);

	// Update the state when the category changes
	const handleCategoryChange = (e) => {
		const { name, value } = e.target;
		const selectedCategory = categories.find((cat) => cat.categoryId === value);

		onChange(e); // Update the main form state
		if (selectedCategory) {
			// Update category name and default subcategory
			onChange({ target: { name: "selectedCategoryName", value: selectedCategory.name } });

			const selectedSubCategories = selectedCategory.subCategories || [];
			setSubCategories(selectedSubCategories);

			if (selectedSubCategories.length > 0) {
				onChange({ target: { name: "selectedSubCategory", value: selectedSubCategories[0].name } });
			}
		}
	};

	// Get sub-categories for the selected category
	const getSubCategories = (categoryId) => {
		const category = categories.find((cat) => cat.categoryId === categoryId);
		return category ? category.subCategories : [];
	};

	return (
		<>
			<div className="container min-w-full m-auto lg:px-8 text-justify xl:grid grid-cols-5 gap-8">
				<div className="col-span-2 xl:pl-14">
					<p className="text-xl mb-4 text-center">Let's start with the basics!</p>
					<p className="mb-6 text-justify">Give your project a cool title and pick a category and sub-category that best suit your project.</p>
					<div className="flex flex-col lg:flex-row justify-between">
						{/* Category and sub-category description */}
						<div className="flex-1 mb-6 lg:mb-0 lg:mr-2">
							{formInputs.selectedCategoryId && (
								<div className="p-3 border border-gray-300 rounded bg-gray-200">
									<div className="font-semibold mb-2 text-gray-700 leading-none">{categories.find((cat) => cat.id === formInputs.selectedCategoryId)?.name} category description</div>
									<div className="text-sm text-gray-700">{categories.find((cat) => cat.id === formInputs.selectedCategoryId)?.description || "No description available."}</div>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="col-span-3">
					{/* List of fields */}
					<div className="flex justify-end items-center">
						<div className="mb-10 w-full md:w-200">
							{/* Project title */}
							<div className="mb-8">
								<InputField inputName="projectTitle" inputType="text" label="Your project title" inputValue={formInputs.projectTitle} onChange={onChange} />
							</div>
							<div className="flex flex-col lg:flex-row justify-between mb-8">
								{/* Project category */}
								<div className="flex-1 mb-6 lg:mb-0 lg:mr-2">
									<div className="text-sm">Choose a category</div>
									<SelectField inputName="selectedCategoryId" possibleValues={optionsListCat} inputValue={formInputs.selectedCategoryId} onChange={handleCategoryChange} />
								</div>
								{/* Project sub-category */}
								<div className="flex-1 min-h-[3.5rem] lg:ml-2">
									{formInputs.selectedCategoryId && subCategories.length > 0 && (
										<>
											<div className="text-sm">Select a sub-category</div>
											<SelectField inputName="selectedSubCategory" possibleValues={optionsListSubcat} inputValue={formInputs.selectedSubCategory} onChange={onChange} />
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
