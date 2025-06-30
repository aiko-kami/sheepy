"use client";

import { useState, useEffect } from "react";
import { IoRocketSharp } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { SelectField } from "@/components/Forms/SelectField";
import InputField from "@/components/Forms/InputField";

import { ApiGetAllCategories } from "@/lib/api/categories";

const TitleCategory = ({ formState, onChange, setFormState }) => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [subCategories, setSubCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const data = await ApiGetAllCategories();
				setCategories(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchCategories();
	}, []);

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
		if (!loading && categories.length > 0) {
			const selectedSubCategories = getSubCategories(formState.projectCategory);
			setSubCategories(selectedSubCategories);
			const subCategoryExists = selectedSubCategories.some((sub) => sub.name === formState.projectSubCategory);

			if (!subCategoryExists) {
				setFormState((prevState) => ({
					...prevState,
					projectSubCategory: "",
				}));
			}
		}
	}, [formState.projectCategory, loading, categories]);

	// Update the state when the category changes
	const handleCategoryChange = (e) => {
		const { name, value } = e.target;
		onChange(e); // Update the main form state
		const selectedSubCategories = getSubCategories(value);
		setSubCategories(selectedSubCategories);
		setFormState((prevState) => ({
			...prevState,
			projectSubCategory: selectedSubCategories[0]?.name || "",
		}));
	};

	// Get sub-categories for the selected category
	const getSubCategories = (categoryName) => {
		const category = categories.find((cat) => cat.name === categoryName);
		return category ? category.subCategories : [];
	};

	return (
		<>
			{/* Project title and category */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoRocketSharp className="mr-2 text-2xl" />
				Project title and category
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{/* Project title */}
				<div className="mb-6 xl:mb-8">
					<InputField inputName="projectTitle" inputType="text" label="Project title" inputValue={formState.projectTitle} onChange={onChange} />
				</div>
				<div className="mb-8 max-w-180">
					<div className="flex flex-col lg:flex-row justify-between">
						{/* Project category */}
						<div className="flex-1 mb-6 lg:mb-0 lg:mr-2">
							<div className="text-sm">Project category</div>
							<SelectField inputName="projectCategory" possibleValues={optionsListCat} inputValue={formState.projectCategory} onChange={handleCategoryChange} />
						</div>
						{/* Project sub-category */}
						<div className="flex-1 min-h-[3.5rem] lg:ml-2">
							<div className="text-sm">Project sub-category</div>
							<SelectField inputName="projectSubCategory" possibleValues={optionsListSubcat} inputValue={formState.projectSubCategory} onChange={onChange} />
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<Button
						btnProps={{
							type: "submit",
							btnColor: "blue",
						}}
					>
						Save project
					</Button>
				</div>
			</div>
		</>
	);
};
export default TitleCategory;
