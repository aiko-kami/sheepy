import { apiGet } from "@/lib/api/ApiHelpers";

export async function ApiGetAllCategories() {
	return apiGet("/cat/categories");
}

export async function ApiGetCategoryWithId(categoryId) {
	return apiGet(`/cat/category/id/${categoryId}`);
}

export async function ApiGetCategoryWithLink(categoryLink) {
	return apiGet(`/cat/category/link/${categoryLink}`);
}
