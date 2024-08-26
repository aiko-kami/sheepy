import { RadioMultiField } from "@/components/Forms/ToggleField";
import { IoKeyOutline, IoKey, IoKeySharp, IoNotifications, IoShieldHalf } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa6";
const SettingsPrivacy = ({ formInputs, onChange }) => {
	const inputValues = ["private", "friends", "public"];
	const inputLabels = ["Only me", "My Friends", "Everyone"];

	return (
		<div className="mb-12">
			<h2 className="flex items-center text-xl mb-2 sm:ml-4">
				<FaUserShield className="mr-2 text-2xl" />
				Privacy
			</h2>
			<p className="mb-6 sm:ml-4">
				Control who can see your personal information and project activities. Adjust these settings to determine the level of privacy you prefer for each aspect of your profile.
			</p>
			<div className="flex justify-center">
				<div className="grid lg:grid-cols-2 gap-2 md:gap-8">
					<RadioMultiField
						fieldName="Profile picture"
						inputName="privacyProfilePicture"
						inputValues={inputValues}
						inputLabels={inputLabels}
						checkedValue={formInputs.privacyProfilePicture}
						onChange={onChange}
					/>
					<RadioMultiField fieldName="Your bio" inputName="privacyBio" inputValues={inputValues} inputLabels={inputLabels} checkedValue={formInputs.privacyBio} onChange={onChange} />
					<RadioMultiField
						fieldName="Your city"
						inputName="privacyLocationCity"
						inputValues={inputValues}
						inputLabels={inputLabels}
						checkedValue={formInputs.privacyLocationCity}
						onChange={onChange}
					/>
					<RadioMultiField
						fieldName="Your country"
						inputName="privacyLocationCountry"
						inputValues={inputValues}
						inputLabels={inputLabels}
						checkedValue={formInputs.privacyLocationCountry}
						onChange={onChange}
					/>
					<RadioMultiField fieldName="Your company" inputName="privacyCompany" inputValues={inputValues} inputLabels={inputLabels} checkedValue={formInputs.privacyCompany} onChange={onChange} />
					<RadioMultiField fieldName="Your languages" inputName="privacyLanguages" inputValues={inputValues} inputLabels={inputLabels} checkedValue={formInputs.privacyLanguages} onChange={onChange} />
					<RadioMultiField fieldName="Your website" inputName="privacyWebsite" inputValues={inputValues} inputLabels={inputLabels} checkedValue={formInputs.privacyWebsite} onChange={onChange} />
					<RadioMultiField
						fieldName="Projects you like"
						inputName="privacyProjectLike"
						inputValues={inputValues}
						inputLabels={inputLabels}
						checkedValue={formInputs.privacyProjectLike}
						onChange={onChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default SettingsPrivacy;
