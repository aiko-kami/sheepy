"use client";
import { useState } from "react";

import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";
import { ProjectHorizontalCard } from "@/components/Cards/Projects/ProjectCards";

const ProjectsTabsList = ({ projects, projectsCount }) => {
	const [activeTab, setActiveTab] = useState("tabProjectWorked");

	const safe = (value) => (value === 0 || value ? value : "?");

	const rawTabs = [
		{
			id: "tabProjectWorked",
			label: "Projects I work on",
			type: "onGoing",
			count: safe(projectsCount?.onGoing),
		},
		{
			id: "tabProjectCreated",
			label: "Projects I created",
			type: "created",
			count: safe(projectsCount?.created),
		},
		{
			id: "tabProjectCompleted",
			label: "Projects completed",
			type: "completed",
			count: safe(projectsCount?.completed),
		},
		{
			id: "tabProjectLike",
			label: "Projects I like",
			type: "like",
			count: safe(projectsCount?.like),
		},
	];

	// Only keep tabs that exist in projects (if project likes are private they are not displayed)
	const tabData = rawTabs.filter((tab) => projects?.[tab.type] !== undefined);

	return (
		<>
			{/* Menu nav tabs selection */}
			<ul className="max-w-220 mx-auto flex flex-wrap text-sm sm:text-base text-center text-gray-600 mb-5">
				{tabData.map(({ id, label, count }) => (
					<li key={id} className={`${tabData.length === 4 ? "w-1/4" : "w-1/3"} flex justify-center cursor-pointer`}>
						<TabNavItem
							id={id}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							stdClass="pb-2 sm:px-4 w-full flex justify-center"
							activeClass="text-blue-600 border-b-2 border-blue-600"
							inactiveClass="border-b-1 border-gray-600"
						>
							{label} ({count})
						</TabNavItem>
					</li>
				))}
			</ul>

			{/* Tabs content */}
			<div id="defaultTabContent">
				{tabData.map(({ id, type }) => (
					<TabContent key={id} id={id} activeTab={activeTab}>
						{projects[type]?.length > 0 ? (
							<ul className="grid sm:grid-cols-2 gap-4">
								{projects[type].map((project, index) => (
									<li key={index}>
										<ProjectHorizontalCard project={project} animate />
									</li>
								))}
							</ul>
						) : (
							<p className=" text-xl text-center py-10">
								<span className="italic">No projects found</span> 😕
							</p>
						)}
					</TabContent>
				))}
			</div>
		</>
	);
};
export default ProjectsTabsList;
