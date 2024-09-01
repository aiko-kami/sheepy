"use client";

import { motion } from "framer-motion";

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
						<motion.div
							key={index}
							onClick={() => handleSubCategoryClick(subCategory)}
							className={`relative border-2 border-${category.colors.colorBase} text-nowrap rounded-lg p-2 mb-2 cursor-pointer overflow-hidden ${
								selectedSubCategory?.name === subCategory.name && `bg-${category.colors.colorBase} text-white`
							}`}
							initial="rest"
							whileHover="hover"
							animate="rest"
						>
							<motion.span
								className={`absolute inset-0 bg-${category.colors.colorBase}`}
								variants={{
									rest: { height: 0, top: "100%" },
									hover: { height: "100%", top: 0 },
								}}
								transition={{ duration: 0.1, ease: "easeInOut" }}
							/>
							<span className="relative z-10">
								{subCategory.symbol && <span className="mr-2">{subCategory.symbol}</span>}
								{subCategory.name}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default SubCategories;
