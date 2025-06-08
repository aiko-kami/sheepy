import React from "react";

// Using forwardRef to pass the ref down to the input element
const InputField = React.forwardRef(({ inputName, inputType, inputValue, onChange, disabled = false, label, children }, ref) => {
	return (
		<div className="relative z-0 w-full">
			{/* icon on the left of the field */}
			<div className="flex absolute inset-y-6 -left-11 items-center pl-3 pointer-events-none">{children}</div>
			<input
				ref={ref} // Forward the ref to the input element
				name={inputName}
				id={inputName}
				type={inputType}
				value={inputValue}
				onChange={onChange}
				className={`block pt-2.5 pb-2 px-0 w-full bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer ${
					disabled ? "text-gray-500 line-through" : "text-white hover:shadow-lg hover:border-gray-500"
				}`}
				placeholder=" "
				disabled={disabled}
			/>
			<label
				htmlFor={inputName}
				className={`peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-2.5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
					disabled ? "text-gray-600 line-through" : "text-gray-400"
				}`}
			>
				{label}
			</label>
		</div>
	);
});

export default InputField;
