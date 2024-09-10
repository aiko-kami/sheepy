const ToggleField = ({ inputName, checked, label, onChange }) => {
	return (
		<label className="flex items-center cursor-pointer">
			<span>{label}</span>
			<input type="checkbox" name={inputName} checked={checked} onChange={onChange} className="sr-only peer" />
			<div className="relative w-11 h-6 ms-4 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-blue-600 hover:shadow-xl"></div>
		</label>
	);
};

const ToggleFieldAligned = ({ inputName, checked, label, onChange }) => {
	return (
		<label className="flex items-center justify-between cursor-pointer">
			<span>{label}</span>
			<input type="checkbox" name={inputName} checked={checked} onChange={onChange} className="sr-only peer" />
			<div className="relative w-11 h-6 ms-4 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-blue-600 hover:shadow-xl"></div>
		</label>
	);
};

const RadioMultiField = ({ fieldName, inputName, inputValues, inputLabels, checkedValue, onChange }) => {
	return (
		<div>
			<div className="whitespace-nowrap mb-3">{fieldName}</div>
			<ul className="flex items-center whitespace-nowrap border rounded-lg bg-gray-600 border-gray-500">
				{inputValues.map((value, index) => (
					<li key={value} className="w-full border-gray-200">
						<label className="flex items-center cursor-pointer w-full px-2 xl:px-4">
							<input type="radio" value={value} name={inputName} onChange={onChange} checked={checkedValue === value} className="w-4 h-4 cursor-pointer" />
							<span className="w-full py-3 ms-2 text-sm">{inputLabels[index]}</span>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};

export { ToggleField, ToggleFieldAligned, RadioMultiField };
