import { IoChatbubbleEllipses } from "react-icons/io5";
import { SelectField } from "@/components/Forms/SelectField";

const SettingsLanguages = ({ formInputs, onChange }) => {
	const inputValues = ["English", "Français", "Español"];

	const optionsList = inputValues.map((language) => ({
		value: language,
		option: language,
	}));

	return (
		<div className="mb-12">
			<h2 className="flex items-center text-xl mb-2 sm:ml-4">
				<IoChatbubbleEllipses className="mr-2 text-2xl" />
				Languages
			</h2>
			<p className="mb-6 sm:ml-4">Set your preferred languages for interacting with the platform and other users.</p>
			<div className="flex sm:ml-4 w-80">
				<SelectField inputName="language" possibleValues={optionsList} inputValue={formInputs.language} label="Choose a language" onChange={onChange} />
			</div>
		</div>
	);
};

export default SettingsLanguages;
