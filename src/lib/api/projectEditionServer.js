const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import { cookies } from "next/headers";

export async function ApiGetEditProjectGetLocation(projectLink) {
	const cookieStore = cookies();
	const cookieHeader = cookieStore
		.getAll()
		.map(({ name, value }) => `${name}=${value}`)
		.join("; ");

	try {
		const res = await fetch(`${BASE_URL}/projectEdition/location/${projectLink}`, {
			method: "get",
			headers: {
				Cookie: cookieHeader,
			},
			cache: "no-store",
		});

		// Parse JSON
		let json = null;
		try {
			json = await res.json();
		} catch {
			json = null;
		}

		return {
			ok: res.ok,
			status: res.status,
			data: json?.data?.project || null,
			message: json?.message || null,
		};
	} catch (error) {
		return {
			ok: false,
			status: res.status,
			data: null,
			message: error.message || "Unexpected error",
		};
	}
}

export async function ApiGetEditProjectGetStatus(projectLink) {
	const cookieStore = cookies();
	const cookieHeader = cookieStore
		.getAll()
		.map(({ name, value }) => `${name}=${value}`)
		.join("; ");

	try {
		const res = await fetch(`${BASE_URL}/projectEdition/status/${projectLink}`, {
			method: "get",
			headers: {
				Cookie: cookieHeader,
			},
			cache: "no-store",
		});

		// Parse JSON
		let json = null;
		try {
			json = await res.json();
		} catch {
			json = null;
		}

		return {
			ok: res.ok,
			status: res.status,
			data: json?.data?.project || null,
			message: json?.message || null,
		};
	} catch (error) {
		return {
			ok: false,
			status: res.status,
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
