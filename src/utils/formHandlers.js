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
