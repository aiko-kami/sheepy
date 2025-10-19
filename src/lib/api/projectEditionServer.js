const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import { cookies } from "next/headers";

export async function ApiGetEditProjectGetGeneral(projectLink) {
	const cookieStore = cookies();
	const cookieHeader = cookieStore
		.getAll()
		.map(({ name, value }) => `${name}=${value}`)
		.join("; ");

	let res = null;

	try {
		res = await fetch(`${BASE_URL}/projectEdition/general/${projectLink}`, {
			method: "get",
			headers: {
				Cookie: cookieHeader,
			},
			cache: "no-store",
		});
	} catch (error) {
		// Fetch failed (network error, aborted, DNS, etc.) — res is null here
		return {
			ok: false,
			status: 520, // arbitrary, "unknown error"
			data: null,
			message: error?.message || "Network or fetch error",
		};
	}

	// Parse JSON
	let json = null;

	try {
		// Vérifier le content-type peut éviter des erreurs de parsing
		const contentType = res.headers.get("content-type") || "";
		if (contentType.includes("application/json")) {
			json = await res.json();
		} else {
			// Si ce n'est pas du JSON, lire le texte (utile pour debug)
			const text = await res.text();
			json = { message: text };
		}
	} catch (parseError) {
		// JSON parse failed — on continue mais on garde res.status
		json = null;
	}

	return {
		ok: res.ok,
		status: res.status ?? 520,
		data: json?.data ?? null,
		message: json?.message ?? (res.ok ? null : "Unexpected response"),
	};
}

export async function ApiGetEditProjectGetStatus(projectLink) {
	const cookieStore = cookies();
	const cookieHeader = cookieStore
		.getAll()
		.map(({ name, value }) => `${name}=${value}`)
		.join("; ");

	let res = null;

	try {
		res = await fetch(`${BASE_URL}/projectEdition/status/${projectLink}`, {
			method: "get",
			headers: {
				Cookie: cookieHeader,
			},
			cache: "no-store",
		});

		// Parse JSON
		let json = null;
		try {
			json = await res?.json();
		} catch {
			json = null;
		}

		return {
			ok: res.ok,
			status: res?.status || 520,
			data: json?.data?.project || null,
			message: json?.message || null,
		};
	} catch (error) {
		return {
			ok: false,
			status: res?.status || 520,
			data: null,
			message: error.message || "Unexpected error",
		};
	}
}

export async function ApiGetEditProjectGetLocation(projectLink) {
	const cookieStore = cookies();
	const cookieHeader = cookieStore
		.getAll()
		.map(({ name, value }) => `${name}=${value}`)
		.join("; ");

	let res = null;

	try {
		res = await fetch(`${BASE_URL}/projectEdition/location/${projectLink}`, {
			method: "get",
			headers: {
				Cookie: cookieHeader,
			},
			cache: "no-store",
		});

		// Parse JSON
		let json = null;
		try {
			json = await res?.json();
		} catch {
			json = null;
		}

		return {
			ok: res.ok,
			status: res?.status || 520,
			data: json?.data?.project || null,
			message: json?.message || null,
		};
	} catch (error) {
		return {
			ok: false,
			status: res?.status || 520,
			data: null,
			message: error.message || "Unexpected error",
		};
	}
}

/* 

// Project creation
// createProjectDraft, updateProjectDraft, removeProjectDraft to be completed
// submitProject to be refactor a bit
projectRoute.post("/createProjectDraft", verifyAccess, projectController.createProjectDraft);
projectRoute.patch("/updateProjectDraft/:projectId", verifyAccess, projectController.updateProjectDraft);
projectRoute.delete("/removeProjectDraft/:projectId", verifyAccess, projectController.removeProjectDraft);
projectRoute.post("/submitProject", verifyAccess, projectController.submitProject);
projectRoute.post("/processProjectApproval", verifyAdminAccess, projectController.processProjectApproval);

// Project update
projectRoute.patch("/updateProject/:projectId", verifyAccess, projectController.updateProject);
projectRoute.patch("/updateProjectDraftSection/:projectId", verifyAccess, projectController.updateProjectDraftSection);

// Retrieve project data
projectRoute.get("/projectData/:projectId", verifyAccess, projectController.retrieveProjectData);
projectRoute.get("/projectOverview/:projectId", projectController.retrieveProjectOverview);
projectRoute.get("/projectPublic/:projectId", projectController.retrieveProjectPublicData);
projectRoute.get("/lastProjectsOverview", projectController.retrieveNewProjects);
projectRoute.get("/submittedProjects", verifyAdminAccess, projectController.retrieveSubmittedProjects);

// Count projects
projectRoute.get("/nbProjects", projectController.countProjects);
projectRoute.get("/nbProjectsPerCategory", projectController.countProjectsPerCategory);

 */
