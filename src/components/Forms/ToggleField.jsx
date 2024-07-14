const ToggleField = ({ inputName, checked, label, onChange }) => {
	return (
		<label className="inline-flex items-center mb-4 cursor-pointer">
			<span>{label}</span>
			<input type="checkbox" name={inputName} checked={checked} onChange={onChange} className="sr-only peer" />
			<div className="relative w-11 h-6 ms-4 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-blue-600"></div>
		</label>
	);
};
export default ToggleField;
