"use client";

import { useState } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

import HeadSection from "@/components/Category/HeaderSection";
import CategoryDescription from "@/components/Category/CategoryDescription";
import SubCategories from "@/components/Category/SubCategories";
import ProjectsList from "@/components/Category/ProjectsList";

const Category = ({ category, projects }) => {
	const [selectedSubCategory, setSelectedSubCategory] = useState(null);

	return (
		<>
			<div className="pb-6">
				<Link href="/categories/all-categories" className="inline-flex items-center italic text-blue-600 hover:underline">
					<IoArrowBack className="text-xl mr-1 mt-0.5" />
					Back to all categories
				</Link>
			</div>
			<HeadSection category={category} />
			<div className="px-6">
				<CategoryDescription catDescription={category.description} />
				<SubCategories category={category} setSelectedSubCategory={setSelectedSubCategory} />
				<ProjectsList category={category} projects={projects} selectedSubCategory={selectedSubCategory} />
			</div>
			<div className="pt-10">
				<Link href="/categories/all-categories" className="inline-flex items-center italic text-blue-600 hover:underline">
					<IoArrowBack className="text-xl mr-1 mt-0.5" />
					Back to all categories
				</Link>
			</div>
		</>
	);
};
export default Category;
