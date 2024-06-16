"use client";
import { useState } from "react";
import { IoChatboxEllipsesOutline, IoHelpCircleOutline } from "react-icons/io5";

import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";

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
								{label} ({count})
							</div>
						</TabNavItem>
					</li>
				))}
			</ul>

			{/* Tabs content */}
			<div id="defaultTabContent">
				<TabContent id="tabQAs" activeTab={activeTab}>
					<ul className="grid sm:grid-cols-2 gap-4">
						{project.qnas.map((qna, index) => (
							<li key={index}>{`${qna.question} ${qna.answer}`}</li>
						))}
					</ul>
				</TabContent>
				<TabContent id="tabComments" activeTab={activeTab}>
					<ul className="grid sm:grid-cols-2 gap-4">
						{project.comments.map((comment, index) => (
							<li key={index}>{`${comment}`}</li>
						))}
					</ul>
				</TabContent>
			</div>
		</>
	);
};
export default QAComments;
