"use client";

import { useState } from "react";

import { IoExtensionPuzzleOutline, IoChatboxEllipsesOutline, IoHelpCircleOutline } from "react-icons/io5";

import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";
import Steps from "@/components/ProjectPublic/Steps";
import QAs from "@/components/ProjectPublic/QAs";
import Comments from "@/components/ProjectPublic/Comments";

const StepsQAComments = ({ project }) => {
	const [activeTab, setActiveTab] = useState("tabSteps");

	const tabData = [
		{
			id: "tabSteps",
			label: "Steps",
			count: project.stepsCount,
			icon: IoExtensionPuzzleOutline,
		},
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
			<ul className="flex flex-wrap justify-center font-semibold text-xl sm:text-3xl mb-12">
				{tabData.map(({ id, label, count, icon: Icon }) => (
					<li key={id} className="tn:w-1/3 justify-center cursor-pointer mt-2 sm:mt-0">
						<TabNavItem
							id={id}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
							stdClass="pb-2 px-4 w-full flex justify-center"
							activeClass="w-full text-blue-600 border-b-2 border-blue-600"
							inactiveClass="border-b-1 border-gray-600"
							updateUrl={true}
						>
							<div className="flex flex-col justify-center items-center -translate-x-2">
								<Icon className="text-3xl mt-1" />
								{label}
							</div>
							<div className="relative">
								<div className="absolute inline-flex items-center justify-center px-2 pb-0.5 h-7 text-sm font-bold text-white bg-gray-600 border-2 border-base-500 rounded-full top-6 -left-3 sm:-left-3">
									{count}
								</div>
							</div>
						</TabNavItem>
					</li>
				))}
			</ul>

			{/* Tabs content */}
			<div id="defaultTabContent" className="lg:px-8">
				<TabContent id="tabSteps" activeTab={activeTab}>
					<Steps steps={project.steps} />
				</TabContent>
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
export default StepsQAComments;
