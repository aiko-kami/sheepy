import { apiGet, apiPost, apiPatch } from "@/lib/api/ApiHelpers";

export async function ApiGetEditUserRights(projectLink) {
	return apiGet(`/projectEdition/userRights/${projectLink}`);
}

export async function ApiGetEditProjectGeneral(projectLink) {
	return apiGet(`/projectEdition/general/${projectLink}`);
}

export async function ApiGetEditProjectMembers(projectLink) {
	return apiGet(`/projectEdition/members/${projectLink}`);
}

export async function ApiGetEditProjectRights(projectLink) {
	return apiGet(`/projectEdition/rights/${projectLink}`);
}

export async function ApiGetEditProjectStatus(projectLink) {
	return apiGet(`/projectEdition/status/${projectLink}`);
}

export async function ApiGetEditProjectLocation(projectLink) {
	return apiGet(`/projectEdition/location/${projectLink}`);
}

export async function ApiGetEditProjectAttachments(projectLink) {
	return apiGet(`/projectEdition/attachments/${projectLink}`);
}

export async function ApiGetEditProjectSteps(projectLink) {
	return apiGet(`/projectEdition/steps/${projectLink}`);
}

export async function ApiGetEditProjectQAs(projectLink) {
	return apiGet(`/projectEdition/QAs/${projectLink}`);
}

export async function ApiGetEditProjectDetails(projectLink) {
	return apiGet(`/projectEdition/details/${projectLink}`);
}

export async function ApiPostUpdateProjectStatus(projectId, data) {
	return apiPatch(`/projectEdition/status/${projectId}`, data);
}

export async function ApiPostUpdateProjectVisibility(projectId, data) {
	return apiPatch(`/projectEdition/visibility/${projectId}`, data);
}

export async function ApiPostUpdateProjectLocation(projectId, data) {
	return apiPatch(`/projectEdition/location/${projectId}`, data);
}
