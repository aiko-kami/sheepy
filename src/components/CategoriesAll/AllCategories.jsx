"use client";

import { useEffect, useState } from "react";
import CategoryHorizontalCard from "@/components/Cards/Categories/CategoryHorizontalCard";
import Triforce from "@/components/Loaders/Triforce";

import { ApiGetAllCategories } from "@/lib/api/categories";

const AllCategories = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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
	return (
		<>
			<h1 className="text-4xl mb-12 text-center">Navigate through categories</h1>
			<p className="mb-4 md:mb-8 text-center">Discover all the categories available to guide your next project...</p>
			{loading ? (
				<div className="inset-0 flex items-center justify-center z-10">
					<Triforce />
				</div>
			) : error ? (
				<p className="text-center text-red-600">Error: {error}</p>
			) : categories && categories.length !== 0 ? (
				<ul className="grid gap-8 xl:gap-10 sm:grid-cols-2 xl:grid-cols-3 xl:mx-auto max-w-350">
					{categories.map((category, index) => (
						<li key={index} className="flex justify-center">
							<CategoryHorizontalCard category={category} animate={true} />
						</li>
					))}
				</ul>
			) : (
				<p className=" text-xl text-center pt-10">
					<span className="italic">No categories found</span> 😕
				</p>
			)}
		</>
	);
};
export default AllCategories;
