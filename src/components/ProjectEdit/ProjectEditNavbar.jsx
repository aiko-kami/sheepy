"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectEditNavbar = () => {
	const pathname = usePathname();

	// Extract the projectId from the URL
	// Assuming the URL structure is /projects/[projectId]/edit/[subPage]
	const pathParts = pathname?.split("/");
	const projectId = pathParts[2]; // Get the project ID from the 3rd part of the URL

	// Define the base path for links
	const projectBasePath = `/projects/${projectId}/edit`;

	// Function to assign active link classes dynamically
	const getLinkClasses = (href) => {
		// Default to "General" if the base path matches without sub-path
		const isActive = pathname === href || (pathname === projectBasePath && href === `${projectBasePath}/general`);

		return `inline-block p-3 rounded-lg xl:rounded-b-none rounded-t-lg min-w-28 ${isActive ? "text-blue-500 bg-gray-800" : "text-gray-500 bg-gray-700 hover:bg-gray-800 hover:text-gray-300"}`;
	};

	return (
		<>
			<ul className="flex flex-wrap justify-end font-medium text-center xl:border-b border-gray-700">
				<li className="mb-2 xl:mb-0 me-1">
					<Link href={`${projectBasePath}/general`} className={getLinkClasses(`${projectBasePath}/general`)} aria-current={pathname === `${projectBasePath}/general` ? "page" : undefined}>
						General
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href={`${projectBasePath}/members`} className={getLinkClasses(`${projectBasePath}/members`)} aria-current={pathname === `${projectBasePath}/members` ? "page" : undefined}>
						Members
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href={`${projectBasePath}/rights`} className={getLinkClasses(`${projectBasePath}/rights`)} aria-current={pathname === `${projectBasePath}/rights` ? "page" : undefined}>
						Rights
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href={`${projectBasePath}/status`} className={getLinkClasses(`${projectBasePath}/status`)} aria-current={pathname === `${projectBasePath}/status` ? "page" : undefined}>
						Status
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href={`${projectBasePath}/location`} className={getLinkClasses(`${projectBasePath}/location`)} aria-current={pathname === `${projectBasePath}/location` ? "page" : undefined}>
						Location
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href={`${projectBasePath}/attachments`} className={getLinkClasses(`${projectBasePath}/attachments`)} aria-current={pathname === `${projectBasePath}/attachments` ? "page" : undefined}>
						Attachments
					</Link>
				</li>
				<li className="mb-2 xl:mb-0 me-1">
					<Link href={`${projectBasePath}/steps`} className={getLinkClasses(`${projectBasePath}/steps`)} aria-current={pathname === `${projectBasePath}/steps` ? "page" : undefined}>
						Steps
					</Link>
				</li>
				<li className="mb-2 xl:mb-0">
					<Link href={`${projectBasePath}/q-and-a`} className={getLinkClasses(`${projectBasePath}/q-and-a`)} aria-current={pathname === `${projectBasePath}/q-and-a` ? "page" : undefined}>
						Q&As
					</Link>
				</li>
			</ul>{" "}
		</>
	);
};

export default ProjectEditNavbar;
