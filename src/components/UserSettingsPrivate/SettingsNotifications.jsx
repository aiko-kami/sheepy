import { RadioMultiField } from "@/components/Forms/ToggleField";
import { IoNotifications } from "react-icons/io5";

const SettingsNotifications = ({ formInputs, onChange }) => {
	const inputValues = ["true", "false"];
	const inputLabels = ["Yes", "No"];

	return (
		<div className="mb-12">
			<h2 className="flex items-center text-xl mb-2 sm:ml-4">
				<IoNotifications className="mr-2 text-2xl" />
				Notifications
			</h2>
			<p className="mb-6 sm:ml-4">Manage your notification preferences for updates, messages, and activity alerts.</p>
			<div className="flex justify-center">
				<div className="grid lg:grid-cols-4 gap-2 md:gap-8">
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
	);
};

export default SettingsNotifications;
