"use client";

import { useState, useEffect } from "react";
import { IoRocketSharp } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { SelectField } from "@/components/Forms/SelectField";
import InputField from "@/components/Forms/InputField";
import { PermissionsErrorText } from "@/components/Errors/PermissionsError";
import ERRORS from "@/lib/constants/errors";
import { showErrorToast } from "@/utils/toast";

import { ApiGetAllCategories } from "@/lib/api/categories";

const TitleCategory = ({ formInputs, onChange, setFormInputs, userPermissions }) => {
	const [categories, setCategories] = useState([]);
	const [subCategories, setSubCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const result = await ApiGetAllCategories();

				if (result.ok && result.data?.categories) {
					setCategories(result.data.categories);
				} else {
					showErrorToast(result.message || "Failed to load categories");
				}
			} catch (error) {
				showErrorToast(error.message);
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
			value: category.categoryId,
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
			const selectedSubCategories = getSubCategories(formInputs.projectCategoryId);
			setSubCategories(selectedSubCategories);

			const subCategoryExists = selectedSubCategories.some((sub) => sub.name === formInputs.projectSubCategory);

			if (!subCategoryExists) {
				setFormInputs((prevState) => ({
					...prevState,
					projectSubCategory: selectedSubCategories[0]?.name || "",
				}));
			}
		}
	}, [formInputs.projectCategoryId, loading, categories]);

	// Update the state when the category changes
	const handleCategoryChange = (e) => {
		const selectedCategoryId = e.target.value;

		const selectedCategory = categories.find((cat) => cat.categoryId === selectedCategoryId);

		setFormInputs((prev) => ({
			...prev,
			projectCategoryId: selectedCategoryId,
			projectCategory: selectedCategory?.name || "",
		}));
	};

	// Get sub-categories for the selected category
	const getSubCategories = (categoryId) => {
		const category = categories.find((cat) => cat.categoryId === categoryId);
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

			<div className="md:px-4">
				{/* Project title */}
				<div className="mb-6 xl:mb-8">
					<InputField
						inputName="projectTitle"
						inputType="text"
						label="Project title"
						inputValue={formInputs.projectTitle}
						onChange={onChange}
						disabled={!userPermissions.canEditTitle}
						disabledMessage={ERRORS.PROJECT_EDIT.EDIT_TITLE}
					/>
				</div>
				<div className="mb-8 max-w-180">
					<div className="flex flex-col lg:flex-row justify-between">
						{/* Project category */}
						<div className="flex-1 mb-6 lg:mb-0 lg:mr-2">
							<div className="text-sm">Project category</div>
							<SelectField
								inputName="projectCategoryId"
								possibleValues={optionsListCat}
								inputValue={formInputs.projectCategoryId}
								onChange={handleCategoryChange}
								disabled={!userPermissions.canEditCategory}
								disabledMessage={ERRORS.PROJECT_EDIT.EDIT_CATEGORY}
							/>
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
								disabledMessage={ERRORS.PROJECT_EDIT.EDIT_SUBCATEGORY}
							/>
						</div>
					</div>
				</div>
				{(userPermissions.canEditTitle || userPermissions.canEditCategory || userPermissions.canEditSubCategory) && (
					<div className="flex justify-center">
						<Button
							btnProps={{
								type: "submit",
								name: "action",
								value: "submit-titleCategory",
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
