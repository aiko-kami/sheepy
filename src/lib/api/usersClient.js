const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function ApiGetUserFromSessionClient() {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/myData`, {
			credentials: "include",
		});
		if (!res.ok) throw new Error("Failed to fetch user");
		const json = await res.json();
		return json.data.user;
	} catch (error) {
		console.error("Error:", error.message);
		return null;
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
