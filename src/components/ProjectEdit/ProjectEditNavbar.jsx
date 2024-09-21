"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectEditNavbar = () => {
	const pathname = usePathname();

	const getLinkClasses = (href) => {
		const isActive = pathname === href;
		return `inline-block p-3 rounded-lg xl:rounded-b-none rounded-t-lg min-w-28 ${isActive ? "text-blue-500 bg-gray-800" : "text-gray-500 bg-gray-700 hover:bg-gray-800 hover:text-gray-300"}`;
	};

	return (
		<>
			<ul className="flex flex-wrap justify-end font-medium text-center xl:border-b border-gray-700">
				<li className="mb-2 xl:mb-0 me-1">
					<Link href="/projects/48/edit/general" className={`${getLinkClasses("/projects/48/edit/general")}`} aria-current={pathname === "/projects/48/edit/general" ? "page" : undefined}>
						General
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href="/projects/47/edit/members" className={`${getLinkClasses("/projects/47/edit/members")}`} aria-current={pathname === "/projects/47/edit/members" ? "page" : undefined}>
						Members
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href="/projects/46/edit/rights" className={`${getLinkClasses("/projects/46/edit/rights")}`} aria-current={pathname === "/projects/46/edit/rights" ? "page" : undefined}>
						Rights
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href="/projects/46/edit/status" className={`${getLinkClasses("/projects/46/edit/status")}`} aria-current={pathname === "/projects/46/edit/status" ? "page" : undefined}>
						Status
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href="/projects/46/edit/location" className={`${getLinkClasses("/projects/46/edit/location")}`} aria-current={pathname === "/projects/46/edit/location" ? "page" : undefined}>
						Location
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href="/projects/45/edit/attachments" className={`${getLinkClasses("/projects/45/edit/attachments")}`} aria-current={pathname === "/projects/45/edit/attachments" ? "page" : undefined}>
						Attachments
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href="/projects/44/edit/steps" className={`${getLinkClasses("/projects/44/edit/steps")}`} aria-current={pathname === "/projects/44/edit/steps" ? "page" : undefined}>
						Steps
					</Link>
				</li>
				<li className="mb-2 xl:mb-0">
					<Link href="/projects/43/edit/q-and-a" className={`${getLinkClasses("/projects/43/edit/q-and-a")}`} aria-current={pathname === "/projects/43/edit/q-and-a" ? "page" : undefined}>
						Q&As
					</Link>
				</li>
			</ul>
		</>
	);
};

export default ProjectEditNavbar;
