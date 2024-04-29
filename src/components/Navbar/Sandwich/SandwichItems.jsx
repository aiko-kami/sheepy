"use client";

import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";

const SandwichItems = ({ items, closeSandwich }) => {
	const [dropdown, setDropdown] = useState(false);
	let ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (dropdown && ref.current && !ref.current.contains(event.target)) {
				setDropdown(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdown]);

	return (
		<li ref={ref}>
			{items.submenu ? (
				<>
					<div className="relative">
						<button
							type="button"
							aria-haspopup="menu"
							className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450"
							aria-expanded={dropdown ? "true" : "false"}
							onClick={() => setDropdown((prev) => !prev)}
						>
							{items.title}
							<svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
							</svg>
						</button>
						<Dropdown submenus={items.submenu} dropdown={dropdown} closeSandwich={closeSandwich} />
					</div>
				</>
			) : (
				<Link href={items.url} onClick={closeSandwich} className="block px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
					{items.title}
				</Link>
			)}
		</li>
	);
};

export default SandwichItems;
