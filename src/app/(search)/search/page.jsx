"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import SearchBar from "@/components/Search/SearchBar";
import SearchResultsTabsList from "@/components/Search/SearchResultsTabsList";
import ProjectHorizontalCard from "@/components/Cards/ProjectHorizontalCard";

const SearchPage = () => {
	const searchParams = useSearchParams();
	const search = searchParams.get("search");

	const [searchInput, setSearchInput] = useState(search);

	const router = useRouter();

	// Handle search input change
	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const path = `/search?search=${searchInput}`;
		router.push(path);
	};

	const project2 = {
		title: "Project 2",
		summary: "Create a compelling indie film with a unique storyline.",
		cover: "https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg",
		likes: 147,
		category: {
			name: "Art",
			link: "/categories/art",
			bgColor: "bg-black",
			bgColorHover: "bg-gray-800",
			size: "sm",
		},
		subCategory: "Cinema",
		location: "San Fransokyo, USA",
		tags: ["indie_film", "cinematography", "screenwriting"],
		status: "Active",
	};

	return (
		<>
			<div className="my-8">
				{/* Search bar */}
				<div className="flex justify-center mb-8">
					<div className="min-w-4/5 md:min-w-3/5">
						<SearchBar searchInput={searchInput} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
					</div>
				</div>
				{/* Search results */}
				<SearchResultsTabsList />
			</div>
		</>
	);
};
export default SearchPage;
