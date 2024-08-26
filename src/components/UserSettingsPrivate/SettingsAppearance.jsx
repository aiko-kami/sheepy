import { IoSunny } from "react-icons/io5";

const SettingsAppearance = ({ formInputs, onChange }) => {
	const inputValues = ["light", "dark"];
	const inputLabels = ["Light mode", "Dark mode"];

	return (
		<div className="mb-12">
			<h2 className="flex items-center text-xl mb-2 sm:ml-4">
				<IoSunny className="mr-2 text-2xl" />
				Appearance
			</h2>
			<p className="mb-6 sm:ml-4">Customize how your profile and project pages look to others.</p>
			<div className="flex sm:ml-4">
				<label htmlFor="language" className="sr-only">
					Select a color mode:
				</label>
				<select
					id="appearance"
					name="appearance"
					value={formInputs.appearance}
					onChange={onChange}
					className={`block py-3 px-1 w-100 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none hover:border-gray-500 hover:shadow-lg ${
						formInputs.appearance === "" ? "text-gray-400" : "text-white"
					}`}
				>
					<option value="" className="bg-gray-700 text-gray-400">
						Choose a color mode
					</option>
					{inputValues.map((value, index) => (
						<option key={index} className="bg-gray-700 text-gray-400" value={value}>
							{inputLabels[index]}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default SettingsAppearance;
