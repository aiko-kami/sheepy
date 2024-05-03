import ProjectCard from "./ProjectCard";
import LatestProjects from "@/LatestProjects.json";

const RecentProjects = () => {
	return (
		<>
			<div className="my-4 flex flex-wrap justify-center gap-6">
				{LatestProjects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</>
	);
};

export default RecentProjects;
