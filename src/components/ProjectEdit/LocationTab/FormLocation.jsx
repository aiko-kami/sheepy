"use client";

import { useState } from "react";
import Location from "@/components/ProjectEdit/LocationTab/Location";
import { handleFormChange } from "@/utils/formHandlers";

const FormLocation = ({ projectId, onlineOnly, city, country, userPermissions }) => {
	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		locationOnlineOnly: onlineOnly || false,
		projectLocationCity: city || "",
		projectLocationCountry: country || "",
	});

	const onChange = handleFormChange(setFormInputs);

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formInputs);
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
