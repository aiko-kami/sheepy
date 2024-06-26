"use client";

import { useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import SearchBar from "@/components/Search/SearchBar";
import SearchResultsTabsList from "@/components/Search/SearchResultsTabsList";
import { updateUrlParameters } from "@/utils/urlParameter";

const SearchModule = () => {
	//Get current path
	const pathname = usePathname();

	//Get current URL search parameters
	const searchParams = useSearchParams();
	const currentParams = new URLSearchParams(searchParams);

	const router = useRouter();

	const search = searchParams.get("search");
	const tab = searchParams.get("tab");

	const [searchInput, setSearchInput] = useState(search);

	// Handle search input change
	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		updateUrlParameters(router, pathname, currentParams, { search: searchInput, tab });
	};

	return (
		<>
			<div className="my-8 mb-24">
				{/* Search bar */}
				<div className="flex justify-center mb-8">
					<div className="min-w-4/5 md:min-w-3/5">
						<SearchBar searchInput={searchInput} handleInputChange={handleInputChange} handleSubmit={handleSubmit} includeDropdown={true} />
					</div>
				</div>
				{/* Search results */}
				<SearchResultsTabsList searchInput={searchInput} tab={tab} updateUrl={true} />
			</div>
		</>
	);
};

export default function SearchPage() {
	return (
		<Suspense>
			<SearchModule />
		</Suspense>
	);
}
