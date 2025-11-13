import { apiGet } from "@/lib/api/ApiHelpers";

export async function ApiGetEditUserRights(projectLink) {
	return apiGet(`/projectEdition/userRights/${projectLink}`, (json) => json?.data ?? null);
}

export async function ApiGetEditProjectGeneral(projectLink) {
	return apiGet(`/projectEdition/general/${projectLink}`, (json) => json?.data ?? null);
}

export async function ApiGetEditProjectMembers(projectLink) {
	return apiGet(`/projectEdition/members/${projectLink}`, (json) => json?.data?.project ?? null);
}

export async function ApiGetEditProjectRights(projectLink) {
	return apiGet(`/projectEdition/rights/${projectLink}`, (json) => json?.data ?? null);
}

export async function ApiGetEditProjectStatus(projectLink) {
	return apiGet(`/projectEdition/status/${projectLink}`, (json) => json?.data?.project ?? null);
}

export async function ApiGetEditProjectLocation(projectLink) {
	return apiGet(`/projectEdition/location/${projectLink}`, (json) => json?.data?.project ?? null);
}

export async function ApiGetEditProjectAttachments(projectLink) {
	return apiGet(`/projectEdition/attachments/${projectLink}`, (json) => json?.data ?? null);
}

export async function ApiGetEditProjectSteps(projectLink) {
	return apiGet(`/projectEdition/steps/${projectLink}`, (json) => json?.data?.project ?? null);
}

export async function ApiGetEditProjectQAs(projectLink) {
	return apiGet(`/projectEdition/QAs/${projectLink}`, (json) => json?.data?.project ?? null);
}

export async function ApiGetEditProjectDetails(projectLink) {
	return apiGet(`/projectEdition/details/${projectLink}`, (json) => json?.data?.project ?? null);
}
