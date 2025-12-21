// lib/api/apiHelpers.js
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Server-side cookie builder (dynamic import so module is safe to import on client).
 * Returns a Cookie header string like "name=val; name2=val2"
 */
export async function buildServerCookieHeader() {
	// dynamic import to avoid bundling next/headers for client
	const { cookies } = await import("next/headers");
	const cookieStore = cookies();
	return cookieStore
		.getAll()
		.map(({ name, value }) => `${name}=${value}`)
		.join("; ");
}

/**
 * Server-side fetch helper (use inside server components / API routes).
 * Uses next/headers cookies() if available to propagate cookies.
 */
export async function serverApiGet(path, mapper = (json) => json?.data ?? null) {
	const url = `${BASE_URL}${path}`;
	let res = null;

	// build cookie header (if any)
	let cookieHeader = "";
	try {
		cookieHeader = await buildServerCookieHeader();
	} catch (err) {
		// if we can't build cookies (shouldn't happen on server), proceed without them
		cookieHeader = "";
	}

	try {
		res = await fetch(url, {
			method: "GET",
			headers: cookieHeader ? { Cookie: cookieHeader } : undefined,
			cache: "no-store",
		});
	} catch (error) {
		return { ok: false, status: 520, data: null, message: error?.message || "Network or fetch error" };
	}

	// parse response safely
	let json = null;
	try {
		const contentType = res.headers.get("content-type") || "";
		if (contentType.includes("application/json")) json = await res.json();
		else {
			const text = await res.text();
			json = { message: text };
		}
	} catch {
		json = null;
	}

	// mapping
	let mapped = null;
	try {
		mapped = mapper(json, res);
	} catch (mapError) {
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

/**
 * Client-side fetch helpers.
 * Uses credentials: 'include' so browser cookies are sent when allowed.
 */
async function clientApiGet(path, mapper = (json) => json?.data ?? null) {
	const url = `${BASE_URL}${path}`;
	let res = null;

	try {
		res = await fetch(url, {
			method: "GET",
			credentials: "include", // include cookies when allowed by CORS / same-origin
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});
	} catch (error) {
		return { ok: false, status: 0, data: null, message: error?.message || "Network or fetch error" };
	}

	// parse safely
	let json = null;
	try {
		const contentType = res.headers.get("content-type") || "";
		if (contentType.includes("application/json")) json = await res.json();
		else {
			const text = await res.text();
			json = { message: text };
		}
	} catch {
		json = null;
	}

	// mapping
	let mapped = null;
	try {
		mapped = mapper(json, res);
	} catch (mapError) {
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

async function clientApiSend(path, method = "POST", body = null, mapper = (json) => json?.data ?? null) {
	const url = `${BASE_URL}${path}`;
	let res = null;

	try {
		res = await fetch(url, {
			method,
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: body ? JSON.stringify(body) : null,
			cache: "no-store",
		});
	} catch (error) {
		return { ok: false, status: 0, data: null, message: error?.message || "Network or fetch error" };
	}

	let json = null;
	try {
		json = await res.json();
	} catch {
		json = null;
	}

	let mapped = null;
	try {
		mapped = mapper(json, res);
	} catch (mapError) {
		return {
			ok: false,
			status: res?.status ?? 520,
			data: null,
			message: mapError?.message || "Response mapping error",
		};
	}

	return {
		ok: res.ok,
		status: res.status,
		data: mapped,
		message: json?.message ?? (res.ok ? null : "Unexpected response"),
	};
}

export async function clientApiSendMultipart(path, method = "POST", formData) {
	const url = `${BASE_URL}${path}`;

	let res;
	try {
		res = await fetch(url, {
			method,
			credentials: "include",
			body: formData,
			cache: "no-store",
		});
	} catch (error) {
		return {
			ok: false,
			status: 0,
			data: null,
			message: error?.message || "Network or fetch error",
		};
	}

	let json = null;
	try {
		json = await res.json();
	} catch {}

	return {
		ok: res.ok,
		status: res.status,
		data: json?.data ?? null,
		message: json?.message ?? (res.ok ? null : "Unexpected response"),
	};
}

/**
 * Unified wrappers. Detects runtime and delegates to server/client helper.
 * - On server (no window) uses server... (and next/headers to read cookies)
 * - On client uses client...
 */
export async function apiGet(path, mapper = (json) => json?.data ?? null) {
	if (typeof window === "undefined") {
		// server
		return serverApiGet(path, mapper);
	} else {
		// client
		return clientApiGet(path, mapper);
	}
}

export async function apiPost(path, body, mapper = (json) => json?.data ?? null) {
	if (typeof window === "undefined") {
		return serverApiSend(path, "POST", body, mapper);
	} else {
		return clientApiSend(path, "POST", body, mapper);
	}
}

export async function apiPatch(path, body, mapper = (json) => json?.data ?? null) {
	if (typeof window === "undefined") {
		return serverApiSend(path, "PATCH", body, mapper);
	} else {
		return clientApiSend(path, "PATCH", body, mapper);
	}
}

export async function apiPatchMultipart(path, body) {
	return clientApiSendMultipart(path, "PATCH", body);
}

export async function apiDelete(path, body, mapper = (json) => json?.data ?? null) {
	if (typeof window === "undefined") {
		return serverApiSend(path, "DELETE", body, mapper);
	} else {
		return clientApiSend(path, "DELETE", body, mapper);
	}
}
