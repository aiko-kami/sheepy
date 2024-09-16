"use client";

import { useState } from "react";

import LocationDetails from "@/components/ProjectEdit/LocationTab/LocationDetails";

const Location = ({ project }) => {
	const [formState, setFormState] = useState({
		locationOnlineOnly: project.locationOnlineOnly,
		projectLocationCity: project.locationCity,
		projectLocationCountry: project.locationCountry,
	});

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const inputValue = type === "checkbox" ? checked : value;
		setFormState((prevState) => ({
			...prevState,
			[name]: inputValue,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formState);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project location */}
				<LocationDetails formState={formState} onChange={onChange} />
			</form>
		</>
	);
};
export default Location;
