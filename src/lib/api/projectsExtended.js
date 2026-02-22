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
	return apiPost("/projectsExtended/editProjectComment", data);
}

export async function ApiReportComment(data) {
	return apiPost("/projectsExtended/reportProjectComment", data);
}

export async function ApiUnreportComment(data) {
	return apiPost("/projectsExtended/unreportProjectComment", data);
}

//DELETE requests

export async function ApiDeleteComment(projectId, data) {
	return apiDelete("/projectsExtended/removeProjectComment", data);
}
