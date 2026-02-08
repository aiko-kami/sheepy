import { apiGet, apiPost, apiPatch, apiDelete } from "@/lib/api/ApiHelpers";

//GET requests

export async function ApiGetUserFromSessionServer() {
	return apiGet(`/users/myData`);
}

export async function ApiGetUserSettingsServer() {
	return apiGet(`/users/mySettings`);
}

export async function ApiGetUserProjectsServer() {
	return apiGet(`/users/myProjects`);
}

export async function ApiGetUserPublicData(userId) {
	return apiGet(`/users/userPublic/${userId}`);
}

//POST requests

export async function ApiPostAddQuickSkill(data) {
	return apiPost("/users/skill", data);
}

//PATCH requests

export async function ApiUpdateTalents(data) {
	return apiPatch("/users/talent/updateTalents", data);
}

//DELETE requests

export async function ApiDeleteQuickSkill(data) {
	return apiDelete("/users/skill", data);
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
