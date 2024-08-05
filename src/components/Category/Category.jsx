"use client";

import { useState } from "react";

import HeadSection from "@/components/Category/HeaderSection";
import SubCategories from "@/components/Category/SubCategories";
import Projects from "@/components/Category/Projects";

const Category = ({ category, projects }) => {
	const [selectedSubCategory, setSelectedSubCategory] = useState(null);

	return (
		<>
			<HeadSection category={category} />
			<div className="px-6">
				<SubCategories category={category} setSelectedSubCategory={setSelectedSubCategory} />
				<Projects category={category} projects={projects} selectedSubCategory={selectedSubCategory} />
			</div>
		</>
	);
};
export default Category;
