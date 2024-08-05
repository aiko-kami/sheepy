import Category from "@/components/Category/Category";

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

	return (
		<div className="container mx-auto py-8">
			<Category category={category} projects={projectsToJoin} />
		</div>
	);
};

export default ProjectDescriptionPage;
