"use client";

import { useState } from "react";
import { FaUserShield } from "react-icons/fa6";

import UserPrivacyTable from "@/components/Tables/UserPrivacyTable";
import { Button } from "@/components/Buttons/Buttons";

import { ApiUpdateUserSettingsPrivacy } from "@/lib/api/usersClient";

import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { handleFormChange } from "@/utils/formHandlers";

const MySettingsPrivacy = ({ userPrivacySettings }) => {
	const [formInputs, setFormInputs] = useState({
		privacyProfilePicture: userPrivacySettings.privacyProfilePicture,
		privacyBackgroundPicture: userPrivacySettings.privacyBackgroundPicture,
		privacyBio: userPrivacySettings.privacyBio,
		privacyLocationCity: userPrivacySettings.privacyLocationCity,
		privacyLocationCountry: userPrivacySettings.privacyLocationCountry,
		privacyCompany: userPrivacySettings.privacyCompany,
		privacyLanguages: userPrivacySettings.privacyLanguages,
		privacyWebsite: userPrivacySettings.privacyWebsite,
		privacyProjectLike: userPrivacySettings.privacyProjectLike,
	});

	const onChange = handleFormChange(setFormInputs);

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await ApiUpdateUserSettingsPrivacy(formInputs);
			showSuccessToast("Privacy settings successfully updated!");
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="mb-8">
					<h2 className="flex items-center text-xl mb-3 sm:ml-4">
						<FaUserShield className="mr-2 text-2xl" />
						Privacy
					</h2>
					<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-3 xl:mb-9" />
					<div className="xl:grid xl:grid-cols-5">
						<p className="mb-6 xl:col-span-2">
							Control who can see your personal information and project activities. Adjust these settings to determine the level of privacy you prefer for each aspect of your profile.
						</p>
						<div className="flex justify-center xl:col-span-3">
							<div className="sm:w-3/5 xl:w-4/5">
								<UserPrivacyTable formInputs={formInputs} onChange={onChange} />
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mb-10">
					<Button btnProps={{ btnSize: "std", type: "submit", btnColor: "blue" }}>Save privacy settings</Button>
				</div>
			</form>
		</>
	);
};

export default MySettingsPrivacy;
