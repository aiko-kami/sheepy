"use client";
import { useState } from "react";

import InputField from "@/components/Forms/InputField";
import TalentsList from "@/components/Forms/TalentNeededInputField/TalentsList";
import AddTalentButton from "@/components/Forms/TalentNeededInputField/AddTalentButton";

import { showErrorToast } from "@/utils/toast";

const TagInputField = ({ talentsNeeded, setFormInputs, disabled = false }) => {
	const [talentNeededTalentInput, setTalentNeededTalentInput] = useState("");
	const [talentNeededDescriptionInput, setTalentNeededDescriptionInput] = useState("");

	const addTalentNeeded = () => {
		const talent = (talentNeededTalentInput || "").trim();
		const description = (talentNeededDescriptionInput || "").trim();

		// Basic validations with early returns
		if (!talent) return showErrorToast("Please enter a talent");

		if (!description) return showErrorToast("Please enter a description");

		// Case-insensitive duplicate check (assumes stored items have .talent)
		const alreadyExists = talentsNeeded.some((t) => String(t.talent || "").toLowerCase() === talent.toLowerCase());
		if (alreadyExists) return showErrorToast("This talent is already present in the list");

		// Max limit check (max 20)
		if (talentsNeeded.length >= 20) {
			return showErrorToast("You can only add up to 20 talents");
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
			{!disabled && (
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
									disabled={disabled}
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
								disabled={disabled}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										addTalentNeeded();
									}
								}}
							/>
						</div>
						<div className="min-w-fit">
							<AddTalentButton handleAddTalent={addTalentNeeded} />
						</div>
					</div>
				</div>
			)}

			{/* List of talents needed */}
			<div className="min-h-16">
				<TalentsList talentsNeeded={talentsNeeded} removeTalentNeeded={removeTalentNeeded} disabled={disabled} />
			</div>
		</>
	);
};

export default TagInputField;
