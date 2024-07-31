"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ProjectCard from "@/components/Cards/Projects/ProjectCard";
import ProjectsToJoin from "@/mock/ProjectsToJoin.json";

const BATCH_SIZE = 10; // Number of projects to load per batch

const JoinAProject = () => {
	const [projectsToShow, setProjectsToShow] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const observer = useRef();

	useEffect(() => {
		// Load initial batch
		setProjectsToShow(ProjectsToJoin.slice(0, BATCH_SIZE));
	}, []);

	const lastProjectElementRef = useCallback(
		(node) => {
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setProjectsToShow((prevProjects) => {
						const newProjects = ProjectsToJoin.slice(prevProjects.length, prevProjects.length + BATCH_SIZE);
						if (newProjects.length === 0) {
							setHasMore(false);
						}
						return [...prevProjects, ...newProjects];
					});
				}
			});
			if (node) observer.current.observe(node);
		},
		[hasMore]
	);

	return (
		<div className="container min-w-full mx-auto py-8 px-2 md:px-8">
			<h1 className="text-4xl mb-12 text-center">Looking for a project?</h1>
			<p className="mb-4 text-center">Here are some projects waiting for you to help them...</p>
			<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 lg:gap-8">
				{projectsToShow.map((project, index) => {
					if (projectsToShow.length === index + 1) {
						return (
							<div className="embla__slide embla__class-names" ref={lastProjectElementRef} key={index}>
								<ProjectCard key={index} project={project} />
							</div>
						);
					} else {
						return (
							<div className="embla__slide embla__class-names" key={index}>
								<ProjectCard key={index} project={project} />
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

export default JoinAProject;
