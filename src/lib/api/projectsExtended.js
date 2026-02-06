import { apiGet, apiPost, apiPatch, apiDelete, apiPatchMultipart } from "@/lib/api/ApiHelpers";

//GET requests

export async function ApiGetProjectCrush() {
	return apiGet("/projectsExtended/crushProjects");
}
