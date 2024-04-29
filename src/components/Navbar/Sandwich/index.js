"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import { sandwichItemsData } from "./sandwichItemsData";
import SandwichItems from "./SandwichItems";

const Sandwich = () => {
	const [sandwichOpen, setSandwichOpen] = useState(false);
	let ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (sandwichOpen && ref.current && !ref.current.contains(event.target)) {
				setSandwichOpen(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [sandwichOpen]);

	const closeSandwich = () => {
		sandwichOpen && setSandwichOpen(false);
	};

	return (
		<>
			<div className="flex h-full m-auto" ref={ref}>
				{/* <!-- Dropdown sandwich button --> */}
				<div className="inline-flex items-center">
					<button
						className="hover:bg-slate-700 rounded-lg p-2 tn:p-4 lg:hidden duration-200 active:text-base-450"
						type="button"
						aria-expanded={sandwichOpen ? "true" : "false"}
						onClick={() => setSandwichOpen(!sandwichOpen)}
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</button>

					{/* <!-- Dropdown menu --> */}
					<div className={`z-10 absolute top-16 left-2 bg-white rounded-lg shadow w-36 tn:w-40 ${sandwichOpen ? "inline-block" : "hidden"}`}>
						<ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
							{sandwichItemsData.map((menu, index) => {
								return <SandwichItems items={menu} key={index} closeSandwich={closeSandwich} />;
							})}
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
