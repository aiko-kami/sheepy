import { apiGet } from "@/lib/api/ApiHelpers";

export async function ApiGetAllTags() {
	return apiGet("/tags/tags");
}

export async function ApiGetTagWithId(tagId) {
	return apiGet(`/tags/tag/id/${tagId}`);
}

export async function ApiGetTagWithLink(tagLink) {
	return apiGet(`/tags/tag/link/${tagLink}`);
}
