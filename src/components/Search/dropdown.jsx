import Link from "next/link";

const Dropdown = ({ searchDropdownOpen, closeSearchDropdown }) => {
	return (
		<>
			<div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
				<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
					<li>
						<button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
							Mockups
						</button>
					</li>
					<li>
						<button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
							Templates
						</button>
					</li>
					<li>
						<button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
							Design
						</button>
					</li>
					<li>
						<button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
							Logos
						</button>
					</li>
				</ul>
			</div>

			<div className={`z-10 absolute top-16 right-2 bg-white rounded-lg shadow w-36 tn:w-44 divide-y text-sm text-center divide-gray-300 ${searchDropdownOpen ? "inline-block" : "hidden"}`}>
				<div className="py-1 text-gray-900">
					<div className="font-semibold truncate py-2"></div>
				</div>
				<ul className="py-1 text-gray-700">
					<li>
						<Link href={`/users/my-profile`} onClick={closeSearchDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
							My profile
						</Link>
					</li>
					<li>
						<Link href="#" onClick={closeSearchDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
							My projects
						</Link>
					</li>
					<li>
						<Link href="#" onClick={closeSearchDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
							Settings
						</Link>
					</li>
					<li>
						<Link href="#" onClick={closeSearchDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
							Help
						</Link>
					</li>
				</ul>
				<div className="py-1">
					<Link href="/logout" onClick={closeSearchDropdown} className="block py-2 text-gray-700 hover:bg-gray-200 duration-200 active:text-base-450">
						Sign out
					</Link>
				</div>
			</div>
		</>
	);
};
export default Dropdown;
