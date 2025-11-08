"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import Location from "@/components/ProjectEdit/LocationTab/Location";

import { handleFormChange } from "@/utils/formHandlers";

const FormLocation = ({ projectId, projectLink, status, statusBgColor, onlineOnly, city, country }) => {
	const [formInputs, setFormInputs] = useState({
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
				<Location formInputs={formInputs} onChange={onChange} />
			</form>
		</>
	);
};
export default FormLocation;
