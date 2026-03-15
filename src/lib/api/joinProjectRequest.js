import { apiGet, apiPost, apiPatch, apiDelete } from "@/lib/api/ApiHelpers";

//GET requests

export async function ApiGetMyDrafts() {
	return apiGet("/joinProject/request/myDrafts");
}

export async function ApiGetMyRequests() {
	return apiGet("/joinProject/request/myRequests");
}

export async function ApiGetMyRequest(requestId) {
	return apiGet(`/joinProject/request/myRequest/${requestId}`);
}

//POST requests

export async function ApiPostSaveDraftRequest(data) {
	return apiPost("/joinProject/request/saveDraft", data);
}

export async function ApiPostSendRequest(data) {
	return apiPost("/joinProject/request/send", data);
}

export async function ApiPostAcceptRequest(data) {
	return apiPost("/joinProject/request/accept", data);
}

export async function ApiPostRefuseRequest(data) {
	return apiPost("/joinProject/request/refuse", data);
}

//PATCH requests

export async function ApiEditDraftRequest(data) {
	return apiPatch("/joinProject/request/updateDraft", data);
}

export async function ApiCancelRequest(data) {
	return apiPatch("/joinProject/request/cancel", data);
}

//DELETE requests

export async function ApiDeleteDraftRequest(data) {
	return apiDelete("/joinProject/request/removeDraft", data);
}
