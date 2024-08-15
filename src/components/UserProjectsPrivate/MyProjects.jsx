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
				{projects && projects.length !== 0 && (
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
			{projects && projects.length !== 0 ? (
				<>
					{displayMode === "table" && <MyProjectsTable projects={projects} />}
					{displayMode === "cards" && <MyProjectsCards projects={projects} />}
				</>
			) : (
				<p className=" text-xl text-center pt-10"> No project found 😕</p>
			)}
		</>
	);
};

export default MyProjects;
