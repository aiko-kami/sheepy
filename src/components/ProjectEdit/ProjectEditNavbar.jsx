"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectEditNavbar = ({ projectRights }) => {
	const {
		canEditSectionGeneral,
		canEditSectionMembers,
		canEditSectionRights,
		canEditSectionStatus,
		canEditSectionLocation,
		canEditSectionAttachments,
		canEditSectionSteps,
		canEditSectionQAs,
		canEditSectionDetails,
	} = projectRights.permissions;
	const pathname = usePathname();

	// Extract the projectId from the URL
	// Assuming the URL structure is /projects/[projectId]/edit/[subPage]
	const pathParts = pathname?.split("/");
	const projectId = pathParts[2]; // Get the project ID from the 3rd part of the URL
	const projectBasePath = `/projects/${projectId}/edit`;

	//Links table
	const links = [
		{ slug: "general", label: "General", disabled: !canEditSectionGeneral },
		{ slug: "members", label: "Members", disabled: !canEditSectionMembers },
		{ slug: "rights", label: "Rights", disabled: !canEditSectionRights },
		{ slug: "status", label: "Status", disabled: !canEditSectionStatus },
		{ slug: "location", label: "Location", disabled: !canEditSectionLocation },
		{ slug: "attachments", label: "Attachments", disabled: !canEditSectionAttachments },
		{ slug: "steps", label: "Steps", disabled: !canEditSectionSteps },
		{ slug: "q-and-a", label: "Q&As", disabled: !canEditSectionQAs },
		{ slug: "details", label: "Details", disabled: !canEditSectionDetails },
	];

	// Function to assign active link classes dynamically
	const getLinkClasses = (href, disabled = false) => {
		// Default to "General" if the base path matches without sub-path
		const isActive = pathname === href || (pathname === projectBasePath && href === `${projectBasePath}/general`);

		if (disabled) {
			return "inline-block p-3 min-w-full text-gray-500 cursor-default opacity-60";
		}

		return `inline-block p-3 min-w-full rounded-lg ${isActive ? "text-white bg-blue-600" : "text-gray-300 lg:hover:bg-gray-700/80 lg:hover:text-white transition duration-150 ease-in-out"}`;
	};

	return (
		<>
			<ul className="grid grid-cols-3 md:grid-cols-12 xl:grid-cols-9 gap-1 text-sm font-medium text-center rounded-lg bg-slate-800/70 border border-slate-700 p-1 mb-12">
				{links.map(({ slug, label, disabled }) => {
					const href = `${projectBasePath}/${slug}`;
					const isCurrent = pathname === href || (slug === "general" && pathname === projectBasePath);

					return (
						<li key={slug} className={`md:col-span-2 xl:col-span-1 ${slug === "steps" && "md:col-start-4 xl:col-start-auto"}`}>
							<Link href={disabled ? "#" : href} className={getLinkClasses(href, disabled)} aria-current={isCurrent ? "page" : undefined}>
								{label}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ProjectEditNavbar;
