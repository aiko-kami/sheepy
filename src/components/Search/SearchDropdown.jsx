const SearchDropdown = ({ searchDropdownOpen, closeSearchDropdown, handleFilterSelect }) => {
	const options = ["Anything", "Projects", "Talents"];
	return (
		<>
			<div className="relative">
				<div className={`z-10 absolute top-14 -left-22 tn:-left-32 bg-gray-700 rounded-lg shadow w-32 text-sm text-gray-200 text-center ${searchDropdownOpen ? "inline-block" : "hidden"}`}>
					<div className="font-bold truncate pt-3 pb-2">Search for...</div>
					<ul className="pb-2">
						{options.map((option) => (
							<li key={option}>
								<button
									onClick={() => {
										handleFilterSelect(option);
										closeSearchDropdown();
									}}
									className="inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white"
								>
									{option}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};
export default SearchDropdown;
