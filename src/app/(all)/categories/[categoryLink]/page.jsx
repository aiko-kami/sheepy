import Category from "@/components/Category/Category";
import { ApiGetCategoryWithLink } from "@/lib/api/categories";
import projectsToJoin from "@/mock/projectsToJoin.json";

export const metadata = {
	title: "Category - Make It",
	description: "Category page with projects linked to the category",
};

const CategoryPage = async ({ params }) => {
	const { categoryLink } = params;

	const result = await ApiGetCategoryWithLink(categoryLink);
	if (!result.ok || !result.data) {
		return (
			<div className="container mx-auto py-8">
				<h1 className="text-3xl font-semibold mb-4">Category not found</h1>
				<p className="text-gray-400 mt-2">{result.message || "Something went wrong."}</p>
			</div>
		);
	}

	const category = result.data;

	return (
		<div className="container mx-auto py-8">
			<Category category={category} projects={projectsToJoin} />
		</div>
	);
};

export default CategoryPage;
