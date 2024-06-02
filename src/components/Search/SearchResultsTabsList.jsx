"use client";

import { useState } from "react";

import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";
import ProjectHorizontalCard from "@/components/Cards/Projects/ProjectHorizontalCard";
import TalentHorizontalCard from "@/components/Cards/Talents/TalentHorizontalCard";
import CategoryHorizontalCard from "@/components/Cards/Categories/CategoryHorizontalCard";
import SubCategoryHorizontalCard from "@/components/Cards/Categories/SubCategoryHorizontalCard";
import LocationHorizontalCard from "@/components/Cards/Locations/LocationHorizontalCard";

import searchResults from "@/mock/searchResults.json";

const SearchResultsTabsList = ({ searchInput, tab, url }) => {
	const [activeTab, setActiveTab] = useState(tab || "tabProjects");

	return (
		<>
			{/* Menu nav tabs selection */}
			<ul className="flex flex-wrap justify-center text-gray-600 my-10">
				<li>
					<button className="inline-block mx-2 text-xs">
						<TabNavItem title="Projects" id="tabProjects" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" url={url} />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title="Talents" id="tabTalents" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" url={url} />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title="Categories" id="tabCategories" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" url={url} />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title="sub-categories" id="tabsubCategories" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" url={url} />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title="Locations" id="tabLocations" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" url={url} />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title="Tags" id="tabTags" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600" url={url} />
					</button>
				</li>
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
						<p className=" text-xl text-center pt-10"> No project found 😕</p>
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
						<p className=" text-xl text-center pt-10"> No talent found 😕</p>
					)}
				</TabContent>
				<TabContent id="tabCategories" activeTab={activeTab}>
					{searchResults.categories && searchResults.categories.length !== 0 ? (
						<ul className="grid gap-8 sm:grid-cols-2 lg:mx-auto max-w-220">
							{searchResults.categories.map((category, index) => (
								<li key={index} className="flex justify-center">
									<CategoryHorizontalCard category={category} />
								</li>
							))}
						</ul>
					) : (
						<p className=" text-xl text-center pt-10"> No category found 😕</p>
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
						<p className=" text-xl text-center pt-10"> No sub-category found 😕</p>
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
						<p className=" text-xl text-center pt-10"> No location found 😕</p>
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
						<p className=" text-xl text-center pt-10"> No tag found 😕</p>
					)}
				</TabContent>
			</div>
		</>
	);
};
export default SearchResultsTabsList;
