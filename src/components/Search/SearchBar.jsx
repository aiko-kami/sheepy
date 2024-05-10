"use client";

import { IoSearch } from "react-icons/io5";

const SearchBar = ({ searchInput, handleInputChange, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
					</svg>
				</div>
				<input
					type="text"
					id="default-search"
					className="block w-full p-4 ps-10 text-sm border border-gray-600 rounded-lg bg-gray-700 placeholder-gray-400 text-white pr-22"
					placeholder="Search projects, categories, location..."
					required
					value={searchInput || ""}
					onChange={handleInputChange}
				/>
				<button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2">
					Search
				</button>
			</div>
		</form>
	);
};
export default SearchBar;
