import { IoChatbubbleEllipses } from "react-icons/io5";

const SettingsLanguages = ({ formInputs, onChange }) => {
	const inputValues = ["English", "Français", "Español"];

	return (
		<div className="mb-12">
			<h2 className="flex items-center text-xl mb-2 sm:ml-4">
				<IoChatbubbleEllipses className="mr-2 text-2xl" />
				Languages
			</h2>
			<p className="mb-6 sm:ml-4">Set your preferred languages for interacting with the platform and other users.</p>
			<div className="flex sm:ml-4">
				<label htmlFor="language" className="sr-only">
					Select a language:
				</label>
				<select
					id="language"
					name="language"
					value={formInputs.language}
					onChange={onChange}
					className={`block py-3 px-1 w-100 bg-transparent border-0 border-b-2 border-gray-600 focus:outline-none hover:border-gray-500 hover:shadow-lg ${
						formInputs.language === "" ? "text-gray-400" : "text-white"
					}`}
				>
					<option value="" className="bg-gray-700 text-gray-400">
						Choose a language
					</option>
					{inputValues.map((lang, index) => (
						<option key={index} className="bg-gray-700 text-gray-400" value={lang}>
							{lang}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default SettingsLanguages;
