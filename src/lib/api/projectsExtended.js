const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function ApiGetProjectCrush() {
	try {
		const res = await fetch(`${BASE_URL}/projectsExtended/crushProjects`, {
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
			const errorMessage = json?.message || "Failed to retrive projects";
			throw new Error(errorMessage);
		}
		return json.data.projects;
	} catch (error) {
		throw error;
	}
}
