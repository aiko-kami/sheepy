import { ProjectHorizontalCard } from "@/components/Cards/Projects/ProjectCards";

const SimilarProjects = ({ similarProjects }) => {
	return (
		<>
			<h2 className="font-semibold text-3xl mb-3">Check out similar projects</h2>
			<hr className="h-px mb-6 bg-gray-200 border-0 dark:bg-gray-700" />
			{similarProjects && similarProjects.length !== 0 ? (
				<ul className="grid sm:grid-cols-2 gap-4">
					{similarProjects.map((project, index) => (
						<li key={index}>
							<ProjectHorizontalCard project={project} animate={true} />
						</li>
					))}
				</ul>
			) : (
				<p className=" text-xl text-center pt-10">
					<span className="italic">No projects found</span> 😕
				</p>
			)}
		</>
	);
};
export default SimilarProjects;
