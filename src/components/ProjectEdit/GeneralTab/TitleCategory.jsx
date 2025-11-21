"use client";

import { useState, useEffect } from "react";
import { IoRocketSharp } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { SelectField } from "@/components/Forms/SelectField";
import InputField from "@/components/Forms/InputField";

import { ApiGetAllCategories } from "@/lib/api/categories";

const TitleCategory = ({ formInputs, onChange, setFormInputs, userPermissions }) => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [subCategories, setSubCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const result = await ApiGetAllCategories();

				if (result.ok && result.data?.categories) {
					setCategories(result.data.categories);
				} else {
					showErrorToast(result.message || "Failed to load categories");
				}
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
			const selectedSubCategories = getSubCategories(formInputs.projectCategory);
			setSubCategories(selectedSubCategories);
			const subCategoryExists = selectedSubCategories.some((sub) => sub.name === formInputs.projectSubCategory);

			if (!subCategoryExists) {
				setFormInputs((prevState) => ({
					...prevState,
					projectSubCategory: "",
				}));
			}
		}
	}, [formInputs.projectCategory, loading, categories]);

	// Update the state when the category changes
	const handleCategoryChange = (e) => {
		const { name, value } = e.target;
		onChange(e); // Update the main form state
		const selectedSubCategories = getSubCategories(value);
		setSubCategories(selectedSubCategories);
		setFormInputs((prevState) => ({
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
					<InputField inputName="projectTitle" inputType="text" label="Project title" inputValue={formInputs.projectTitle} onChange={onChange} disabled={!userPermissions.canEditTitle} />
					{!userPermissions.canEditTitle && <p className="text-xs italic text-pink-700 mt-1">You do not have permission to edit the project title</p>}
				</div>
				<div className="mb-8 max-w-180">
					<div className="flex flex-col lg:flex-row justify-between">
						{/* Project category */}
						<div className="flex-1 mb-6 lg:mb-0 lg:mr-2">
							<div className="text-sm">Project category</div>
							<SelectField
								inputName="projectCategory"
								possibleValues={optionsListCat}
								inputValue={formInputs.projectCategory}
								onChange={handleCategoryChange}
								disabled={!userPermissions.canEditCategory}
							/>
							{!userPermissions.canEditCategory && <p className="text-xs italic text-pink-700 mt-1">You do not have permission to edit the project category</p>}
						</div>
						{/* Project sub-category */}
						<div className="flex-1 min-h-[3.5rem] lg:ml-2">
							<div className="text-sm">Project sub-category</div>
							<SelectField
								inputName="projectSubCategory"
								possibleValues={optionsListSubcat}
								inputValue={formInputs.projectSubCategory}
								onChange={onChange}
								disabled={!userPermissions.canEditSubCategory}
							/>
							{!userPermissions.canEditSubCategory && <p className="text-xs italic text-pink-700 mt-1">You do not have permission to edit the project sub-category</p>}
						</div>
					</div>
				</div>
				{(userPermissions.canEditTitle || userPermissions.canEditCategory || userPermissions.canEditSubCategory) && (
					<div className="flex justify-center">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "blue",
								disabled: !userPermissions.canEditTitle && !userPermissions.canEditCategory && !userPermissions.canEditSubCategory,
							}}
						>
							Save project
						</Button>
					</div>
				)}
			</div>
		</>
	);
};
export default TitleCategory;
