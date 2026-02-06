"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/contexts";
import Dropdown from "./Dropdown";
import Notification from "@/components/Badges/Notification";
import { Avatar } from "@/components/Badges/Avatar";

const Login = ({ isHomePage = false }) => {
	const { user } = useAuth();
	const [dropdownOpen, setDropdownOpen] = useState(false);
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
		<div className="flex h-full m-auto" ref={ref}>
			{!user ? (
				<>
					<Link href="/sign-up" className="inline-flex items-center px-1 md:px-2 py-1.5 duration-200 tn:m-2">
						Register
					</Link>
					<Link href="/login" className="inline-flex items-center px-1 md:px-2 py-1.5 duration-200 tn:m-2">
						Login
					</Link>
				</>
			) : (
				<div className="inline-flex items-center sm:px-2">
					<button
						className="flex text-sm relative rounded-full hover:ring-4 hover:ring-slate-700 duration-200"
						type="button"
						aria-expanded={dropdownOpen ? "true" : "false"}
						onClick={() => setDropdownOpen(!dropdownOpen)}
					>
						<span className="sr-only">Open user menu</span>
						<Avatar img={user.profilePicture?.link} size={"lg"} alt={"user profile picture"} />
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
