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

	return {
		...projectData,
		owner,
	};
}
