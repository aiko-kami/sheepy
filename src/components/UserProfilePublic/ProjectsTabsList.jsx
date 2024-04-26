"use client";
import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";
import ProjectHorizontalCard from "@/components/Cards/ProjectHorizontalCard";
import { useState } from "react";

const ProjectsTabsList = () => {
	const [activeTab, setActiveTab] = useState("tabProjectWorked");

	const project1 = {
		projectTitle: "Project 01",
		projectSummary: "Create a compelling indie film with a unique storyline.",
		projectCover: "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg",
		projectLikes: 147,
		projectCategory: "Art",
		projectSubCategory: "Cinema",
		projectLocation: "San Fransokyo, USA",
		projectTags: ["indie_film", "cinematography", "screenwriting"],
		projectStatus: "Active",
	};
	const project2 = {
		projectTitle: "Project 2",
		projectSummary: "Create a compelling indie film with a unique storyline.",
		projectCover: "https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg",
		projectLikes: 147,
		projectCategory: "Art",
		projectSubCategory: "Cinema",
		projectLocation: "San Fransokyo, USA",
		projectTags: ["indie_film", "cinematography", "screenwriting"],
		projectStatus: "Active",
	};
	const project3 = {
		projectTitle: "Project 3",
		projectSummary: "Create a compelling indie film with a unique storyline.",
		projectCover: "https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg",
		projectLikes: 147,
		projectCategory: "Art",
		projectSubCategory: "Cinema",
		projectLocation: "San Fransokyo, USA",
		projectTags: ["indie_film", "cinematography", "screenwriting"],
		projectStatus: "Active",
	};

	return (
		<>
			{/* Menu nav tabs selection */}
			<ul className="flex flex-wrap justify-center text-gray-600">
				<li>
					<button className="me-2 inline-block mx-6 rounded-t-lg">
						<TabNavItem title="Projects I work on" id="tabProjectWorked" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
				<li>
					<button className="me-2 inline-block mx-6 rounded-t-lg">
						<TabNavItem title="Projects I created" id="tabProjectCreated" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
				<li>
					<button className="me-2 inline-block mx-6 rounded-t-lg">
						<TabNavItem title="Projects completed" id="tabProjectCompleted" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
			</ul>

			{/* Tabs content */}
			<div id="defaultTabContent" className="py-4">
				<TabContent id="tabProjectWorked" activeTab={activeTab}>
					<ul className="grid px-4 sm:grid-cols-2 gap-8 md:px-12 md:gap-10">
						<li>
							<ProjectHorizontalCard projectData={project1} />
						</li>
						<li>
							<ProjectHorizontalCard projectData={project1} />
						</li>
						<li>
							<ProjectHorizontalCard projectData={project1} />
						</li>
					</ul>
				</TabContent>
				<TabContent id="tabProjectCreated" activeTab={activeTab}>
					<ul className="grid px-4 sm:grid-cols-2 gap-8 md:px-12 md:gap-10">
						<li>
							<ProjectHorizontalCard projectData={project2} />
						</li>
					</ul>
				</TabContent>
				<TabContent id="tabProjectCompleted" activeTab={activeTab}>
					<ul className="grid px-4 sm:grid-cols-2 gap-8 md:px-12 md:gap-10">
						<li>
							<ProjectHorizontalCard projectData={project3} />
						</li>
					</ul>
				</TabContent>
			</div>
		</>
	);
};
export default ProjectsTabsList;
