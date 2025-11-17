import Category from "@/components/Category/Category";
import { ApiGetCategoryWithLink } from "@/lib/api/categories";
import projectsToJoin from "@/mock/projectsToJoin.json";
import Error from "@/components/Errors/Error";

export const metadata = {
	title: "Category - Make It",
	description: "Category page with projects linked to the category",
};

const CategoryPage = async ({ params }) => {
	const { categoryLink } = params;

	const result = await ApiGetCategoryWithLink(categoryLink);
	if (!result.ok || !result.data) {
		return <Error title="404 - Category Not Found" message="Sorry, we couldn’t find the category you are looking for... 😥" extraMessage={result.message} />;
	}

	const category = result.data?.category;
	if (!category) {
		return <Error title="404 - Category Not Found" message="Sorry, we couldn’t find the Category you are looking for... 😥" />;
	}

	return (
		<div className="container mx-auto py-8">
			<Category category={category} projects={projectsToJoin} />
		</div>
	);
};

export default CategoryPage;
