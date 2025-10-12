import Category from "@/components/Category/Category";
import { ApiGetCategoryWithLink } from "@/lib/api/categories";
import projectsToJoin from "@/mock/projectsToJoin.json";

export const metadata = {
	title: "Category - Make It",
	description: "Category page with projects linked to the category",
};

const CategoryPage = async ({ params }) => {
	const { categoryLink } = params;

	const category = await ApiGetCategoryWithLink(categoryLink);

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

export default CategoryPage;
