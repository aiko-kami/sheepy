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

	return {
		...projectData,
		owner,
		projectCount,
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

export function countComments(commentList = []) {
	let total = 0;

	const countThread = (list) => {
		list.forEach((item) => {
			total += 1; // count the current comment

			if (item.answers?.length) {
				countThread(item.answers);
			}
		});
	};

	countThread(commentList);

	return total;
}
