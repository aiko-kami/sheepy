"use client";

import { useState } from "react";

import HeadSection from "@/components/Category/HeaderSection";
import CategoryDescription from "@/components/Category/CategoryDescription";
import SubCategories from "@/components/Category/SubCategories";
import ProjectsList from "@/components/Category/ProjectsList";

const Category = ({ category, projects }) => {
	const [selectedSubCategory, setSelectedSubCategory] = useState(null);

	return (
		<>
			<HeadSection category={category} />
			<div className="px-6">
				<CategoryDescription catDescription={category.description} />
				<SubCategories category={category} setSelectedSubCategory={setSelectedSubCategory} />
				<ProjectsList category={category} projects={projects} selectedSubCategory={selectedSubCategory} />
			</div>
		</>
	);
};
export default Category;
