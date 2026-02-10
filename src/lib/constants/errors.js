export const ERRORS = {
	GENERIC: {
		ERROR: "Something went wrong.",
		UNAUTHORIZED: "You do not have permission to perform this action.",
		UNKNOWN: "An unexpected error occurred. Please try again later.",
	},

	AUTHENTIFICATION: {
		USERNAME_REQUIRED: "Username is required.",
		EMAIL_REQUIRED: "Email is required.",
		PASSWORD_REQUIRED: "Password is required.",
		PASSWORD_OLD_REQUIRED: "Former password is required.",
		PASSWORD_NEW_REQUIRED: "New password is required.",
		PASSWORD_CONFIRM_REQUIRED: "Password confirmation is required.",
		IDENTIFIER_REQUIRED: "Email or username is required.",
		USERNAME_INVALID: "Username can only contain letters, numbers, underscores, and periods.",
		USERNAME_MIN_LENGTH: "Username must be at least 3 characters long.",
		USERNAME_MAX_LENGTH: "Username cannot exceed 30 characters.",
		EMAIL_INVALID: "Please enter a valid email address.",
		PASSWORD_MIN_LENGTH: "Password must be at least 8 characters long.",
		PASSWORD_MATCH: "Passwords do not match.",
		PASSWORD_NEW_MATCH: "New password and confirmation do not match.",
		PASSWORD_RESET_FAILED: "Password reset failed. Please try again later.",
		REGISTER_FAILED: "Failed to register.",
		LOGIN_FAILED: "Failed to login.",
		PASSWORD_UPDATE_FAILED: "Failed to update password.",
		EMAIL_UPDATE_FAILED: "Failed to update email.",
	},

	USER_PROFILE: {
		UPDATE_FAILED: "Failed to update user profile.",
		PICTURE_UPDATE_FAILED: "Failed to update user profile picture.",
		BACKGROUND_UPDATE_FAILED: "Failed to update user background picture.",
		EMPTY_LANGUAGE: "Please enter a language.",
		DUPLICATE_LANGUAGE: "This language is already present in the list.",
		MAXIMUM_LANGUAGES_LIMIT: "You can only add up to 8 languages.",
	},

	USER_SETTINGS: {
		APPEARANCE: "Failed to update appearance.",
		DISPLAY_MODE: "Failed to update display mode.",
		LANGUAGE: "Failed to update language.",
		NOTIFICATIONS: "Failed to update notifications.",
		PRIVACY: "Failed to update privacy settings.",
	},

	USER_TALENTS: {
		NAME_REQUIRED: "Talent name is required.",
		DESCRIPTION_REQUIRED: "Talent description is required.",
		NAME_DUPLICATE: "Duplicate talent names are not allowed.",
		MAXIMUM_TALENTS_LIMIT: "You can only add up to 10 talents.",
		DUPLICATE_CERTIFICATION: "This certification is already present in the list.",
		MAXIMUM_CERTIFICATIONS_LIMIT: "You can only add up to 20 certifications.",
		EMPTY_CERTIFICATION: "Please enter a certification.",
		EMPTY_TALENT_REMOVE: "Please select a talent to remove.",
		EMPTY_CERTIFICATION_REMOVE: "Please select a certification to remove.",
		ADD_FAILED: "Failed to add talent.",
		UPDATE_FAILED: "Failed to update user talents.",
		REMOVE_FAILED: "Failed to remove talent.",
	},

	USER_SKILLS: {
		SKILL_REQUIRED: "Please enter a skill.",
		DUPLICATE_SKILL: "This skill is already present in the list.",
		MAXIMUM_LIMIT: "You can only add up to 20 skills.",
		EMPTY_INPUT_REMOVE: "Please select a skill to remove.",
	},

	USER_QUICK_SKILLS: {
		EMPTY_INPUT: "Please enter a quick skill.",
		DUPLICATE_QUICK_SKILL: "This quick skill is already present in the list.",
		MAXIMUM_LIMIT: "You can only add up to 20 quick skills.",
		ADD_FAILED: "Failed to add quick skill.",
		EMPTY_INPUT_REMOVE: "Please select a quick skill to remove.",
		REMOVE_FAILED: "Failed to remove quick skill.",
	},

	PROJECT_PERMISSIONS: {
		EDIT_TITLE_CATEGORY: "You do not have permission to edit the project title or category.",
		EDIT_TITLE: "You do not have permission to edit the project title.",
		EDIT_CATEGORY: "You do not have permission to edit the project category.",
		EDIT_SUBCATEGORY: "You do not have permission to edit the project sub-category.",
		EDIT_INFORMATION: "You do not have permission to edit the project information.",
		EDIT_SUMMARY: "You do not have permission to edit the project summary.",
		EDIT_DESCRIPTION: "You do not have permission to edit the project description.",
		EDIT_GOAL: "You do not have permission to edit the project goal.",
		EDIT_COVER: "You do not have permission to edit the project cover.",
		EDIT_TAGS: "You do not have permission to edit the project tags.",
		EDIT_MOTIVATION: "You do not have permission to edit the creator motivation.",
		EDIT_OBJECTIVES: "You do not have permission to edit the project objectives.",
		EDIT_PHASES: "You do not have permission to edit the project phases.",
		EDIT_TALENTS_NEEDED: "You do not have permission to edit the talents needed.",
		VIEW_REQUESTS: "You do not have permission to view the requests to join the project.",
		VIEW_INVITATIONS: "You do not have permission to view the invitations to join the project.",
		EDIT_RIGHTS: "You do not have permission to edit user rights.",
		EDIT_STATUS: "You do not have permission to edit the project status.",
		EDIT_START_DATE: "You do not have permission to edit the project start date.",
		EDIT_VISIBILITY: "You do not have permission to edit the project visibility.",
		EDIT_LOCATION: "You do not have permission to edit the project location.",
		ADD_ATTACHMENTS: "You do not have permission to add attachments to the project.",
		VIEW_ATTACHMENTS: "You do not have permission to view the project attachments.",
		EDIT_STEPS: "You do not have permission to edit the project steps.",
		EDIT_QNAS: "You do not have permission to edit the project Q&As.",
		EDIT_QNAS_FAILED: "Failed to update project Q&A.",
	},

	PROJECT: {
		UPDATE_FAILED: "Failed to update project.",
		NO_STEPS: "Your project does not have any step yet.",
	},

	PROJECT_LIKE: {
		LIKE_FAILED: "Failed to like project.",
		UNLIKE_FAILED: "Failed to unlike project.",
	},

	PROJECT_TITLE_CATEGORY: {
		UPDATE_FAILED: "Failed to update project title and category.",
		TITLE_REQUIRED: "Project title is required.",
		CATEGORY_REQUIRED: "Project category is required.",
		SUBCATEGORY_REQUIRED: "Project sub-category is required.",
	},

	PROJECT_INFORMATION: {
		UPDATE_FAILED: "Failed to update project information.",
	},

	PROJECT_MEMBERS: {
		REMOVE_FAILED: "Failed to remove project member.",
		UPDATE_FAILED: "Failed to update project member.",
		CANNOT_REMOVE_OWNER: "You cannot remove the project owner.",
	},

	PROJECT_COVER: {
		REMOVE_FAILED: "Failed to remove project cover.",
		UPDATE_FAILED: "Failed to update project cover.",
	},

	PROJECT_LOCATION: {
		UPDATE_FAILED: "Failed to update project location.",
	},

	PROJECT_STATUS: {
		UPDATE_FAILED: "Failed to update project status.",
	},

	PROJECT_TAGS: {
		NO_TAGS_FOUND: "No tags found.",
		LOAD_FAILED: "Failed to load tags.",
		MAXIMUM_LIMIT: "You can only add up to 8 tags.",
		DUPLICATE_TAG: "This tag is already present in the list.",
		ADD_FAILED: "Failed to add tag.",
		EMPTY_INPUT: "Please enter a tag name.",
		EMPTY_INPUT_REMOVE: "Please select a tag to remove.",
		REMOVE_FAILED: "Failed to remove tag.",
	},

	PROJECT_RIGHTS: {
		UPDATE_FAILED: "Failed to update project rights.",
	},

	PROJECT_OBJECTIVES: {
		EMPTY_INPUT: "Please enter an objective.",
		DUPLICATE_OBJECTIVE: "This objective is already present in the list.",
		MAXIMUM_LIMIT: "You can only add up to 20 objectives.",
		ADD_FAILED: "Failed to add objective.",
		EMPTY_INPUT_REMOVE: "Please select an objective to remove.",
		REMOVE_FAILED: "Failed to remove objective.",
	},

	PROJECT_TALENTS_NEEDED: {
		EMPTY_INPUT: "Please enter a talent.",
		EMPTY_DESCRIPTION_INPUT: "Please enter a description.",
		DUPLICATE_TALENT: "This talent is already present in the list.",
		MAXIMUM_LIMIT: "You can only add up to 20 talents.",
		ADD_FAILED: "Failed to add talent needed.",
		EMPTY_INPUT_REMOVE: "Please select a talent to remove.",
		REMOVE_FAILED: "Failed to remove talent needed.",
	},

	PROJECT_STEPS: {
		UPDATE_FAILED: "Failed to update project steps.",
	},

	PROJECT_QNAS: {
		UPDATE_FAILED: "Failed to update project Q&A.",
	},

	PROJECT_CATEGORIES: {
		LOAD_FAILED: "Failed to load categories.",
	},

	NOT_FOUND: {
		USER_TITLE: "404 - User Not Found",
		USER_MESSAGE: "Sorry, we couldn’t find the user you are looking for... 😥",
		USER_SETTINGS_TITLE: "404 - User Not Found",
		USER_SETTINGS_MESSAGE: "Sorry, we couldn’t find the user you are looking for... 😥",
		PROJECTS: "Failed to retrive projects.",
		PROJECT_TITLE: "404 - Project Not Found",
		PROJECT_MESSAGE: "Sorry, we couldn’t find the project you are looking for... 😥",
		CATEGORY_TITLE: "404 - Category Not Found",
		CATEGORY_MESSAGE: "Sorry, we couldn’t find the category you are looking for... 😥",
	},

	ACCESS_DENIED: {
		UNAUTHORIZED_TITLE: "401 - Access Denied",
		UNAUTHORIZED_MESSAGE: "Sorry, you are not allowed to access this data... 😥",
	},
};

export default ERRORS;
