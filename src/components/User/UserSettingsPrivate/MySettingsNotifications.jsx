"use client";

import { useState } from "react";
import { IoNotifications } from "react-icons/io5";

import { RadioMultiField } from "@/components/Forms/ToggleField";
import { Button } from "@/components/Buttons/Buttons";

import { ApiUpdateUserSettingsNotifications } from "@/lib/api/userClient";

import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { SUCCESS, ERRORS } from "@/lib/constants";

const MySettingsNotifications = ({ userNotificationsSettings }) => {
	const [formInputs, setFormInputs] = useState({
		notificationsNewsletter: userNotificationsSettings.notificationsNewsletter,
		notificationsProjects: userNotificationsSettings.notificationsProjects,
		notificationsMessages: userNotificationsSettings.notificationsMessages,
		notificationsComments: userNotificationsSettings.notificationsComments,
	});

	const inputValues = [true, false];
	const inputLabels = ["Yes", "No"];

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;

		let inputValue;

		if (type === "checkbox") {
			inputValue = checked;
		} else if (value === "true") {
			inputValue = true;
		} else if (value === "false") {
			inputValue = false;
		} else {
			inputValue = value;
		}

		setFormInputs((prevState) => ({
			...prevState,
			[name]: inputValue,
		}));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await ApiUpdateUserSettingsNotifications(formInputs);
			showSuccessToast(SUCCESS.USER_SETTINGS.NOTIFICATIONS);
		} catch (error) {
			showErrorToast(error.message || ERRORS.USER_SETTINGS.NOTIFICATIONS);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="mb-8">
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
									inputName="notificationsNewsletter"
									inputValues={inputValues}
									inputLabels={inputLabels}
									checkedValue={formInputs.notificationsNewsletter}
									onChange={onChange}
								/>
								<RadioMultiField
									fieldName="Projects"
									inputName="notificationsProjects"
									inputValues={inputValues}
									inputLabels={inputLabels}
									checkedValue={formInputs.notificationsProjects}
									onChange={onChange}
								/>
								<RadioMultiField
									fieldName="Messages"
									inputName="notificationsMessages"
									inputValues={inputValues}
									inputLabels={inputLabels}
									checkedValue={formInputs.notificationsMessages}
									onChange={onChange}
								/>
								<RadioMultiField
									fieldName="Comments"
									inputName="notificationsComments"
									inputValues={inputValues}
									inputLabels={inputLabels}
									checkedValue={formInputs.notificationsComments}
									onChange={onChange}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center mb-10">
					<Button btnProps={{ btnSize: "std", type: "submit", btnColor: "blue" }}>Save notifications</Button>
				</div>
			</form>
		</>
	);
};

export default MySettingsNotifications;
