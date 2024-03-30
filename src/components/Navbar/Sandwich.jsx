"use client";

import Image from "next/image";
import Link from "next/link";
import "flowbite";

const Sandwich = () => {
	return (
		<>
			<div className="flex h-full m-auto">
				{/* <!-- Dropdown sandwich button --> */}
				<div className="inline-flex items-center">
					<button
						id="dropdownDefaultButton"
						data-dropdown-toggle="dropdown"
						data-dropdown-offset-distance="10"
						data-dropdown-offset-skidding="60"
						className="hover:bg-slate-700 rounded-lg p-2 tn:p-4 lg:hidden duration-200 active:text-base-450"
						type="button"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</button>

					{/* <!-- Dropdown menu --> */}
					<div id="dropdown" className="z-10 hidden bg-white rounded-lg shadow w-36 tn:w-40">
						<ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
							<li>
								<button
									id="doubleDropdownButton"
									data-dropdown-toggle="doubleDropdown"
									data-dropdown-placement="right-start"
									type="button"
									className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450"
								>
									Start
									<svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
									</svg>
								</button>
								<div id="doubleDropdown" className="m-0 z-10 hidden bg-white rounded-lg shadow w-36 tn:w-40">
									<ul className="py-1 text-sm text-gray-700" aria-labelledby="doubleDropdownButton">
										<li>
											<Link href="#" className="block px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
												Start my project
											</Link>
										</li>
										<li>
											<Link href="#" className="block px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
												Join a project
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<button
									id="doubleDropdownButton2"
									data-dropdown-toggle="doubleDropdown2"
									data-dropdown-placement="right-start"
									type="button"
									className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450"
								>
									How it works
									<svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
									</svg>
								</button>
								<div id="doubleDropdown2" className="m-0 z-10 hidden bg-white rounded-lg shadow w-36 tn:w-40">
									<ul className="py-1 text-sm text-gray-700" aria-labelledby="doubleDropdownButton2">
										<li>
											<Link href="#" className="block px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
												Take a tour
											</Link>
										</li>
										<li>
											<Link href="#" className="block px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
												Initiate a project
											</Link>
										</li>
										<li>
											<Link href="#" className="block px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
												Join a project
											</Link>
										</li>
										<li>
											<Link href="#" className="block px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
												Why us?
											</Link>
										</li>
										<li>
											<Link href="#" className="block px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
												Pricing and fees
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<Link href="#" className="block px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
									Discover
								</Link>
							</li>
							<li>
								<Link href="#" className="block px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
									Search
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="inline-flex items-center">
					<Link href="/" className="text-xl font-semibold inline-flex items-center hover:bg-slate-700 transition duration-300 rounded-lg px-4 py-1.5">
						<Image src="/sheepyLogo.png" alt="Sheepy Logo" width={40} height={40} className="mr-1" />
						<span className="hidden tn:inline-block">Sheepy</span>
					</Link>
				</div>
			</div>
		</>
	);
};
export default Sandwich;
