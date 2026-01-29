"use client";
import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import RemoveSkillModal from "@/components/Modals/UserPrivate/RemoveSkillModal";
import InputField from "@/components/Forms/InputField";
import SkillsList from "@/components/Forms/SkillInputForm/SkillsList";
import AddSkillButton from "@/components/Forms/SkillInputForm/AddSkillButton";

import { showSuccessToast, showErrorToast } from "@/utils/toast";

const SkillInputForm = ({ skills = [], disabled = false }) => {
	const [skillInput, setSkillInput] = useState("");
	const [modalDisplayRemove, setModalDisplayRemove] = useState(false);
	const [skillToRemove, setSkillToRemove] = useState(null);

	const addSkill = async () => {
		const skill = (skillInput || "").trim();

		// Basic validations with early returns
		if (!skill) return showErrorToast("Please enter a skill.");

		// Case-insensitive duplicate check (assumes stored items have .skill)
		const alreadyExists = skills.some((obj) => String(obj || "").toLowerCase() === skill.toLowerCase());
		if (alreadyExists) return showErrorToast("This skill is already present in the list.");

		// Max limit check (max 20)
		if (skills.length >= 20) {
			return showErrorToast("You can only add up to 20 skills.");
		}

		setSkillInput("");
	};

	const handleSkillInputChange = (e) => {
		setSkillInput(e.target.value);
	};

	const closeModalRemove = () => {
		setSkillToRemove(null);
		setModalDisplayRemove(false);
	};

	const removeSkill = async (skill) => {
		// Basic validations with early returns
		if (!skill) {
			showErrorToast("Please select a skill to remove.");
			return;
		}

		setSkillToRemove(skill);
		setModalDisplayRemove(true);
	};

	const confirmRemoveSkill = async () => {
		if (!skillToRemove) return;

		setSkillInput("");
		setSkillToRemove(null);
		setModalDisplayRemove(false);

		showSuccessToast("The skill has been removed.");
	};

	return (
		<div>
			{!disabled && (
				<div className="mb-6 max-w-140 relative">
					<div className="flex items-center">
						<div className="w-full mr-2 relative">
							<InputField
								inputName="skill"
								inputType="text"
								label="Add a skill"
								inputValue={skillInput}
								onChange={handleSkillInputChange}
								disabled={disabled}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										addSkill();
									}
								}}
							/>
						</div>

						<div className="min-w-fit">
							<AddSkillButton handleAddSkill={addSkill} />
						</div>
					</div>
				</div>
			)}

			{/* List of skills */}
			<SkillsList skills={skills} removeSkill={removeSkill} disabled={disabled} />

			{!disabled && (
				<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} closeModalWithBackground={closeModalRemove} modalSize={"sm"} modalTitle={"Remove skill"}>
					<RemoveSkillModal skill={skillToRemove} onConfirm={confirmRemoveSkill} closeModalRemove={closeModalRemove} />
				</Modal>
			)}
		</div>
	);
};

export default SkillInputForm;
