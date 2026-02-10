"use client";

import { useState } from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";

import { SelectField } from "@/components/Forms/SelectField";
import { Button } from "@/components/Buttons/Buttons";

import { ApiUpdateUserSettingsLanguage } from "@/lib/api/userClient";

import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { handleFormChange } from "@/utils/formHandlers";
import { SUCCESS, ERRORS } from "@/lib/constants";

const MySettingsLanguages = ({ languageSettings }) => {
	const [formInputs, setFormInputs] = useState({
		language: languageSettings,
	});

	const inputValues = ["English", "Français", "Español"];

	const optionsList = inputValues.map((language) => ({
		value: language,
		option: language,
	}));

	const onChange = handleFormChange(setFormInputs);

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await ApiUpdateUserSettingsLanguage(formInputs.language);
			showSuccessToast(SUCCESS.USER_SETTINGS.LANGUAGE);
		} catch (error) {
			showErrorToast(error.message || ERRORS.USER_SETTINGS.LANGUAGE);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="mb-8">
					<h2 className="flex items-center text-xl mb-3 sm:ml-4">
						<IoChatbubbleEllipses className="mr-2 text-2xl" />
						Languages
					</h2>
					<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-3 xl:mb-9" />
					<div className="xl:grid xl:grid-cols-5">
						<p className="mb-6 xl:col-span-2">Set your preferred languages for interacting with the platform and other users.</p>
						<div className="flex justify-center xl:col-span-3">
							<div className="w-80">
								<SelectField inputName="language" possibleValues={optionsList} inputValue={formInputs.language} onChange={onChange} />
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mb-10">
					<Button btnProps={{ btnSize: "std", type: "submit", btnColor: "blue" }}>Save language</Button>
				</div>
			</form>
		</>
	);
};

export default MySettingsLanguages;
