import Image from "next/image";
import { IoSunny } from "react-icons/io5";
import colorModeDark from "@/public/images/colorModeDark.png";
import colorModeLight from "@/public/images/colorModeLight.png";
import colorModeUnreal from "@/public/images/colorModeUnreal.png";

const SettingsAppearance = ({ setFormInputs, formInputs }) => {
	const appearanceOptions = [
		{
			label: "Light mode",
			value: "light",
			imageSrc: colorModeLight,
		},
		{
			label: "Dark mode",
			value: "dark",
			imageSrc: colorModeDark,
		},
		{
			label: "Unreal mode",
			value: "unreal",
			imageSrc: colorModeUnreal,
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
			<div className="flex sm:ml-4 justify-center gap-9">
				{appearanceOptions.map((option) => (
					<button key={option.value} type="button" className="rounded-lg" onClick={() => handleAppearanceChange(option.value)}>
						<p className="mb-1">{option.label}</p>
						<Image
							src={option.imageSrc}
							height={0}
							width={0}
							sizes="100vw"
							alt={option.value}
							className={`w-40 h-40 rounded-lg shadow-xl border-3 ${formInputs.appearance === option.value ? "border-green-500" : "border-gray-900"}`}
						/>
					</button>
				))}
			</div>
		</div>
	);
};

export default SettingsAppearance;
