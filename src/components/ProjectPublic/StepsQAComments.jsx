"use client";

import { useState } from "react";

import { IoExtensionPuzzleOutline, IoChatboxEllipsesOutline, IoHelpCircleOutline } from "react-icons/io5";

import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";
import Steps from "@/components/ProjectPublic/Steps";
import QAs from "@/components/ProjectPublic/QAs";
import Comments from "@/components/ProjectPublic/Comments";
import Notification from "@/components/Badges/Notification";

const StepsQAComments = ({ projectId, projectCount, steps, qnas, comments, members }) => {
	const [activeTab, setActiveTab] = useState("tabSteps");

	const tabData = [
		{
			id: "tabSteps",
			label: "Steps",
			count: projectCount.stepsCount || 0,
			icon: IoExtensionPuzzleOutline,
		},
		{
			id: "tabQAs",
			label: "Q&A",
			count: projectCount.qnasCount || 0,
			icon: IoHelpCircleOutline,
		},
		{
			id: "tabComments",
			label: "Comments",
			count: projectCount.commentsCount || 0,
			icon: IoChatboxEllipsesOutline,
		},
	];

	return (
		<>
			{/* Menu nav tabs selection */}
			<ul className="flex flex-wrap justify-center font-semibold text-xl sm:text-3xl mb-8">
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
								<div className="absolute inline-flex items-center justify-center top-6 -left-3 sm:-left-3 rounded-full border-2 border-transparent">
									<Notification value={count} size={"std"} notifColor={"blue"} />
								</div>
							</div>
						</TabNavItem>
					</li>
				))}
			</ul>

			{/* Tabs content */}
			<div id="defaultTabContent" className="lg:px-8 mb-12">
				<TabContent id="tabSteps" activeTab={activeTab}>
					<Steps steps={steps?.stepsList} />
				</TabContent>
				<TabContent id="tabQAs" activeTab={activeTab}>
					<QAs qnas={qnas?.QAsList} />
				</TabContent>
				<TabContent id="tabComments" activeTab={activeTab}>
					<Comments comments={comments} projectId={projectId} members={members} />
				</TabContent>
			</div>
		</>
	);
};
export default StepsQAComments;
