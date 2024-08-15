import { ProjectHorizontalCard } from "@/components/Cards/Projects/ProjectCards";

const SimilarProjects = ({ projects }) => {
	return (
		<>
			<h2 className="font-semibold text-3xl mb-3">Check out similar projects</h2>
			<hr className="h-px mb-6 bg-gray-200 border-0 dark:bg-gray-700" />
			{projects && projects.length !== 0 ? (
				<ul className="grid sm:grid-cols-2 gap-4">
					{projects.map((project, index) => (
						<li key={index}>
							<ProjectHorizontalCard project={project} animate={true} />
						</li>
					))}
				</ul>
			) : (
				<p className=" text-xl text-center pt-10"> No project found 😕</p>
			)}
		</>
	);
};
export default SimilarProjects;
