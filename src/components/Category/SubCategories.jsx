"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { updateUrlParameters } from "@/utils/urlParameter";

const SubCategories = ({ category, setSelectedSubCategory }) => {
	// Get current path and search parameters
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	const [selectedSubCategory, setSelectedSubCategoryState] = useState(null);
	const [isInitialized, setIsInitialized] = useState(false);

	// Sync selected subcategory with URL parameters on component mount
	useEffect(() => {
		const subCategoryFromParams = searchParams.get("subCategory");
		if (subCategoryFromParams) {
			const subCategory = category.subCategories.find((sc) => sc.name === subCategoryFromParams);
			if (subCategory) {
				setSelectedSubCategoryState(subCategory);
				setSelectedSubCategory(subCategory);
			}
		} else {
			setSelectedSubCategoryState(null);
			setSelectedSubCategory(null);
		}
		setIsInitialized(true);
	}, [searchParams, category.subCategories, setSelectedSubCategory]);

	// Handle subcategory click
	const handleSubCategoryClick = (subCategory) => {
		const isSelected = selectedSubCategory?.name === subCategory.name;
		if (isSelected) {
			// If subCategory was already selected, unselect the subcategory
			setSelectedSubCategory(null);
			setSelectedSubCategoryState(null);

			// Remove subCategory from URL
			updateUrlParameters(router, pathname, searchParams, { subCategory: "" });
		} else {
			// Select the new subcategory
			setSelectedSubCategory(subCategory);
			setSelectedSubCategoryState(subCategory);
			updateUrlParameters(router, pathname, searchParams, { subCategory: subCategory.name }); // Update URL
		}
	};

	// Prevent rendering until initialization is complete
	if (!isInitialized) {
		return null;
	}

	return (
		<>
			<div className="mb-4 sm:mb-8 text-center">
				<p className="mb-2 sm:mb-4 text-lg sm:text-xl">Filter on sub-categories:</p>
				<div className="grid grid-flow-col gap-6 overflow-x-auto">
					{category.subCategories.map((subCategory, index) => (
						<div
							key={index}
							onClick={() => handleSubCategoryClick(subCategory)}
							className={`border-2 border-${category.colors.colorBase} text-nowrap rounded-lg p-2 mb-2 cursor-pointer ${
								selectedSubCategory?.name === subCategory.name && `bg-${category.colors.colorBase}`
							}`}
						>
							{subCategory.symbol && <span className="mr-2">{subCategory.symbol}</span>}
							{subCategory.name}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default SubCategories;
