// apiHelpers.js
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import { cookies } from "next/headers";

/**
 * Build cookie header from next/headers cookies()
 */
function buildCookieHeader() {
	const cookieStore = cookies();
	return cookieStore
		.getAll()
		.map(({ name, value }) => `${name}=${value}`)
		.join("; ");
}

/**
 * Generic GET helper that:
 * - attaches cookies,
 * - does fetch with no-store,
 * - safely parses JSON (falls back to text),
 * - returns a normalized { ok, status, data, message } object.
 *
 * mapper: optional fn (json, res) => mappedData (default: json?.data ?? null)
 */
async function apiGet(path, mapper = (json, res) => json?.data ?? null) {
	const url = `${BASE_URL}${path}`;
	const cookieHeader = buildCookieHeader();

	let res = null;
	try {
		res = await fetch(url, {
			method: "GET",
			headers: {
				Cookie: cookieHeader,
			},
			cache: "no-store",
		});
	} catch (error) {
		// network / fetch error
		return {
			ok: false,
			status: 520,
			data: null,
			message: error?.message || "Network or fetch error",
		};
	}

	// parse response safely
	let json = null;
	try {
		const contentType = res.headers.get("content-type") || "";
		if (contentType.includes("application/json")) {
			json = await res.json();
		} else {
			const text = await res.text();
			json = { message: text };
		}
	} catch (parseError) {
		json = null;
	}

	// use mapper to shape the returned data
	let mapped = null;
	try {
		mapped = mapper(json, res);
	} catch (mapError) {
		// mapping error should not break caller; return null data and a message
		return {
			ok: false,
			status: res?.status ?? 520,
			data: null,
			message: mapError?.message || "Response mapping error",
		};
	}

	return {
		ok: !!res.ok,
		status: res?.status ?? 520,
		data: mapped,
		message: json?.message ?? (res.ok ? null : "Unexpected response"),
	};
}

/* === Specific wrappers === */

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
	return apiGet(`/projectEdition/rights/${projectLink}`, (json) => json?.data?.project ?? null);
}

export async function ApiGetEditProjectStatus(projectLink) {
	return apiGet(`/projectEdition/status/${projectLink}`, (json) => json?.data?.project ?? null);
}

export async function ApiGetEditProjectLocation(projectLink) {
	return apiGet(`/projectEdition/location/${projectLink}`, (json) => json?.data?.project ?? null);
}

export async function ApiGetEditProjectAttachments(projectLink) {
	return apiGet(`/projectEdition/attachments/${projectLink}`, (json) => json?.data?.project ?? null);
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
