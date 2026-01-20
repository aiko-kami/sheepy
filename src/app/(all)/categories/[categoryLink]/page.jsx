import Category from "@/components/Category/Category";
import { ApiGetCategoryWithLink } from "@/lib/api/categories";
import projectsToJoin from "@/mock/projectsToJoin.json";
import Error from "@/components/Errors/Error";
import ERRORS from "@/lib/constants/errors";

export const metadata = {
	title: "Category - Make It",
	description: "Category page with projects linked to the category",
};

const CategoryPage = async ({ params }) => {
	const { categoryLink } = params;

	const result = await ApiGetCategoryWithLink(categoryLink);
	if (!result.ok || !result.data || !result.data.category) {
		return <Error title={ERRORS.NOT_FOUND.CATEGORY_TITLE} message={ERRORS.NOT_FOUND.CATEGORY_MESSAGE} extraMessage={result.message} />;
	}

	const category = result.data.category;

	return (
		<div className="container mx-auto py-8">
			<Category category={category} projects={projectsToJoin} />
		</div>
	);
};

export default CategoryPage;
