"use client";

import { useState } from "react";

import { IoGridOutline, IoReorderFour } from "react-icons/io5";
import MyProjectsTable from "@/components/Tables/MyProjectsTable";
import MyProjectsCards from "@/components/UserProjectsPrivate/MyProjectCards";

const MyProjects = ({ projects }) => {
	const [displayMode, setDisplayMode] = useState("table");

	const switchDisplay = () => {
		displayMode === "table" && setDisplayMode("cards");
		displayMode === "cards" && setDisplayMode("table");
	};

	return (
		<>
			<div className="grid grid-cols-3 items-center">
				{/* Page title */}
				<div className="col-start-2 col-span-1 text-center">
					<h1 className="text-4xl mb-12 text-center">My Projects</h1>
				</div>

				{/* Change display buttons */}
				{(projects.projectCount.onGoing > 0 || projects.projectCount.created > 0 || projects.projectCount.completed > 0) && (
					<div className="text-right">
						{displayMode === "table" && (
							<>
								<button onClick={switchDisplay}>
									<IoGridOutline className="text-3xl hover:text-blue-400 duration-100 transition ease-in-out" title="Display project as cards" />
								</button>
							</>
						)}
						{displayMode === "cards" && (
							<button onClick={switchDisplay}>
								<IoReorderFour className="text-3xl hover:text-blue-400 duration-100 transition ease-in-out" title="Display project as a table" />
							</button>
						)}
					</div>
				)}
			</div>
			<h2 className="text-xl mb-2 sm:ml-4">Projects I created</h2>
			<p className="mb-6 sm:ml-4">The projects you created or for which you are the owner</p>
			{projects.projectsOnGoing && projects.projectsOnGoing.length !== 0 ? (
				<div className="mb-12">
					{displayMode === "table" && <MyProjectsTable projects={projects.projectsOnGoing} />}
					{displayMode === "cards" && <MyProjectsCards projects={projects.projectsOnGoing} />}
				</div>
			) : (
				<p className=" text-xl text-center mb-12"> No project found 😕</p>
			)}
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
			<h2 className="text-xl mb-2 sm:ml-4">Projects I work on</h2>
			<p className="mb-6 sm:ml-4">The projects for which you are a team member</p>
			{projects.projectsCreated && projects.projectsCreated.length !== 0 ? (
				<div className="mb-12">
					{displayMode === "table" && <MyProjectsTable projects={projects.projectsCreated} />}
					{displayMode === "cards" && <MyProjectsCards projects={projects.projectsCreated} />}
				</div>
			) : (
				<p className=" text-xl text-center mb-12"> No project found 😕</p>
			)}
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
			<h2 className="text-xl mb-2 sm:ml-4">Projects completed</h2>
			<p className="mb-6 sm:ml-4">The projects over for which you were either the owner or a team member</p>
			{projects.projectsCompleted && projects.projectsCompleted.length !== 0 ? (
				<div className="mb-12">
					{displayMode === "table" && <MyProjectsTable projects={projects.projectsCompleted} />}
					{displayMode === "cards" && <MyProjectsCards projects={projects.projectsCompleted} />}
				</div>
			) : (
				<p className=" text-xl text-center mb-12"> No project found 😕</p>
			)}
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
			<h2 className="text-xl mb-2 sm:ml-4">Projects Invitations</h2>
			<p className="mb-6 sm:ml-4">The invitations you received to join a project</p>
			{projects.projectsCompleted && projects.projectsCompleted.length !== 0 ? (
				<div className="mb-12">
					{displayMode === "table" && <MyProjectsTable projects={projects.projectsCompleted} />}
					{displayMode === "cards" && <MyProjectsCards projects={projects.projectsCompleted} />}
				</div>
			) : (
				<p className=" text-xl text-center mb-12"> No project found 😕</p>
			)}
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
			<h2 className="text-xl mb-2 sm:ml-4">Projects requests</h2>
			<p className="mb-6 sm:ml-4">The requests you sent to join a project</p>
			{projects.projectsCompleted && projects.projectsCompleted.length !== 0 ? (
				<div className="mb-12">
					{displayMode === "table" && <MyProjectsTable projects={projects.projectsCompleted} />}
					{displayMode === "cards" && <MyProjectsCards projects={projects.projectsCompleted} />}
				</div>
			) : (
				<p className=" text-xl text-center mb-12"> No project found 😕</p>
			)}
		</>
	);
};

export default MyProjects;
