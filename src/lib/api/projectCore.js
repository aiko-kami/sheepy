import { apiGet, apiPost, apiPatch, apiDelete, apiPatchMultipart } from "@/lib/api/ApiHelpers";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function ApiCreateProjectDraft(projectInputs) {
	try {
		const res = await fetch(`${BASE_URL}/projects/createProjectDraft`, {
			method: "post",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ projectInputs }),
		});
		const json = await res.json();
		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to create project draft";
			throw new Error(errorMessage);
		}
		return json.data;
	} catch (error) {
		throw error;
	}
}

export async function ApiUpdateProjectDraft(projectId, projectInputs) {
	try {
		const res = await fetch(`${BASE_URL}/projects/updateProjectDraft/${projectId}`, {
			method: "PATCH",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ projectInputs }),
		});
		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to update project draft";
			throw new Error(errorMessage);
		}
		return json.data.project;
	} catch (error) {
		throw error;
	}
}

export async function ApiSubmitProject(projectInputs) {
	try {
		const res = await fetch(`${BASE_URL}/projects/submitProject`, {
			method: "post",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ projectInputs }),
		});
		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to submit project";
			throw new Error(errorMessage);
		}
		return json.data.project;
	} catch (error) {
		throw error;
	}
}

export async function ApiGetProjectPublicDataById(projectId) {
	try {
		const res = await fetch(`${BASE_URL}/projects/projectPublic/id/${projectId}`, {
			method: "get",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});
		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to retrive project";
			throw new Error(errorMessage);
		}
		return json.data.project;
	} catch (error) {
		throw error;
	}
}

export async function ApiGetProjectPublicDataByLink(projectLink) {
	return apiGet(`/projects/projectPublic/link/${projectLink}`);
}

export async function ApiGetProjectPublicDataByLink2(projectLink) {
	let res = null;

	try {
		res = await fetch(`${BASE_URL}/projects/projectPublic/link/${projectLink}`, {
			method: "get",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
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
