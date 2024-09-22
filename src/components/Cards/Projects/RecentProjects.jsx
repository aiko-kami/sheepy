import { ProjectCard } from "./ProjectCards";
import LatestProjects from "@/mock/LatestProjects.json";

const RecentProjects = () => {
	return (
		<>
			<div className="flex flex-wrap justify-center gap-6">
				{LatestProjects.map((project, index) => (
					<ProjectCard key={index} project={project} animate={true} />
				))}
			</div>
		</>
	);
};

export default RecentProjects;
