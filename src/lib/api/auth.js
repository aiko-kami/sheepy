const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function login({ identifier, password }) {
	try {
		const res = await fetch(`${BASE_URL}/auth/login`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ identifier, password }),
		});

		const result = await res.json();

		if (!res.ok) {
			throw new Error(result.message || "Login failed");
		}

		return result.data.user;
	} catch (error) {
		throw error;
	}
}

export async function logout() {
	try {
		const res = await fetch(`${BASE_URL}/auth/logout`, {
			method: "POST",
			credentials: "include",
		});
		if (!res.ok) throw new Error("Logout failed");
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}

export async function getUserFromSession() {
	try {
		const res = await fetch(`${BASE_URL}/users/myData`, {
			credentials: "include",
		});
		if (!res.ok) return null;
		const json = await res.json();
		return json.data.user;
	} catch (e) {
		throw error;
	}
}

export async function resetPassword({ resetToken, newPassword, confirmPassword }) {
	try {
		const res = await fetch(`${BASE_URL}/auth/forgotPassword/reset/${resetToken}`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				newPassword,
				confirmPassword,
			}),
		});

		const result = await res.json();

		if (!res.ok) {
			throw new Error(result.message || "Reset password failed");
		}

		return result.data;
	} catch (error) {
		throw error;
	}
}
