"use client";

import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

import { IoSearch } from "react-icons/io5";

const SearchBar = ({ searchInput, handleInputChange, handleSubmit }) => {
	const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
	let ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (searchDropdownOpen && ref.current && !ref.current.contains(event.target)) {
				setSearchDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [searchDropdownOpen]);

	const closeSearchDropdown = () => {
		searchDropdownOpen && setSearchDropdownOpen(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex">
				<label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">
					Search
				</label>
				<button
					className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
					type="button"
					aria-expanded={searchDropdownOpen ? "true" : "false"}
					onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}
				>
					Anything
					<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
					</svg>
				</button>

				{/* <!-- Dropdown menu --> */}
				<Dropdown searchDropdownOpen={searchDropdownOpen} closeSearchDropdown={closeSearchDropdown} />

				<div className="relative">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
						</svg>
					</div>
					<input
						type="text"
						id="default-search"
						className="block w-full p-4 ps-10 text-sm border border-gray-600 rounded-r-lg bg-gray-700 placeholder-gray-400 text-white pr-22"
						placeholder="Search projects, categories, location..."
						required
						value={searchInput || ""}
						onChange={handleInputChange}
					/>
					<button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2">
						Search
					</button>
				</div>
			</div>
		</form>
	);
};
export default SearchBar;
