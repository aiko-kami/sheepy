import { apiGet } from "@/lib/api/ApiHelpers";

export async function ApiGetAllCategories() {
	return apiGet("/cat/categories", (json) => json?.data?.categories ?? []);
}

export async function ApiGetCategoryWithId(categoryId) {
	return apiGet(`/cat/category/id/${categoryId}`, (json) => json?.data?.category ?? null);
}

export async function ApiGetCategoryWithLink(categoryLink) {
	return apiGet(`/cat/category/link/${categoryLink}`, (json) => json?.data?.category ?? null);
}
