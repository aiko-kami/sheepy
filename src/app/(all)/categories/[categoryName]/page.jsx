import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/Cards/Projects/ProjectCard";

import categories from "@/mock/categories.json";
import projectsToJoin from "@/mock/projectsToJoin.json";

export const metadata = {
	title: "Category - Sheepy",
	description: "Category page with projects linked to the category",
};

const ProjectDescriptionPage = ({ params }) => {
	const { categoryName } = params;

	// Find the category object that matches the category link
	const category = categories.find((cat) => cat.link === `/categories/${categoryName}`);

	// If the category is not found
	if (!category) {
		return (
			<div className="container mx-auto py-8">
				<h1 className="text-3xl font-semibold mb-4">Category not found</h1>
			</div>
		);
	}

	// Filter projects that belong to the specified category
	const filteredProjects = projectsToJoin.filter((project) => project.category.name === category.name);

	return (
		<div className="container mx-auto py-8">
			<div className="relative mb-6">
				<Image src={category.cover} className="w-full h-80 object-cover rounded-3xl" alt="Category cover" width={0} height={0} sizes="100vw" />
				<div className="absolute -translate-y-2 inset-0 flex items-center justify-center">
					<h1
						className="text-center leading-tight font-rowdies text-transparent bg-clip-text text-[50px] sm:text-[100px] lg:text-[150px] p-0 m-0 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.9)]"
						style={{ backgroundImage: `url(${category.coverText})` }}
					>
						{category.name}
					</h1>
				</div>
			</div>
			<div className="px-6">
				<div className="mb-6">
					<p className="text-xl">{category.description}</p>
				</div>
				<div className="mb-14 text-center">
					<p className="mb-10 text-xl">Filter on sub-categories:</p>
					<div className="grid grid-flow-col gap-6 overflow-x-auto">
						{category.subCategories.map((subCategory, index) => (
							<Link key={index} href={subCategory.link}>
								<div className={`${subCategory.bgColor} text-nowrap hover:${subCategory.bgColorHover} text-white rounded-lg p-2 mb-2`}>
									{subCategory.symbol && <span className="mr-2">{subCategory.symbol}</span>}
									{subCategory.name}
								</div>
							</Link>
						))}
					</div>
				</div>
				<p className="mb-10 text-xl text-center">The project for the category {category.name}:</p>
				<div className="grid justify-evenly grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
					{filteredProjects.map((project, index) => {
						return (
							<div className="flex justify-center" key={index}>
								<ProjectCard key={index} project={project} animate={true} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectDescriptionPage;
