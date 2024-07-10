const TextAreaField = ({ label, labelStyle, inputName, inputValue, onChange, placeholder, maxLength, rows, required }) => {
	return (
		<>
			<label htmlFor={label} className={labelStyle}>
				{label}
			</label>
			<textarea
				name={inputName}
				id={inputName}
				value={inputValue}
				onChange={onChange}
				className="block p-2 w-full text-sm bg-gray-700 rounded-lg border border-gray-600 placeholder-gray-400"
				placeholder={placeholder}
				maxLength={maxLength}
				rows={rows}
				required={required}
			></textarea>
		</>
	);
};
export default TextAreaField;
