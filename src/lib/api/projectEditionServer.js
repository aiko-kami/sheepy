import { apiGet, apiPost, apiPatch, apiDelete, apiPatchMultipart } from "@/lib/api/ApiHelpers";

//GET requests

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

//PATCH requests

export async function ApiPatchUpdateProjectTitleCategory(projectId, data) {
	return apiPatch(`/projectEdition/titleCategory/${projectId}`, data);
}

export async function ApiPatchUpdateProjectInformation(projectId, data) {
	return apiPatch(`/projectEdition/information/${projectId}`, data);
}

export async function ApiPatchUpdateProjectCover(projectId, data) {
	return apiPatchMultipart(`/projectEdition/cover/${projectId}`, data);
}

export async function ApiPatchUpdateProjectMember(projectId, data) {
	return apiPatch(`/projectEdition/members/${projectId}`, data);
}

export async function ApiPatchUpdateProjectStatus(projectId, data) {
	return apiPatch(`/projectEdition/status/${projectId}`, data);
}

export async function ApiPatchUpdateProjectVisibility(projectId, data) {
	return apiPatch(`/projectEdition/visibility/${projectId}`, data);
}

export async function ApiPatchUpdateProjectLocation(projectId, data) {
	return apiPatch(`/projectEdition/location/${projectId}`, data);
}

//POST requests

export async function ApiPostAddTalentNeeded(projectId, data) {
	return apiPost(`/projectEdition/talentNeeded/${projectId}`, data);
}

export async function ApiPostAddObjective(projectId, data) {
	return apiPost(`/projectEdition/objective/${projectId}`, data);
}

export async function ApiPostAddTag(projectId, data) {
	return apiPost(`/projectEdition/tag/${projectId}`, data);
}

//DELETE requests

export async function ApiDeleteRemoveProjectMember(projectId, data) {
	return apiDelete(`/projectEdition/members/${projectId}`, data);
}

export async function ApiPostDeleteTalentNeeded(projectId, data) {
	return apiDelete(`/projectEdition/talentNeeded/${projectId}`, data);
}

export async function ApiPostDeleteObjective(projectId, data) {
	return apiDelete(`/projectEdition/objective/${projectId}`, data);
}

export async function ApiPostDeleteTag(projectId, data) {
	return apiDelete(`/projectEdition/tag/${projectId}`, data);
}
