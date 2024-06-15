"use client";
import { useState } from "react";

import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";
import ProjectHorizontalCard from "@/components/Cards/Projects/ProjectHorizontalCard";

const ProjectsTabsList = ({ projects }) => {
	const [activeTab, setActiveTab] = useState("tabProjectWorked");

	return (
		<>
			{/* Menu nav tabs selection */}
			<ul className="flex flex-wrap justify-center text-sm sm:text-base text-gray-600 mb-5">
				<li>
					<button className="inline-block mx-2">
						<TabNavItem
							title={`Projects I work on (${projects.projectCount.onGoing})`}
							id="tabProjectWorked"
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							activeClass="text-blue-600 border-b-1 border-blue-600"
						/>
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem
							title={`Projects I created (${projects.projectCount.created})`}
							id="tabProjectCreated"
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							activeClass="text-blue-600 border-b-1 border-blue-600"
						/>
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem
							title={`Projects completed (${projects.projectCount.completed})`}
							id="tabProjectCompleted"
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							activeClass="text-blue-600 border-b-1 border-blue-600"
						/>
					</button>
				</li>
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
						{projects.projectsCompleted.map((project, index) => (
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
