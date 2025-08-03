const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import { cookies } from "next/headers";

export async function ApiGetUserFromSessionServer() {
	const cookieStore = cookies();
	const cookieHeader = cookieStore
		.getAll()
		.map(({ name, value }) => `${name}=${value}`)
		.join("; ");

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/myData`, {
			headers: {
				Cookie: cookieHeader,
			},
			cache: "no-store", // Ensure fresh data
		});

		const json = await res.json();

		if (!res.ok) {
			// Try to read backend error message if available
			const errorMessage = json?.message || "Failed to fetch user";
			throw new Error(errorMessage);
		}

		return json.data.user;
	} catch (error) {
		throw error;
	}
}

export async function ApiGetUserSettingsServer() {
	const cookieStore = cookies();
	const cookieHeader = cookieStore
		.getAll()
		.map(({ name, value }) => `${name}=${value}`)
		.join("; ");

	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/mySettings`, {
			headers: {
				Cookie: cookieHeader,
			},
			cache: "no-store", // Avoid caching to ensure fresh data
		});

		const json = await res.json();

		if (!res.ok) {
			const errorMessage = json?.message || "Failed to fetch user settings";
			throw new Error(errorMessage);
		}

		return json.data.userSettings;
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
