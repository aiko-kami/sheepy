"use client";

import { useState } from "react";
import { ProjectCard, ProjectCardSkeleton } from "@/components/Cards/Projects/ProjectCards";
import ProjectTable from "@/components/Tables/ProjectTable";
import DisplaySwitch from "@/components/Buttons/DisplaySwitch-V1";

const JoinProject = ({ projects }) => {
	const [displayMode, setDisplayMode] = useState("cards");

	return (
		<>
			{/* Change display buttons */}
			<div className="mb-4">
				<DisplaySwitch displayMode={displayMode} handleDisplayMode={setDisplayMode} />
			</div>

			{displayMode === "cards" && (
				<div className="grid justify-evenly grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
					{projects.map((project, index) => {
						return (
							<div className="flex justify-center" key={index}>
								<ProjectCard key={index} project={project} animate={true} />
							</div>
						);
					})}
					<ProjectCardSkeleton />
					<ProjectCardSkeleton />
					<ProjectCardSkeleton />
					<ProjectCardSkeleton />
				</div>
			)}
			{displayMode === "table" && (
				<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
					<ProjectTable projects={projects} />
				</div>
			)}
		</>
	);
};

export default JoinProject;
