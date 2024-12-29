"use client";

import { useState } from "react";

import Attachments from "@/components/ProjectEdit/AttachmentsTab/Attachments";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormAttachments = ({ project }) => {
	const [formState, setFormState] = useState({
		newAttachments: [],
	});

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formState);
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
						{/* Project Attachments information */}
						<Attachments setFormState={setFormState} attachments={project.attachments} />
					</div>
				</div>
			</form>
		</>
	);
};
export default FormAttachments;
