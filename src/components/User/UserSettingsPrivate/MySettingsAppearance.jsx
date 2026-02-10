"use client";

import { useState } from "react";
import Image from "next/image";
import { IoSunny } from "react-icons/io5";

import colorModeLight from "@/public/images/colorModeLight.png";
import colorModeNight from "@/public/images/colorModeNight.png";
import colorModeDark from "@/public/images/colorModeDark.png";
import colorModeUnreal from "@/public/images/colorModeUnreal.png";

import { Button } from "@/components/Buttons/Buttons";

import { ApiUpdateUserSettingsAppearance } from "@/lib/api/userClient";

import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { SUCCESS, ERRORS } from "@/lib/constants";

import { handleFormChange } from "@/utils/formHandlers";
import { useTheme } from "@/contexts";

const MySettingsAppearance = ({ appearanceSettings }) => {
	const { theme, changeTheme } = useTheme();

	const [formInputs, setFormInputs] = useState({
		appearance: appearanceSettings,
	});

	const appearanceOptions = [
		{
			label: "Light mode",
			value: "light",
			imageSrc: colorModeLight,
		},
		{
			label: "Night mode",
			value: "night",
			imageSrc: colorModeNight,
		},
		{
			label: "Unreal mode",
			value: "unreal",
			imageSrc: colorModeUnreal,
		},
		{
			label: "Dark mode",
			value: "dark",
			imageSrc: colorModeDark,
		},
	];

	const handleAppearanceChange = (value) => {
		changeTheme(value);
		setFormInputs((prevState) => ({
			...prevState,
			appearance: value,
		}));
	};

	const onChange = handleFormChange(setFormInputs);

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await ApiUpdateUserSettingsAppearance(formInputs.appearance);
			showSuccessToast(SUCCESS.USER_SETTINGS.APPEARANCE);
		} catch (error) {
			showErrorToast(error.message || ERRORS.USER_SETTINGS.APPEARANCE);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="mb-8">
					<h2 className="flex items-center text-xl mb-3 sm:ml-4">
						<IoSunny className="mr-2 text-2xl" />
						Appearance
					</h2>
					<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-3 xl:mb-9" />
					<div className="xl:grid xl:grid-cols-5">
						<p className="mb-6 xl:col-span-2">Customize the colors of the platform with several themes.</p>
						<div className="flex justify-center xl:col-span-3">
							<div className="grid grid-cols-2 xl:grid-cols-4 max-w-100 xl:max-w-4/5 gap-3 sm:gap-9">
								{appearanceOptions.map((option) => (
									<button key={option.value} type="button" className="flex flex-col rounded-lg items-center" onClick={() => handleAppearanceChange(option.value)}>
										<p className="mb-1 text-nowrap">{option.label}</p>
										<Image
											src={option.imageSrc}
											height={0}
											width={0}
											sizes="100vw"
											alt={option.value}
											className={`w-34 h-34 sm:w-40 sm:h-40 rounded-lg shadow-xl border-3 ${formInputs.appearance === option.value ? "border-green-500" : "border-gray-900"}`}
										/>
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mb-10">
					<Button btnProps={{ btnSize: "std", type: "submit", btnColor: "blue" }}>Save appearance</Button>
				</div>
			</form>
		</>
	);
};

export default MySettingsAppearance;
