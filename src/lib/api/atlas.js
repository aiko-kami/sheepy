const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function ApiAtlasPublic({ dataId }) {
	try {
		const res = await fetch(`${BASE_URL}/atlas/public/${dataId}`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const result = await res.json();

		if (!res.ok) {
			throw new Error(result.message || "Data retrieval failed");
		}

		return result.data;
	} catch (error) {
		throw error;
	}
}

export async function ApiAtlasPrivate({ dataId }) {
	try {
		const res = await fetch(`${BASE_URL}/atlas/private/${dataId}`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const result = await res.json();

		if (!res.ok) {
			throw new Error(result.message || "Data retrieval failed");
		}

		return result.data;
	} catch (error) {
		throw error;
	}
}
