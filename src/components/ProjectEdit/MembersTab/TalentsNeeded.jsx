"use client";

import { useState, useRef } from "react";

import { IoPersonAdd } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import ERRORS from "@/lib/constants/errors";

import TalentInputField from "@/components/Forms/TalentNeededInputField/TalentInputField";

const TalentsNeeded = ({ projectId, user, talentsNeeded, userPermissions }) => {
	const [formInputs, setFormInputs] = useState({
		userUpdater: user.userId,
		projectId: projectId,
		talentsNeeded: talentsNeeded,
	});

	const inputRef = useRef(null); // Create a reference to the input field

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formState);
	};

	return (
		<>
			{/* Project members */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoPersonAdd className="mr-2 text-2xl" />
				Talents needed
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<form onSubmit={onSubmit}>
				<div className="md:px-4">
					{/* Project talents */}
					{!userPermissions.canEditTalentsNeeded && (
						<div className="mb-4">
							<PermissionsErrorPane message={ERRORS.PROJECT_EDIT.EDIT_TALENTS_NEEDED} />
						</div>
					)}
					<div className="w-full sm:w-100 xl:w-150 mb-8">
						<TalentInputField talentsNeeded={formInputs.talentsNeeded} setFormInputs={setFormInputs} disabled={!userPermissions.canEditTalentsNeeded} />
					</div>
					{userPermissions.canEditTalentsNeeded && (
						<div className="flex justify-center">
							<Button
								btnProps={{
									type: "submit",
									btnColor: "blue",
									disabled: !userPermissions.canEditTalentsNeeded,
								}}
							>
								Save talents
							</Button>
						</div>
					)}
				</div>
			</form>
		</>
	);
};
export default TalentsNeeded;
