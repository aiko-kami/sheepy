const SelectField = ({ inputName, possibleValues, inputValue, label, onChange, disabled = false }) => {
	return (
		<>
			<label htmlFor={inputName} className="sr-only">
				{label}
			</label>
			<select
				id={inputName}
				name={inputName}
				value={inputValue}
				onChange={onChange}
				disabled={disabled}
				className={`block py-3 px-1 w-full bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none hover:border-gray-500 hover:shadow-lg ${
					inputValue === "" ? "text-gray-400" : "text-white"
				}`}
			>
				<option value="" className="bg-gray-700 text-gray-400 italic">
					{label}
				</option>
				{possibleValues.map((element, index) => (
					<option key={index} className="bg-gray-700 text-gray-300" value={element.value}>
						{element.option}
					</option>
				))}
			</select>
		</>
	);
};

const SelectRoundedField = ({ inputName, possibleValues, inputValue, label, onChange, disabled = false }) => {
	return (
		<>
			<label htmlFor={inputName} className="block mb-2">
				{label}
			</label>
			<select
				id={inputName}
				name={inputName}
				value={inputValue}
				onChange={onChange}
				disabled={disabled}
				className={`bg-gray-700 focus:bg-gray-600 border border-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
					inputValue === "" ? "text-gray-400" : "text-white"
				}`}
			>
				<option value="" className="bg-gray-700 text-gray-400">
					...
				</option>
				{possibleValues.map((element, index) => (
					<option key={index} className="bg-gray-700 text-gray-400" value={element.value}>
						{element.option}
					</option>
				))}
			</select>
		</>
	);
};

export { SelectField, SelectRoundedField };
