"use client";
import { useState } from "react";

import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";
import { ProjectHorizontalCard } from "@/components/Cards/Projects/ProjectCards";

const ProjectsTabsList = ({ projects }) => {
	const [activeTab, setActiveTab] = useState("tabProjectWorked");

	const tabData = [
		{
			id: "tabProjectWorked",
			label: "Projects I work on",
			count: projects.projectCount.onGoing,
		},
		{
			id: "tabProjectCreated",
			label: "Projects I created",
			count: projects.projectCount.created,
		},
		{
			id: "tabProjectCompleted",
			label: "Projects completed",
			count: projects.projectCount.completed,
		},
	];

	return (
		<>
			{/* Menu nav tabs selection */}
			<ul className="max-w-150 mx-auto flex flex-wrap text-sm sm:text-base text-center text-gray-600 mb-5">
				{tabData.map(({ id, label, count }) => (
					<li key={id} className="w-1/3 flex justify-center cursor-pointer">
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
			<div id="defaultTabContent" className="">
				<TabContent id="tabProjectWorked" activeTab={activeTab}>
					<ul className="grid sm:grid-cols-2 gap-4">
						{projects.projectsOnGoing.map((project, index) => (
							<li key={index}>
								<ProjectHorizontalCard project={project} animate={true} />
							</li>
						))}
					</ul>
				</TabContent>
				<TabContent id="tabProjectCreated" activeTab={activeTab}>
					<ul className="grid sm:grid-cols-2 gap-4">
						{projects.projectsCreated.map((project, index) => (
							<li key={index}>
								<ProjectHorizontalCard project={project} animate={true} />
							</li>
						))}
					</ul>
				</TabContent>
				<TabContent id="tabProjectCompleted" activeTab={activeTab}>
					<ul className="grid sm:grid-cols-2 gap-4">
						{projects.projectsLike.map((project, index) => (
							<li key={index}>
								<ProjectHorizontalCard project={project} animate={true} />
							</li>
						))}
					</ul>
				</TabContent>
			</div>
		</>
	);
};
export default ProjectsTabsList;
