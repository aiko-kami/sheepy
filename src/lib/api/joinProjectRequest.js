import { apiGet, apiPost, apiPatch, apiDelete } from "@/lib/api/ApiHelpers";

//GET requests

export async function ApiGetMyJoinProjectDrafts() {
	return apiGet("/joinProject/request/myDrafts");
}

export async function ApiGetMyJoinProjectRequests() {
	return apiGet("/joinProject/request/myRequests");
}

export async function ApiGetMyJoinProjectRequest(requestId) {
	return apiGet(`/joinProject/request/myRequest/${requestId}`);
}

//POST requests

export async function ApiPostSaveDraftJoinProjectRequest(data) {
	return apiPost("/joinProject/request/saveDraft", data);
}

export async function ApiPostSendJoinProjectRequest(data) {
	return apiPost("/joinProject/request/send", data);
}

export async function ApiPostAcceptJoinProjectRequest(data) {
	return apiPost("/joinProject/request/accept", data);
}

export async function ApiPostRefuseJoinProjectRequest(data) {
	return apiPost("/joinProject/request/refuse", data);
}

//PATCH requests

export async function ApiEditDraftJoinProjectRequest(data) {
	return apiPatch("/joinProject/request/updateDraft", data);
}

export async function ApiCancelJoinProjectRequest(data) {
	return apiPatch("/joinProject/request/cancel", data);
}

//DELETE requests

export async function ApiDeleteDraftJoinProjectRequest(data) {
	return apiDelete("/joinProject/request/removeDraft", data);
}
