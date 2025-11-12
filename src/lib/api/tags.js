import { apiGet } from "@/lib/api/ApiHelpers";

export async function ApiGetAllTags() {
	return apiGet("/tags/tags", (json) => json?.data?.tags ?? []);
}

export async function ApiGetTagWithId(tagId) {
	return apiGet(`/tags/tag/id/${tagId}`, (json) => json?.data?.tag ?? null);
}

export async function ApiGetTagWithLink(tagLink) {
	return apiGet(`/tags/tag/link/${tagLink}`, (json) => json?.data?.tag ?? null);
}
