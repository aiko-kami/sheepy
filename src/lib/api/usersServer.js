import { apiGet } from "@/lib/api/ApiHelpers";

export async function ApiGetUserFromSessionServer() {
	return apiGet(`/users/myData`, (json) => json?.data?.user ?? null);
}

export async function ApiGetUserSettingsServer() {
	return apiGet(`/users/mySettings`, (json) => json?.data?.userSettings ?? null);
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
