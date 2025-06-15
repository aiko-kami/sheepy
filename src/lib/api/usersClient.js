const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function ApiGetUserFromSessionClient() {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/myData`, {
			credentials: "include",
		});

		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to fetch user";
			throw new Error(errorMessage);
		}

		return json.data.user;
	} catch (error) {
		console.error("Error:", error.message);
		return null;
	}
}

export async function ApiUpdateUserBioDescription({ description, bio }) {
	try {
		const userNewData = {
			description,
			bio,
		};

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/updateMyBioDescription`, {
			method: "PATCH",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ userNewData }),
		});
		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to update user";
			throw new Error(errorMessage);
		}
		return;
	} catch (error) {
		throw error;
	}
}

export async function ApiUpdateUserDetails({ locationCity, locationCountry, languages, company, website }) {
	try {
		const userNewData = {
			locationCity,
			locationCountry,
			languages,
			company,
			website,
		};

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/updateMyDetails`, {
			method: "PATCH",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ userNewData }),
		});
		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to update user";
			throw new Error(errorMessage);
		}
		return;
	} catch (error) {
		throw error;
	}
}

export async function ApiUpdateUserEmail({ email }) {
	try {
		const userNewData = {
			email,
		};

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/changeMyEmail`, {
			method: "PATCH",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ userNewData }),
		});
		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to update user";
			throw new Error(errorMessage);
		}
		return;
	} catch (error) {
		throw error;
	}
}

export async function ApiValidateEmailChange(emailChangeValidationId) {
	try {
		const res = await fetch(`${BASE_URL}/users/changeMyEmail/${emailChangeValidationId}`, {
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

export async function ApiUpdateUserPassword({ oldPassword, newPassword, confirmNewPassword }) {
	try {
		const userNewData = {
			oldPassword,
			newPassword,
			confirmNewPassword,
		};

		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/changeMyPassword`, {
			method: "PATCH",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ userNewData }),
		});
		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to update user";
			throw new Error(errorMessage);
		}
		return;
	} catch (error) {
		throw error;
	}
}

/* 
// Me
usersRoute.get("/myData", verifyAccess, userController.retrieveMyUserData);
usersRoute.patch("/updateMyData", verifyAccess, userController.updateUser);
usersRoute.post("/updateMyPicture", verifyAccess, userController.updateUserPicture);

// Talents
usersRoute.post("/talent/add", verifyAccess, talentController.createTalent);
usersRoute.patch("/talent/update", verifyAccess, talentController.updateTalent);
usersRoute.delete("/talent/remove", verifyAccess, talentController.removeTalent);

// Change password
usersRoute.patch("/changePassword", verifyAccess, userController.updateUserPassword);

// New User Overview
usersRoute.get("/lastUsersOverview", userController.retrieveNewUsers);

// User overview
usersRoute.get("/userOverview/:userId", userController.retrieveUserOverview);

// User public info
usersRoute.get("/userPublic/:userId", userController.retrieveUserPublicData);
 */
