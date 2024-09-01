import UserPrivacyTable from "@/components/Tables/UserPrivacyTable";
import { FaUserShield } from "react-icons/fa6";

const MySettingsPrivacy = ({ formInputs, onChange }) => {
	return (
		<div className="mb-12">
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
	);
};

export default MySettingsPrivacy;
