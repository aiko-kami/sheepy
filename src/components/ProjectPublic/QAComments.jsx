"use client";
import { useState } from "react";

import TabNavItem from "@/components/Tabs/TabNavItem";
import TabContent from "@/components/Tabs/TabContent";

const QAComments = ({ project }) => {
	const [activeTab, setActiveTab] = useState("tabQAs");

	return (
		<>
			{/* Menu nav tabs selection */}
			<ul className="flex flex-wrap justify-center sm:text-4xl mb-5 gap-12">
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title={`Q&As (${project.qnasCount})`} id="tabQAs" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600 border-b-1 border-blue-600" />
					</button>
				</li>
				<li>
					<button className="inline-block mx-2">
						<TabNavItem title={`Comments (${project.commentsCount})`} id="tabComments" activeTab={activeTab} setActiveTab={setActiveTab} activeClass="text-blue-600 border-b-1 border-blue-600" />
					</button>
				</li>
			</ul>

			{/* Tabs content */}
			<div id="defaultTabContent" className="">
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
