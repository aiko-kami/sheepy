import Link from "next/link";

const Dropdown = ({ searchDropdownOpen, closeSearchDropdown, handleFilterSelect }) => {
	return (
		<>
			<div className="relative">
				<div className={`z-10 absolute top-14 -left-22 tn:-left-32 bg-gray-700 rounded-lg shadow w-32 text-sm text-gray-200 text-center ${searchDropdownOpen ? "inline-block" : "hidden"}`}>
					<div className="font-bold truncate pt-3 pb-2">Search for...</div>
					<ul className="pb-2">
						<li>
							<button
								onClick={() => {
									handleFilterSelect("Anything");
									closeSearchDropdown();
								}}
								className="inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white"
							>
								anything
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									handleFilterSelect("Projects");
									closeSearchDropdown();
								}}
								className="inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white"
							>
								projects
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									handleFilterSelect("Talents");
									closeSearchDropdown();
								}}
								className="inline-flex w-full px-4 py-2 hover:bg-gray-600 hover:text-white"
							>
								talents
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
export default Dropdown;
