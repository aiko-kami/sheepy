import { PermissionsErrorText } from "@/components/Errors/PermissionsError";

const TextAreaField = ({ label, labelStyle, inputStyle, inputName, inputValue = "", onChange, placeholder, maxLength, rows, disabled = false, disabledMessage, required = false, resize = "none" }) => {
	const resizeClass = `resize-${resize}`;

	return (
		<>
			<div className="mb-2">
				<label htmlFor={inputName} className={`${labelStyle} ${disabled && "text-gray-500"}`}>
					{label}
				</label>
				{disabled && disabledMessage && (
					<div className="mt-1 ml-1">
						<PermissionsErrorText message={disabledMessage} />
					</div>
				)}
			</div>
			<textarea
				name={inputName}
				id={inputName}
				value={inputValue}
				onChange={onChange}
				className={`block p-2 w-full text-sm bg-slate-700/70 rounded-lg border border-gray-600 placeholder-gray-400 ${resizeClass} ${inputStyle} ${
					disabled ? "text-gray-400" : "text-white hover:shadow-lg hover:border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-500"
				}`}
				placeholder={placeholder}
				maxLength={maxLength}
				rows={rows}
				required={required}
				disabled={disabled}
			></textarea>
			{}
			<div className="text-right text-sm text-gray-400 mt-0.5 mr-2">
				{inputValue.length}/{maxLength}
			</div>
		</>
	);
};

const TextAreaCommentField = ({ label, labelStyle, inputStyle, inputName, inputValue, onChange, placeholder, maxLength, rows, disabled = false, required, resize = "none" }) => {
	const resizeClass = `resize-${resize}`;

	return (
		<>
			<label htmlFor={inputName} className={`${labelStyle} ${disabled && "text-gray-500"}`}>
				{label}
			</label>
			<textarea
				name={inputName}
				id={inputName}
				value={inputValue}
				onChange={onChange}
				className={`w-full resize-none rounded-t-lg p-2 bg-gray-800 border-0 focus:ring-0 placeholder-gray-400 ${resizeClass} ${inputStyle} ${
					disabled ? "text-gray-400" : "text-white hover:shadow-lg hover:border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-500"
				}`}
				placeholder={placeholder}
				maxLength={maxLength}
				rows={rows}
				required={required}
				disabled={disabled}
			></textarea>
		</>
	);
};

export { TextAreaField, TextAreaCommentField };
