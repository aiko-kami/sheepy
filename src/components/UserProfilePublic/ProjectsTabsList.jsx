"use client";
import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";
import ProjectHorizontalCard from "@/components/Cards/Projects/ProjectHorizontalCard";
import { useState } from "react";

const ProjectsTabsList = ({ projects }) => {
	const [activeTab, setActiveTab] = useState("tabProjectWorked");

	const project2 = {
		title: "Project 2",
		summary: "Create a compelling indie film with a unique storyline.",
		cover: "https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg",
		likes: 147,
		category: {
			name: "Art",
			link: "/categories/art",
			bgColor: "bg-black",
			bgColorHover: "bg-gray-800",
			size: "sm",
		},
		subCategory: "Cinema",
		location: "San Fransokyo, USA",
		tags: ["indie_film", "cinematography", "screenwriting"],
		status: "Active",
	};
	const project3 = {
		title: "Project 3",
		summary: "Create a compelling indie film with a unique storyline.",
		cover: "https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg",
		likes: 147,
		category: {
			name: "Music",
			link: "/categories/music",
			bgColor: "bg-purple-800",
			bgColorHover: "bg-purple-500",
			size: "sm",
		},
		subCategory: "Cinema",
		location: "San Fransokyo, USA",
		tags: ["indie_film", "cinematography", "screenwriting"],
		status: "Active",
	};

	return (
		<>
			{/* Menu nav tabs selection */}
			<ul className="flex flex-wrap justify-center text-gray-600 mb-5">
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title={`Projects I work on (${projects.projectCount.onGoing})`} id="tabProjectWorked" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title={`Projects I created (${projects.projectCount.created})`} id="tabProjectCreated" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title={`Projects completed (${projects.projectCount.completed})`} id="tabProjectCompleted" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
			</ul>

			{/* Tabs content */}
			<div id="defaultTabContent" className="">
				<TabContent id="tabProjectWorked" activeTab={activeTab}>
					<ul className="grid sm:grid-cols-2 gap-4">
						{projects.projectsOnGoing.map((project, index) => (
							<li key={index}>
								<ProjectHorizontalCard project={project} />
							</li>
						))}
					</ul>
				</TabContent>
				<TabContent id="tabProjectCreated" activeTab={activeTab}>
					<ul className="grid sm:grid-cols-2 gap-4">
						{projects.projectsCreated.map((project, index) => (
							<li key={index}>
								<ProjectHorizontalCard project={project} />
							</li>
						))}
					</ul>
				</TabContent>
				<TabContent id="tabProjectCompleted" activeTab={activeTab}>
					<ul className="grid sm:grid-cols-2 gap-4">
						{projects.projectsCompleted.map((project, index) => (
							<li key={index}>
								<ProjectHorizontalCard project={project} />
							</li>
						))}
					</ul>
				</TabContent>
			</div>
		</>
	);
};
export default ProjectsTabsList;
