"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Button, ButtonCircle } from "@/components/Buttons/Buttons";

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
			{/* Modal window */}
			<div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7/8 md:w-full md:max-w-1/2 rounded-lg shadow bg-gray-700">
				{/* Modal title and cross button */}
				<div className="flex items-center p-3 md:p-4 rounded-t">
					<h3 className="text-2xl font-semibold text-white mx-auto my-2">You want to join this project?</h3>
					<button
						type="button"
						className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute right-3 top-3 inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
						data-modal-hide="default-modal"
						onClick={closeModal}
					>
						<svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
						</svg>
						<span className="sr-only">Close modal</span>
					</button>
				</div>

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
									<label htmlFor="description" className="block mb-2">
										Describe why you want to join this project:
									</label>
									<textarea
										name="message"
										id="message"
										className="block p-2 w-full text-sm bg-gray-700 focus:bg-gray-600 rounded-lg border border-gray-600 placeholder-gray-400"
										placeholder="Share your motivation for joining this project and introduce yourself briefly..."
										maxLength={100}
										rows="8"
										value={formState.message}
										onChange={onChange}
									></textarea>
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
			</div>
		</>
	);
};

export default ProjectApplicationModal;
