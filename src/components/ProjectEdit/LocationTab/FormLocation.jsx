"use client";

import { useState } from "react";
import Location from "@/components/ProjectEdit/LocationTab/Location";
import { handleFormChange } from "@/utils/formHandlers";

import { ApiUpdateProjectLocation } from "@/lib/api/projectEditionServer";

import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { SUCCESS, ERRORS } from "@/lib/constants";

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

		const result = await ApiUpdateProjectLocation(projectId, payload);

		if (!result.ok) {
			showErrorToast(result.message || ERRORS.PROJECT_LOCATION.UPDATE_FAILED);
			return;
		}
		showSuccessToast(SUCCESS.PROJECT_LOCATION.UPDATE);
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
