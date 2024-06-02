import ProjectCard from "./ProjectCard";
import LatestProjects from "@/mock/LatestProjects.json";

const RecentProjects = () => {
	return (
		<>
			<div className="my-4 flex flex-wrap justify-center gap-6">
				{LatestProjects.map((project, index) => (
					<ProjectCard key={index} project={project} animate={true} />
				))}
			</div>
		</>
	);
};

export default RecentProjects;
