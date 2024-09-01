import { ProjectHorizontalCardActions } from "@/components/Cards/Projects/ProjectCards";

const MyProjectsCards = ({ projects }) => {
	return (
		<>
			<ul className="grid sm:grid-cols-2 gap-4">
				{projects.map((project, index) => (
					<li key={index}>
						<ProjectHorizontalCardActions project={project} />
					</li>
				))}
			</ul>
		</>
	);
};
export default MyProjectsCards;
