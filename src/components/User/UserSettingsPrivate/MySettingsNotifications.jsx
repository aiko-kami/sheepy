import { RadioMultiField } from "@/components/Forms/ToggleField";
import { IoNotifications } from "react-icons/io5";

const MySettingsNotifications = ({ formInputs, onChange }) => {
	const inputValues = ["true", "false"];
	const inputLabels = ["Yes", "No"];

	return (
		<div className="mb-18">
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoNotifications className="mr-2 text-2xl" />
				Notifications
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-3 xl:mb-9" />
			<div className="xl:grid xl:grid-cols-5">
				<p className="mb-6 xl:col-span-2">Manage your email notification preferences for updates, messages, and activity alerts.</p>
				<div className="flex justify-center xl:col-span-3">
					<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-6 md:gap-8">
						<RadioMultiField
							fieldName="Newsletter"
							inputName="notificationNewsletter"
							inputValues={inputValues}
							inputLabels={inputLabels}
							checkedValue={formInputs.notificationNewsletter}
							onChange={onChange}
						/>
						<RadioMultiField
							fieldName="Projects"
							inputName="notificationProjects"
							inputValues={inputValues}
							inputLabels={inputLabels}
							checkedValue={formInputs.notificationProjects}
							onChange={onChange}
						/>
						<RadioMultiField
							fieldName="Messages"
							inputName="notificationMessages"
							inputValues={inputValues}
							inputLabels={inputLabels}
							checkedValue={formInputs.notificationMessages}
							onChange={onChange}
						/>
						<RadioMultiField
							fieldName="Comments"
							inputName="notificationComments"
							inputValues={inputValues}
							inputLabels={inputLabels}
							checkedValue={formInputs.notificationComments}
							onChange={onChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySettingsNotifications;
