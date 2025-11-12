export function normalizeCategoryData(categoryData) {
	if (!categoryData) return null;

	return {
		...categoryData,
		link: `/categories/${categoryData.link}`,
	};
}
