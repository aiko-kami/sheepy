"use client";
import { useState } from "react";
import { IoChatboxEllipsesOutline, IoHelpCircleOutline } from "react-icons/io5";

import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";
import QAs from "@/components/ProjectPublic/QAs";
import Comments from "@/components/ProjectPublic/Comments";

const QAComments = ({ project }) => {
	const [activeTab, setActiveTab] = useState("tabQAs");

	const tabData = [
		{
			id: "tabQAs",
			label: "Q&A",
			count: project.qnasCount,
			icon: IoHelpCircleOutline,
		},
		{
			id: "tabComments",
			label: "Comments",
			count: project.commentsCount,
			icon: IoChatboxEllipsesOutline,
		},
	];

	return (
		<>
			{/* Menu nav tabs selection */}
			<ul className="flex flex-wrap font-semibold sm:text-3xl mb-5">
				{tabData.map(({ id, label, count, icon: Icon }) => (
					<li key={id} className="w-1/2 flex justify-center cursor-pointer">
						<TabNavItem
							id={id}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							stdClass="pb-2 sm:px-4 w-full flex justify-center"
							activeClass="w-full text-blue-600 border-b-2 border-blue-600"
							inactiveClass="border-b-1 border-gray-600"
						>
							<div className="flex items-center">
								<Icon className="text-3xl mr-3 mt-1" />
								{label}
							</div>
							<div className="relative">
								<div className="absolute inline-flex items-center justify-center px-2 pb-0.5 h-7 text-sm font-bold text-white bg-red-500 border-2 border-base-500 rounded-full -top-1 -left-1">
									{count}
								</div>
							</div>
						</TabNavItem>
					</li>
				))}
			</ul>

			{/* Tabs content */}
			<div id="defaultTabContent">
				<TabContent id="tabQAs" activeTab={activeTab}>
					<QAs qnas={project.qnas} />
				</TabContent>
				<TabContent id="tabComments" activeTab={activeTab}>
					<Comments comments={project.comments} />
				</TabContent>
			</div>
		</>
	);
};
export default QAComments;
