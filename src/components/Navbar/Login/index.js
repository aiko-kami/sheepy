"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Dropdown from "./Dropdown";
import Notification from "@/components/Badges/Notification";

const Login = ({ isHomePage = false }) => {
	const { user } = useAuth();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [theme, setTheme] = useState("night");
	let ref = useRef();

	useEffect(() => {
		// Close dropdown on outside click
		const handler = (event) => {
			if (dropdownOpen && ref.current && !ref.current.contains(event.target)) {
				setDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);

		// Set theme preference from user preferences or default theme
		document.documentElement.setAttribute("data-theme", theme);

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdownOpen, theme]);

	const closeDropdown = () => {
		dropdownOpen && setDropdownOpen(false);
	};

	return (
		<div className="flex h-full m-auto" ref={ref}>
			{!user ? (
				<>
					<Link href="/sign-up" className="inline-flex items-center px-2 py-1.5 duration-200 tn:m-2">
						Register
					</Link>
					<Link href="/login" className="inline-flex items-center px-2 py-1.5 duration-200 tn:m-2">
						Login
					</Link>
				</>
			) : (
				<div className="inline-flex items-center sm:px-2">
					<button
						className="flex text-sm bg-base-100 relative rounded-full w-12 md:me-0 hover:ring-4 hover:ring-slate-700 duration-200"
						type="button"
						aria-expanded={dropdownOpen ? "true" : "false"}
						onClick={() => setDropdownOpen(!dropdownOpen)}
					>
						<span className="sr-only">Open user menu</span>
						<Image className="rounded-full object-cover w-12 h-12" src={user.profilePicture.link || "/default-avatar.png"} alt="User picture" width={48} height={48} />

						{user.notifications?.globalNotif > 0 && (
							<div className="absolute -bottom-2 right-10 z-10">
								<Notification value={user.notifications.globalNotif} size={"xs"} notifColor={"pink"} ringMode={isHomePage ? "home" : "std"} />
							</div>
						)}
					</button>

					<Dropdown username={user.username} userId={user.userId} notifications={user.notifications || 2} dropdownOpen={dropdownOpen} closeDropdown={closeDropdown} />
				</div>
			)}
		</div>
	);
};
export default Login;
