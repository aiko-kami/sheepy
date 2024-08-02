"use client";

import { useState } from "react";
import ProjectCard from "@/components/Cards/Projects/ProjectCard";
import ProjectCardSkeleton from "@/components/Cards/Projects/ProjectCardSkeleton";
import ProjectsToJoin from "@/mock/ProjectsToJoin.json";

const JoinAProject = () => {
	return (
		<div className="container min-w-full mx-auto py-8 px-2 md:px-8">
			<h1 className="text-4xl mb-12 text-center">Looking for a project?</h1>
			<p className="mb-4 text-center">Here are some projects waiting for you to help them...</p>
			<div className="grid justify-evenly grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
				{ProjectsToJoin.map((project, index) => {
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
		</div>
	);
};

export default JoinAProject;
