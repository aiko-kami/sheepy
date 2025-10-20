export function normalizeProjectData(projectData) {
	if (!projectData) return null;

	// Find the member with role "owner"
	const ownerMember = projectData.members?.find((m) => m.role === "owner");

	const owner = ownerMember
		? {
				userId: ownerMember.user?.userId || null,
				username: ownerMember.user?.username || null,
				profilePicture: ownerMember.user?.profilePicture?.link || null,
		  }
		: null;

	const stepsList = projectData.steps && Array.isArray(projectData.steps.stepsList) ? projectData.steps.stepsList : [];
	const stepsCount = stepsList.length;

	const qasList = projectData.QAs && Array.isArray(projectData.QAs.QAsList) ? projectData.QAs.QAsList : [];
	const qnasCount = qasList.length;

	const projectCount = { stepsCount, qnasCount };

	const talentProfilePicture = "https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg";

	return {
		...projectData,
		owner,
		projectCount,
		talentProfilePicture,
		category: {
			...projectData.category,
			link: `/categories/${projectData.category.link}`,
		},
	};
}

export function normalizeCategoryLink(category) {
	if (!category) return null;

	const categoryLink = `/categories/${category.link}`;

	return categoryLink;
}
