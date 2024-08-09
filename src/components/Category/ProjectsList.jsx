import ProjectCard from "@/components/Cards/Projects/ProjectCard";

const ProjectsList = ({ category, projects, selectedSubCategory }) => {
	// Filter projects that belong to the specified category and subcategory
	const filteredProjects = projects.filter((project) => {
		return project.category.name === category.name && (selectedSubCategory ? project.subCategory === selectedSubCategory.name : true);
	});

	return (
		<>
			<p className="mb-2 sm:mb-4 text-lg sm:text-xl text-center">The projects for the category {category.name}:</p>
			{filteredProjects.length > 0 ? (
				<div className="grid justify-evenly grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
					{filteredProjects.map((project, index) => {
						return (
							<div className="flex justify-center" key={index}>
								<ProjectCard key={index} project={project} animate={true} />
							</div>
						);
					})}
				</div>
			) : (
				<p className="mt-10 text-center text-gray-500">No projects available</p>
			)}
		</>
	);
};

export default ProjectsList;
