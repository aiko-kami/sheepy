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
			<ul className="font-bold text-center rounded-lg shadow sm:flex text-gray-300">
				<li className="w-full focus-within:z-10">
					<Link
						href="/users/my-profile"
						className={`${getLinkClasses("/users/my-profile")} rounded-t-lg sm:rounded-none sm:rounded-s-lg sm:border-r sm:border-gray-700`}
						aria-current={pathname === "/users/my-profile" ? "page" : undefined}
					>
						My profile
					</Link>
				</li>
				<li className="w-full focus-within:z-10">
					<Link href="/users/my-projects" className={`${getLinkClasses("/users/my-projects")} sm:border-r sm:border-gray-700`}>
						My projects
					</Link>
				</li>
				<li className="w-full focus-within:z-10">
					<Link href="/users/settings" className={`${getLinkClasses("/users/settings")} sm:border-r sm:border-gray-700`}>
						Settings
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
