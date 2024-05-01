"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import user from "@/user.json";

const Login = () => {
	const session = true;
	const [dropdownOpen, setDropdownOpen] = useState(false);
	let ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (dropdownOpen && ref.current && !ref.current.contains(event.target)) {
				setDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdownOpen]);

	const closeDropdown = () => {
		dropdownOpen && setDropdownOpen(false);
	};

	return (
		<>
			<div className="flex h-full m-auto" ref={ref}>
				{!session && (
					<>
						<Link href="/sign-up" className="inline-flex items-center duration-200 active:text-base-450 px-2 py-1.5 tn:m-2">
							Register
						</Link>
						<Link href="/login" className="inline-flex items-center duration-200 active:text-base-450 px-2 py-1.5 tn:m-2">
							Login
						</Link>
					</>
				)}

				{session && (
					<>
						{/* <!-- Dropdown Avatar button --> */}
						<div className="inline-flex items-center sm:px-2">
							<button
								className="flex text-sm bg-base-100 rounded-full w-12 md:me-0 hover:ring-4 hover:ring-slate-700 duration-200 active:ring-base-450"
								type="button"
								aria-expanded={dropdownOpen ? "true" : "false"}
								onClick={() => setDropdownOpen(!dropdownOpen)}
							>
								<span className="sr-only">Open user menu</span>

								<Image className="rounded-full object-cover w-12 h-12" src={user.profilePicture} alt="user picture" height={0} width={0} sizes="100vw" />
							</button>
							{/* <!-- Dropdown menu --> */}
							<Dropdown username={user.username} userId={user.userId} dropdownOpen={dropdownOpen} closeDropdown={closeDropdown} />
						</div>
					</>
				)}
			</div>
		</>
	);
};
export default Login;
