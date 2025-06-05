const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function ApiLogin({ identifier, password }) {
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

export async function ApiSignUp({ username, email, password, confirmPassword }) {
	try {
		const res = await fetch(`${BASE_URL}/auth/sign-up`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, email, password, confirmPassword }),
		});

		const result = await res.json();

		if (!res.ok) {
			throw new Error(result.message || "Sign-up failed");
		}

		return result;
	} catch (error) {
		throw error;
	}
}

export async function ApiValidateEmail(emailValidationId) {
	try {
		const res = await fetch(`${BASE_URL}/auth/sign-up/${emailValidationId}`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});

		const result = await res.json();

		if (!res.ok) {
			throw new Error(result.message || "Email validation failed");
		}

		return result;
	} catch (error) {
		throw error;
	}
}

export async function ApiLogout() {
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

export async function ApiForgotPassword(email) {
	try {
		const res = await fetch(`${BASE_URL}/auth/forgotPassword`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		});

		const result = await res.json();

		if (!res.ok) {
			throw new Error(result.message || "Forgot password failed");
		}

		return result.data;
	} catch (error) {
		throw error;
	}
}

export async function ApiResetPassword({ resetToken, newPassword, confirmPassword }) {
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
