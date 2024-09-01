"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const UserNavbar = () => {
	const pathname = usePathname();

	const getLinkClasses = (href) => {
		const isActive = pathname === href;
		return `inline-block w-full p-2.5 ${isActive ? "text-white bg-gray-700" : "bg-gray-800 hover:bg-gray-700 hover:text-white"}`;
	};

	return (
		<>
			<ul className="hidden font-bold text-center rounded-lg shadow sm:flex text-gray-300">
				<li className="w-full focus-within:z-10">
					<Link
						href="/users/my-profile"
						className={`${getLinkClasses("/users/my-profile")} rounded-t-lg sm:rounded-none sm:rounded-s-lg sm:border-r sm:border-gray-700`}
						aria-current={pathname === "/users/my-profile" ? "page" : undefined}
					>
						My Profile
					</Link>
				</li>
				<li className="w-full focus-within:z-10">
					<Link href="/users/my-projects" className={`${getLinkClasses("/users/my-projects")} sm:border-r sm:border-gray-700`}>
						My Projects
					</Link>
				</li>
				<li className="w-full focus-within:z-10">
					<Link href="/users/my-messages" className={`${getLinkClasses("/users/my-messages")} sm:border-r sm:border-gray-700`}>
						My Messages
					</Link>
				</li>
				<li className="w-full focus-within:z-10">
					<Link href="/users/my-settings" className={`${getLinkClasses("/users/my-settings")} sm:border-r sm:border-gray-700`}>
						My Settings
					</Link>
				</li>
				<li className="w-full focus-within:z-10">
					<Link href="/users/help" className={`${getLinkClasses("/users/help")} rounded-b-lg sm:rounded-none sm:rounded-e-lg`}>
						Help
					</Link>
				</li>
			</ul>
		</>
	);
};

export default UserNavbar;
