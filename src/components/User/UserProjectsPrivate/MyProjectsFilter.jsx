"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { updateUrlParameters } from "@/utils/urlParameter";

const MyProjectsFilter = ({ projectTypes, selectedProjectType, onProjectTypeChange }) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleProjectTypeClick = (projectType) => {
		if (selectedProjectType === projectType) {
			// Unselect the projectType if it's already selected
			onProjectTypeChange("all");
			updateUrlParameters(router, pathname, searchParams, { projectType: "all" });
		} else {
			// Select a new projectType
			onProjectTypeChange(projectType);
			updateUrlParameters(router, pathname, searchParams, { projectType });
		}
	};

	return (
		<>
			{/* Menu to filter on projects types  */}
			<div className="mb-4 sm:mb-8 text-center mx-auto">
				<p className="mb-2 sm:mb-4">Filter projects:</p>
				<div className="grid grid-flow-col gap-6 overflow-x-auto text-sm">
					{projectTypes.map((type, index) => (
						<motion.div
							key={index}
							onClick={() => handleProjectTypeClick(type.value)}
							className={`relative border-2 border-gray-700 text-nowrap rounded-lg p-2 mb-2 cursor-pointer overflow-hidden ${selectedProjectType === type.value && "bg-gray-700 text-white"}`}
							initial="rest"
							whileHover="hover"
							animate="rest"
						>
							<motion.span
								className="absolute inset-0 bg-gray-700"
								variants={{
									rest: { height: 0, top: "100%" },
									hover: { height: "100%", top: 0 },
								}}
								transition={{ duration: 0.1, ease: "easeInOut" }}
							/>
							<span className="relative z-10">{type.label}</span>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default MyProjectsFilter;
