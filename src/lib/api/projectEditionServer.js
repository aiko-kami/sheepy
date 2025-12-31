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

export async function ApiUpdateProjectTitleCategory(projectId, data) {
	return apiPatch(`/projectEdition/titleCategory/${projectId}`, data);
}

export async function ApiUpdateProjectInformation(projectId, data) {
	return apiPatch(`/projectEdition/information/${projectId}`, data);
}

export async function ApiUpdateProjectCover(projectId, data) {
	return apiPatchMultipart(`/projectEdition/cover/${projectId}`, data);
}

export async function ApiUpdateProjectMember(projectId, data) {
	return apiPatch(`/projectEdition/members/${projectId}`, data);
}

export async function ApiUpdateProjectMembersRights(projectId, data) {
	return apiPatch(`/projectEdition/rights/${projectId}`, data);
}

export async function ApiUpdateProjectStatus(projectId, data) {
	return apiPatch(`/projectEdition/status/${projectId}`, data);
}

export async function ApiUpdateProjectVisibility(projectId, data) {
	return apiPatch(`/projectEdition/visibility/${projectId}`, data);
}

export async function ApiUpdateProjectLocation(projectId, data) {
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

export async function ApiDeleteProjectMember(projectId, data) {
	return apiDelete(`/projectEdition/members/${projectId}`, data);
}

export async function ApiDeleteProjectCover(projectId) {
	return apiDelete(`/projectEdition/cover/${projectId}`);
}

export async function ApiDeleteTalentNeeded(projectId, data) {
	return apiDelete(`/projectEdition/talentNeeded/${projectId}`, data);
}

export async function ApiDeleteObjective(projectId, data) {
	return apiDelete(`/projectEdition/objective/${projectId}`, data);
}

export async function ApiDeleteTag(projectId, data) {
	return apiDelete(`/projectEdition/tag/${projectId}`, data);
}
