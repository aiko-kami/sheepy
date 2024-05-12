"use client";
import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";
import ProjectHorizontalCard from "@/components/Cards/Projects/ProjectHorizontalCard";
import { useState } from "react";

const SearchResultsTabsList = () => {
	const [activeTab, setActiveTab] = useState("tabProjects");

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
		summary:
			"Create a compelling indie film with a unique storyline. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut maiores ducimus nesciunt, a deserunt laborum numquam neque, non porro vel vero cumque praesentium pariatur rem incidunt hic qui? Assumenda ad cum suscipit necessitatibus exercitationem beatae autem, accusamus placeat aspernatur expedita sapiente maxime consectetur esse minus ab temporibus reprehenderit itaque voluptate.",

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
					<button className="inline-block mx-2 text-xs">
						<TabNavItem title="Projects" id="tabProjects" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title="Talents" id="tabTalents" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title="Categories" id="tabCategories" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title="sub-categories" id="tabsubCategories" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title="Locations" id="tabLocations" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title="Tags" id="tabTags" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" />
					</button>
				</li>
			</ul>

			{/* Tabs content */}
			<div id="defaultTabContent" className="">
				<TabContent id="tabProjects" activeTab={activeTab}>
					<ul className="grid gap-4">
						<li>
							<ProjectHorizontalCard project={project2} />
						</li>
						<li>
							<ProjectHorizontalCard project={project3} />
						</li>
						<li>
							<ProjectHorizontalCard project={project2} />
						</li>
						<li>
							<ProjectHorizontalCard project={project3} />
						</li>
					</ul>
				</TabContent>
				<TabContent id="tabTalents" activeTab={activeTab}>
					<ul className="grid gap-4">
						<li>
							<ProjectHorizontalCard project={project3} />
						</li>
					</ul>
				</TabContent>
				<TabContent id="tabCategories" activeTab={activeTab}>
					<ul className="grid gap-4">
						<li>
							<ProjectHorizontalCard project={project2} />
						</li>
					</ul>
				</TabContent>
				<TabContent id="tabsubCategories" activeTab={activeTab}>
					<ul className="grid gap-4">
						<li>
							<ProjectHorizontalCard project={project3} />
						</li>
					</ul>
				</TabContent>
				<TabContent id="tabLocations" activeTab={activeTab}>
					<ul className="grid gap-4">
						<li>
							<ProjectHorizontalCard project={project2} />
						</li>
					</ul>
				</TabContent>
				<TabContent id="tabTags" activeTab={activeTab}>
					<ul className="grid gap-4">
						<li>
							<ProjectHorizontalCard project={project3} />
						</li>
						<li>
							<ProjectHorizontalCard project={project3} />
						</li>
						<li>
							<ProjectHorizontalCard project={project3} />
						</li>
						<li>
							<ProjectHorizontalCard project={project3} />
						</li>
					</ul>
				</TabContent>
			</div>
		</>
	);
};
export default SearchResultsTabsList;
