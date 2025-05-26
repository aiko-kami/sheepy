export async function getUserFromSession() {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/myData`, {
			credentials: "include",
		});

		if (!res.ok) return null;

		const json = await res.json();

		return json.data.user;
	} catch (e) {
		console.error("getUserFromSession error:", e);
		return null;
	}
}
