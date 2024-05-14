"use client";

import { useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import SearchBar from "@/components/Search/SearchBar";
import SearchResultsTabsList from "@/components/Search/SearchResultsTabsList";

const SearchModule = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const search = searchParams.get("search");
	const tab = searchParams.get("tab");

	const [searchInput, setSearchInput] = useState(search);
	const [url, setUrl] = useState(`${pathname}?search=${searchInput}&tab=`);

	const router = useRouter();

	// Handle search input change
	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		const path = `/search?search=${searchInput}&tab=${tab}`;
		router.push(path);
	};

	return (
		<>
			<div className="my-8 mb-24">
				{/* Search bar */}
				<div className="flex justify-center mb-8">
					<div className="min-w-4/5 md:min-w-3/5">
						<SearchBar searchInput={searchInput} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
					</div>
				</div>
				{/* Search results */}
				<SearchResultsTabsList searchInput={searchInput} tab={tab} url={url} />
			</div>
		</>
	);
};

export default function SearchPage() {
	return (
		// You could have a loading skeleton as the `fallback` too
		<Suspense>
			<SearchModule />
		</Suspense>
	);
}
