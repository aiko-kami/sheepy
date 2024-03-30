import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
	return (
		<>
			<div className="my-4 grid grid-cols-2 lg:grid-cols-4 container mx-auto lg:max-w-8xl justify-items-center">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</>
	);
};

export default RecentProjects;
