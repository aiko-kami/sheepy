/**
 * Utility function to update or add a URL parameter
 * @param {string} key - The key of the parameter to add or update
 * @param {string} value - The value of the parameter to add or update
 */
const updateUrlParameters = (router, pathname, formerParams, newParams) => {
	// Convert URLSearchParams to a plain JavaScript object
	const paramsToObject = (urlSearchParams) => {
		const params = {};
		urlSearchParams.forEach((value, key) => {
			params[key] = value;
		});
		return params;
	};

	// Convert formerParams to an object
	const formerParamsObj = paramsToObject(formerParams);

	// Merge formerParams with newParams, where newParams override formerParams
	const params = { ...formerParamsObj, ...newParams };

	// Remove parameters with empty values
	Object.keys(params).forEach((key) => {
		if (params[key] === undefined || params[key] === null || params[key] === "") {
			delete params[key];
		}
	});
	const queryString = new URLSearchParams(params).toString();
	const newPath = `${pathname}?${queryString}`;
	// Update the URL with the new query object
	router.replace(newPath, { scroll: false });
};

export { updateUrlParameters };
