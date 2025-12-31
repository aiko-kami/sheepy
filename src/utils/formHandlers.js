export function handleFormChange(setFormInputs) {
	return function (e) {
		const { name, value, type, checked } = e.target;
		const inputValue = type === "checkbox" ? checked : value;

		setFormInputs((prevState) => ({
			...prevState,
			[name]: inputValue,
		}));
	};
}

export function filterPermissions(permissions, allowedRights) {
	return allowedRights.reduce((acc, right) => {
		if (right in permissions) {
			acc[right] = permissions[right];
		}
		return acc;
	}, {});
}
