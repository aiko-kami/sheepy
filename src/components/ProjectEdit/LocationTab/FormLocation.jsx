"use client";

import { useState } from "react";
import Location from "@/components/ProjectEdit/LocationTab/Location";
import { handleFormChange } from "@/utils/formHandlers";

import { ApiPatchUpdateProjectLocation } from "@/lib/api/projectEditionServer";

import { showSuccessToast, showErrorToast } from "@/utils/toast";

const FormLocation = ({ projectId, onlineOnly, city, country, userPermissions }) => {
	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		locationOnlineOnly: onlineOnly || false,
		locationCity: city || "",
		locationCountry: country || "",
	});

	const onChange = handleFormChange(setFormInputs);

	const onSubmit = async (event) => {
		event.preventDefault();

		const payload = {
			locationOnlineOnly: formInputs.locationOnlineOnly,
			locationCity: formInputs.locationCity,
			locationCountry: formInputs.locationCountry,
		};

		const result = await ApiPatchUpdateProjectLocation(projectId, payload);

		if (!result.ok) {
			showErrorToast(result.message || "Failed to update project location.");
			return;
		}
		showSuccessToast("The project location has been updated.");
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project location information */}
				<Location formInputs={formInputs} onChange={onChange} userPermissions={userPermissions} />
			</form>
		</>
	);
};
export default FormLocation;
