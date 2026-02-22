import { apiGet, apiPost, apiPatch, apiDelete, apiPatchMultipart } from "@/lib/api/ApiHelpers";

//GET requests

export async function ApiGetProjectCrush() {
	return apiGet("/projectsExtended/crushProjects");
}

export async function ApiGetProjectComments(projectId) {
	return apiGet(`/projectsExtended/projectComments/${projectId}`);
}

//POST requests

export async function ApiPostAddComment(data) {
	return apiPost("/projectsExtended/addProjectComment", data);
}

export async function ApiPostAnswerComment(data) {
	return apiPost("/projectsExtended/answerProjectComment", data);
}

//PATCH requests

export async function ApiEditComment(data) {
	return apiPatch("/projectsExtended/editProjectComment", data);
}

export async function ApiReportComment(data) {
	return apiPatch("/projectsExtended/reportProjectComment", data);
}

export async function ApiUnreportComment(data) {
	return apiPatch("/projectsExtended/unreportProjectComment", data);
}

export async function ApiLikeComment(data) {
	return apiPatch("/projectsExtended/likeProjectComment", data);
}

export async function ApiUnlikeComment(data) {
	return apiPatch("/projectsExtended/unlikeProjectComment", data);
}

export async function ApiDislikeComment(data) {
	return apiPatch("/projectsExtended/dislikeProjectComment", data);
}

export async function ApiUndislikeComment(data) {
	return apiPatch("/projectsExtended/undislikeProjectComment", data);
}

//DELETE requests

export async function ApiDeleteComment(data) {
	return apiDelete("/projectsExtended/removeProjectComment", data);
}
