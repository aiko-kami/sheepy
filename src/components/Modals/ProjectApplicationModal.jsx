"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/Buttons/Buttons";
import TextAreaField from "@/components/Forms/TextAreaField";

const ProjectApplicationModal = ({ closeModal, talentsNeeded, roleSelected }) => {
	const [formState, setFormState] = useState({
		selectedRole: "",
		message: "",
	});

	const onSaveDraft = (event) => {
		event.preventDefault();
		closeModal();
		// Handle form save draft
		console.log("🚀 ~ onSaveDraft ~ form data:", formState);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		closeModal();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ form data:", formState);
	};

	const onChange = (event) => {
		const { name, value } = event.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	useEffect(() => {
		if (roleSelected) {
			setFormState((prevState) => ({
				...prevState,
				selectedRole: roleSelected,
			}));
		}
	}, [roleSelected]);

	return (
		<>
			{/* Modal content */}
			<div className="max-h-110 overflow-y-auto">
				<div className="px-4 md:px-10 pb-8">
					{/* Form */}
					<div>
						<form onSubmit={onSubmit}>
							{/* Role */}
							<div className="mb-6">
								<label htmlFor="role" className="block mb-2">
									Select the role you want:
								</label>
								<select
									id="role"
									name="selectedRole"
									value={formState.selectedRole}
									onChange={onChange}
									className="bg-gray-700 focus:bg-gray-600 border border-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
								>
									{talentsNeeded.map((talent, index) => (
										<option key={index} className="" value={talent.role}>
											{talent.role}
										</option>
									))}
								</select>
							</div>

							{/* Message */}
							<div className="relative z-0 mb-6 w-full">
								<TextAreaField
									label="Describe why you want to join this project:"
									labelStyle="block mb-2"
									inputName="message"
									inputValue={formState.message}
									onChange={onChange}
									placeholder="Share your motivation for joining this project and introduce yourself briefly..."
									maxLength={4000}
									rows="8"
									required={true}
								/>
							</div>

							{/* Button Send application (submit form) */}
							<div className="flex gap-8 justify-center">
								<Button btnProps={{ type: "button", btnColor: "grayBorder", action: onSaveDraft }}>Save draft</Button>
								<Button btnProps={{ type: "submit" }}>Send my application</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectApplicationModal;
