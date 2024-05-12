"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import SearchBar from "@/components/Search/SearchBar";
import SearchResultsTabsList from "@/components/Search/SearchResultsTabsList";

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
