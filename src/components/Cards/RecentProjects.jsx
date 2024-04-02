import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
	return (
		<>
			<div className="my-4 flex flex-wrap justify-center gap-6">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</>
	);
};

export default RecentProjects;
