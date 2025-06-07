const TextAreaField = ({ label, labelStyle, inputStyle, inputName, inputValue, onChange, placeholder, maxLength, rows, required, resize = "none" }) => {
	const resizeClass = `resize-${resize}`;

	return (
		<>
			<label htmlFor={inputName} className={labelStyle}>
				{label}
			</label>
			<textarea
				name={inputName}
				id={inputName}
				value={inputValue}
				onChange={onChange}
				className={`block p-2 w-full text-sm bg-gray-700 rounded-lg border border-gray-600 placeholder-gray-400 ${resizeClass} ${inputStyle}`}
				placeholder={placeholder}
				maxLength={maxLength}
				rows={rows}
				required={required}
			></textarea>
		</>
	);
};

const TextAreaCommentField = ({ label, labelStyle, inputStyle, inputName, inputValue, onChange, placeholder, maxLength, rows, required, resize = "none" }) => {
	const resizeClass = `resize-${resize}`;

	return (
		<>
			<label htmlFor={inputName} className={labelStyle}>
				{label}
			</label>
			<textarea
				name={inputName}
				id={inputName}
				value={inputValue}
				onChange={onChange}
				className={`w-full resize-none rounded-t-lg p-2 bg-gray-800 border-0 focus:ring-0 placeholder-gray-400 ${resizeClass} ${inputStyle}`}
				placeholder={placeholder}
				maxLength={maxLength}
				rows={rows}
				required={required}
			></textarea>
		</>
	);
};

export { TextAreaField, TextAreaCommentField };
