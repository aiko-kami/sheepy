export async function ApiGetAllCategories() {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cat/categories`, {
			method: "GET",
			cache: "no-store",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to fetch categories";
			throw new Error(errorMessage);
		}

		return json.data.categories;
	} catch (error) {
		throw error;
	}
}

export async function ApiGetCategoryWithId(categoryId) {
	if (!categoryId) {
		console.warn("⚠️ No categoryId provided.");
		return null;
	}

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cat/category/id/${categoryId}`, {
			method: "GET",
			cache: "no-store",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to fetch category";
			throw new Error(errorMessage);
		}

		return json.data.category;
	} catch (error) {
		throw error;
	}
}

export async function ApiGetCategoryWithLink(categoryLink) {
	if (!categoryLink) {
		console.warn("⚠️ No categoryLink provided.");
		return null;
	}

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cat/category/link/${categoryLink}`, {
			method: "GET",
			cache: "no-store",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to fetch category";
			throw new Error(errorMessage);
		}

		return json.data.category;
	} catch (error) {
		throw error;
	}
}
