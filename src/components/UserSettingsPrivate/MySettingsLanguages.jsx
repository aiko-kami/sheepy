import { IoChatbubbleEllipses } from "react-icons/io5";
import { SelectField } from "@/components/Forms/SelectField";

const MySettingsLanguages = ({ formInputs, onChange }) => {
	const inputValues = ["English", "Français", "Español"];

	const optionsList = inputValues.map((language) => ({
		value: language,
		option: language,
	}));

	return (
		<div className="mb-12">
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoChatbubbleEllipses className="mr-2 text-2xl" />
				Languages
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-3 xl:mb-9" />
			<div className="xl:grid xl:grid-cols-5">
				<p className="mb-6 xl:col-span-2">Set your preferred languages for interacting with the platform and other users.</p>
				<div className="flex justify-center xl:col-span-3">
					<div className="w-80">
						<SelectField inputName="language" possibleValues={optionsList} inputValue={formInputs.language} label="Choose a language" onChange={onChange} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySettingsLanguages;
