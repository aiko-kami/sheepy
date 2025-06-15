"use client";

import { useState } from "react";
import { IoChatbubbleEllipsesOutline, IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/Buttons/Buttons";
import { showErrorToast } from "@/utils/toast";

const UserLanguages = ({ user, formInputs, setFormInputs }) => {
	const [languageInput, setLanguageInput] = useState("");

	const addLanguage = () => {
		if (!languageInput) {
			showErrorToast("Please enter a language.");
			return;
		}
		if (formInputs.languages.includes(languageInput)) {
			showErrorToast("This language is already present in the list.");
			return;
		}
		if (formInputs.languages.length >= 8) {
			showErrorToast("You can only add up to 8 languages.");
			return;
		}

		setFormInputs((prevState) => ({
			...prevState,
			languages: [...prevState.languages, languageInput],
		}));
		setLanguageInput("");
	};

	const removeLanguage = (languageToRemove) => {
		setFormInputs((prevState) => ({
			...prevState,
			languages: prevState.languages.filter((language) => language !== languageToRemove),
		}));
	};

	const handleLanguageInputChange = (e) => {
		setLanguageInput(e.target.value);
	};

	return (
		<div className="relative">
			<div className="flex items-center mb-2">
				<div className="w-full mr-2 mb-1">
					<InputField inputName="language" inputType="text" label="Language" inputValue={languageInput} onChange={handleLanguageInputChange}>
						<IoChatbubbleEllipsesOutline className="w-5 h-5 text-gray-400" />
					</InputField>
				</div>

				<div className="min-w-fit mb-2">
					<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: addLanguage }}>
						<div className="flex">
							Add <IoAddCircleOutline className="text-xl ml-2" />
						</div>
					</Button>
				</div>
			</div>

			{/* List of languages */}
			<div className="mb-6">
				{formInputs.languages.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{formInputs.languages.map((language, index) => (
							<span key={index} className="flex items-center px-3 pt-0.5 pb-1 mt-1 bg-gray-200 text-gray-800 rounded-full">
								{language}
								<button type="button" className="ml-1 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out" onClick={() => removeLanguage(language)}>
									<IoCloseCircleOutline className="text-lg" title="Remove language" />
								</button>
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default UserLanguages;
