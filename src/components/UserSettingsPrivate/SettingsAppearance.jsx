import Image from "next/image";
import { IoSunny } from "react-icons/io5";
import colorModeLight from "@/public/images/colorModeLight.png";
import colorModeNight from "@/public/images/colorModeNight.png";
import colorModeDark from "@/public/images/colorModeDark.png";
import colorModeUnreal from "@/public/images/colorModeUnreal.png";

const SettingsAppearance = ({ setFormInputs, formInputs }) => {
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
		setFormInputs((prevState) => ({
			...prevState,
			appearance: value,
		}));
	};

	return (
		<div className="mb-12">
			<h2 className="flex items-center text-xl mb-2 sm:ml-4">
				<IoSunny className="mr-2 text-2xl" />
				Appearance
			</h2>
			<p className="mb-6 sm:ml-4">Customize how your profile and project pages look to others.</p>
			<div className="grid grid-cols-2 md:grid-cols-4 max-w-100 md:max-w-190 mx-auto justify-center gap-3 sm:gap-9">
				{appearanceOptions.map((option) => (
					<button key={option.value} type="button" className="flex flex-col rounded-lg items-center" onClick={() => handleAppearanceChange(option.value)}>
						<p className="mb-1">{option.label}</p>
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
	);
};

export default SettingsAppearance;
