"use client";

import { useState } from "react";

import Image from "next/image";
import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/Buttons/Buttons";
import { IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { showErrorToast } from "@/utils/toast";
import talentNeededProfilePicture from "@/public/images/userTalentNeeded.jpg";

// Using forwardRef to pass the ref down to the input element
const TalentNeededField = ({ talentsNeeded, setFormInputs }) => {
	const [talentNeededTalentInput, setTalentNeededTalentInput] = useState("");
	const [talentNeededDescriptionInput, setTalentNeededDescriptionInput] = useState("");

	const addTalentNeeded = () => {
		const talent = (talentNeededTalentInput || "").trim();
		const description = (talentNeededDescriptionInput || "").trim();

		// Basic validations with early returns
		if (!talent) return showErrorToast("Please enter a talent.");

		if (!description) return showErrorToast("Please enter a description.");

		// Case-insensitive duplicate check (assumes stored items have .talent)
		const alreadyExists = talentsNeeded.some((t) => String(t.talent || "").toLowerCase() === talent.toLowerCase());
		if (alreadyExists) return showErrorToast("This talent is already present in the list.");

		// Max limit check (max 20)
		if (talentsNeeded.length >= 20) {
			return showErrorToast("You can only add up to 20 talents.");
		}

		// Add new talent
		setFormInputs((prev) => ({
			...prev,
			talentsNeeded: [...(prev.talentsNeeded || []), { talent, description }],
		}));

		// Reset inputs & error
		setTalentNeededTalentInput("");
		setTalentNeededDescriptionInput("");
	};

	const handleTalentNeededTalentInputChange = (e) => {
		setTalentNeededTalentInput(e.target.value);
	};

	const handleTalentNeededDescriptionInputChange = (e) => {
		setTalentNeededDescriptionInput(e.target.value);
	};

	const removeTalentNeeded = (talentToRemove) => {
		setFormInputs((prevState) => ({
			...prevState,
			talentsNeeded: prevState.talentsNeeded.filter((t) => t.talent !== talentToRemove),
		}));
	};

	return (
		<>
			<div className="relative">
				<div className="flex items-end my-6">
					<div className="w-full mr-2">
						<div className="mb-4">
							<InputField
								inputName="talentNeeded"
								inputType="text"
								label="Add a talent you're looking for"
								inputValue={talentNeededTalentInput}
								onChange={handleTalentNeededTalentInputChange}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										addTalentNeeded();
									}
								}}
							/>
						</div>
						<InputField
							inputName="talentNeeded"
							inputType="text"
							label="Add a short description"
							inputValue={talentNeededDescriptionInput}
							onChange={handleTalentNeededDescriptionInputChange}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									e.preventDefault();
									addTalentNeeded();
								}
							}}
						/>
					</div>
					<div className="min-w-fit">
						<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: addTalentNeeded }}>
							<div className="flex">
								Add talent <IoAddCircleOutline className="text-xl ml-2" />
							</div>
						</Button>
					</div>
				</div>
			</div>
			{/* List of talents needed */}
			<div className="min-h-16">
				{talentsNeeded.length > 0 && (
					<div className="flex flex-col gap-2">
						{talentsNeeded.map((talentNeeded, index) => (
							<div key={index} className="flex items-center p-2 pb-2.5 rounded-lg bg-gradient-to-r from-indigo-900 to-blue-900">
								<button title="Remove talent" type="button" className="text-gray-300 mr-8 hover:text-white transition duration-150 ease-in-out" onClick={() => removeTalentNeeded(talentNeeded.talent)}>
									<IoCloseCircleOutline className="text-2xl" />
								</button>
								<span className="flex items-center">
									<Image src={talentNeededProfilePicture} className="object-cover rounded-full w-10 h-10 mr-3" alt="talent profile picture" height={0} width={0} sizes="100vw" />
									<div className="flex flex-col">
										<span className="font-semibold">{talentNeeded.talent}</span>
										<p className="text-sm">{talentNeeded.description}</p>
									</div>
								</span>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default TalentNeededField;
