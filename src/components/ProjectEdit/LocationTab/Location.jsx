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
		closeModalReport();
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project location */}
				<div className="mb-8 lg:mb-12">
					<LocationDetails formState={formState} onChange={onChange} />
				</div>
			</form>
		</>
	);
};
export default Location;
