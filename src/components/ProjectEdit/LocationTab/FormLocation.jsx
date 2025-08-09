"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import Location from "@/components/ProjectEdit/LocationTab/Location";
import SideMenu from "@/components/ProjectEdit/SideMenu";

import { handleFormChange } from "@/utils/formHandlers";

const FormLocation = ({ project }) => {
	const [formInputs, setFormInputs] = useState({
		locationOnlineOnly: project.locationOnlineOnly || false,
		projectLocationCity: project.locationCity || "",
		projectLocationCountry: project.locationCountry || "",
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
				<div className="lg:grid grid-cols-5">
					<div className="p-2 mb-6">
						{/* Project Status and links */}
						<SideMenu project={project} />
					</div>
					<div className="col-span-4 lg:px-2 lg:pl-10">
						{/* Project general information */}
						<Location formInputs={formInputs} onChange={onChange} />
						<div className="flex justify-center">
							<Button
								btnProps={{
									type: "submit",
									btnColor: "blue",
								}}
							>
								Save project
							</Button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};
export default FormLocation;
