"use client";

import { useState } from "react";

import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";
import { ProjectHorizontalCard } from "@/components/Cards/Projects/ProjectCards";
import TalentHorizontalCard from "@/components/Cards/Talents/TalentHorizontalCard";
import CategoryHorizontalCard from "@/components/Cards/Categories/CategoryHorizontalCard";
import SubCategoryHorizontalCard from "@/components/Cards/Categories/SubCategoryHorizontalCard";
import LocationHorizontalCard from "@/components/Cards/Locations/LocationHorizontalCard";

import searchResults from "@/mock/searchResults.json";
import categories from "@/mock/categories.json";

const SearchResultsTabsList = ({ searchInput, tab, updateUrl }) => {
	const [activeTab, setActiveTab] = useState(tab || "tabProjects");

	const tabData = [
		{ tabId: "tabProjects", label: "Projects" },
		{ tabId: "tabTalents", label: "Talents" },
		{ tabId: "tabCategories", label: "Categories" },
		{ tabId: "tabsubCategories", label: "Sub-categories" },
		{ tabId: "tabLocations", label: "Locations" },
		{ tabId: "tabTags", label: "Tags" },
	];

	return (
		<>
			{/* Menu nav tabs selection */}
			<ul className="flex flex-wrap justify-center text-sm sm:text-base text-gray-600 my-10">
				{tabData.map(({ tabId, label }) => (
					<li key={tabId}>
						<button className="inline-block mx-2">
							<TabNavItem id={tabId} activeTab={activeTab} setActiveTab={setActiveTab} stdClass="pb-2 sm:px-4" activeClass="text-blue-600 border-b-1 border-blue-600" updateUrl={updateUrl}>
								{label}
							</TabNavItem>
						</button>
					</li>
				))}
			</ul>

			{/* Tabs content */}
			<div id="defaultTabContent" className="">
				<TabContent id="tabProjects" activeTab={activeTab}>
					{searchResults.projects && searchResults.projects.length !== 0 ? (
						<ul className="grid gap-4">
							{searchResults.projects.map((project, index) => (
								<li key={index}>
									<ProjectHorizontalCard project={project} animate={true} />
								</li>
							))}
						</ul>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">No projects found</span> 😕
						</p>
					)}
				</TabContent>
				<TabContent id="tabTalents" activeTab={activeTab}>
					{searchResults.users && searchResults.users.length !== 0 ? (
						<ul className="grid gap-4">
							{searchResults.users.map((user, index) => (
								<li key={index} className="flex justify-center">
									<TalentHorizontalCard user={user} animate={true} />
								</li>
							))}
						</ul>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">No talents found</span> 😕
						</p>
					)}
				</TabContent>
				<TabContent id="tabCategories" activeTab={activeTab}>
					{categories && categories.length !== 0 ? (
						<ul className="grid gap-8 sm:grid-cols-2 lg:mx-auto max-w-250">
							{categories.map((category, index) => (
								<li key={index} className="flex justify-center">
									<CategoryHorizontalCard category={category} animate={true} />
								</li>
							))}
						</ul>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">No categories found</span> 😕
						</p>
					)}
				</TabContent>
				<TabContent id="tabsubCategories" activeTab={activeTab}>
					{searchResults.subCategories && searchResults.subCategories.length !== 0 ? (
						<ul className="grid gap-4">
							{searchResults.subCategories.map((subCategory, index) => (
								<li key={index}>
									<SubCategoryHorizontalCard subCategory={subCategory} />
								</li>
							))}
						</ul>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">No sub-categories found</span> 😕
						</p>
					)}
				</TabContent>
				<TabContent id="tabLocations" activeTab={activeTab}>
					{searchResults.locations && searchResults.locations.length !== 0 ? (
						<ul className="grid gap-5 tn:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-auto max-w-320">
							{searchResults.locations.map((location, index) => (
								<li key={index} className="flex justify-center">
									<LocationHorizontalCard location={location} />
								</li>
							))}
						</ul>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">No locations found</span> 😕
						</p>
					)}
				</TabContent>
				<TabContent id="tabTags" activeTab={activeTab}>
					{searchResults.tags && searchResults.tags.length !== 0 ? (
						<ul className="grid gap-4">
							{searchResults.tags.map((tag, index) => (
								<li key={index}>
									<TalentHorizontalCard badge={tag} />
								</li>
							))}
						</ul>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">No tags found</span> 😕
						</p>
					)}
				</TabContent>
			</div>
		</>
	);
};
export default SearchResultsTabsList;
