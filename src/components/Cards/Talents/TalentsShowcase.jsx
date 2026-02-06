"use client";

import { useState } from "react";
import UserCard from "./UserCard";
import RecentUsers from "@/mock/RecentUsers.json";
import UsersYouNeed from "@/mock/UsersYouNeed.json";

const TABS = [
	{ key: "recent", label: "New Talents", data: RecentUsers },
	{ key: "recommended", label: "Talents you need", data: UsersYouNeed },
];

const TalentsShowcase = () => {
	const [activeTab, setActiveTab] = useState("recent");
	const activeData = TABS.find((t) => t.key === activeTab)?.data ?? [];

	return (
		<div>
			<div className="flex gap-1 mb-8" role="tablist" aria-label="Talent categories">
				{TABS.map((tab) => (
					<button
						key={tab.key}
						role="tab"
						aria-selected={activeTab === tab.key}
						onClick={() => setActiveTab(tab.key)}
						className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
							activeTab === tab.key
								? "bg-blue-600 text-base-100"
								: "text-secondary hover:text-primary hover:bg-base-600/50"
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className="flex flex-wrap justify-center gap-6">
				{activeData.map((user, index) => (
					<UserCard key={`${activeTab}-${index}`} user={user} animate={true} />
				))}
			</div>
		</div>
	);
};

export default TalentsShowcase;
