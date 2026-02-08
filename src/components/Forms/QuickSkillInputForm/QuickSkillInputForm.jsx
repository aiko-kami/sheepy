"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "@/components/Modals/Modal";
import RemoveQuickSkillModal from "@/components/Modals/UserPrivate/RemoveQuickSkillModal";
import InputField from "@/components/Forms/InputField";
import QuickSkillsList from "@/components/Forms/QuickSkillInputForm/QuickSkillsList";
import AddQuickSkillButton from "@/components/Forms/QuickSkillInputForm/AddQuickSkillButton";

import { showSuccessToast, showErrorToast } from "@/utils/toast";

import { ApiPostAddQuickSkill, ApiDeleteQuickSkill } from "@/lib/api/userServer";
import { ERRORS, SUCCESS } from "@/lib/constants";

const QuickSkillInputForm = ({ quickSkills = [], disabled = false }) => {
	const router = useRouter();

	const [quickSkillInput, setQuickSkillInput] = useState("");
	const [modalDisplayRemove, setModalDisplayRemove] = useState(false);
	const [quickSkillToRemove, setQuickSkillToRemove] = useState(null);

	const addQuickSkill = async () => {
		const quickSkill = (quickSkillInput || "").trim();

		// Basic validations with early returns
		if (!quickSkill) return showErrorToast(ERRORS.USER_QUICK_SKILLS.EMPTY_INPUT);

		// Case-insensitive duplicate check (assumes stored items have .quickSkill)
		const alreadyExists = quickSkills.some((obj) => String(obj || "").toLowerCase() === quickSkill.toLowerCase());
		if (alreadyExists) return showErrorToast(ERRORS.USER_QUICK_SKILLS.DUPLICATE_QUICK_SKILL);

		// Max limit check (max 20)
		if (quickSkills.length >= 20) {
			return showErrorToast(ERRORS.USER_QUICK_SKILLS.MAXIMUM_LIMIT);
		}

		const payload = {
			quickSkill,
		};

		const result = await ApiPostAddQuickSkill(payload);
		if (!result.ok) {
			showErrorToast(result.message || ERRORS.USER_QUICK_SKILLS.ADD_FAILED);
			return;
		}

		router.refresh();
		setQuickSkillInput("");
		showSuccessToast(SUCCESS.USER_QUICK_SKILLS.ADD);
	};

	const handleQuickSkillInputChange = (e) => {
		setQuickSkillInput(e.target.value);
	};

	const closeModalRemove = () => {
		setQuickSkillToRemove(null);
		setModalDisplayRemove(false);
	};

	const removeQuickSkill = async (quickSkill) => {
		// Basic validations with early returns
		if (!quickSkill) {
			showErrorToast(ERRORS.USER_QUICK_SKILLS.EMPTY_INPUT_REMOVE);
			return;
		}

		setQuickSkillToRemove(quickSkill);
		setModalDisplayRemove(true);
	};

	const confirmRemoveQuickSkill = async () => {
		if (!quickSkillToRemove) return;

		const payload = {
			quickSkill: quickSkillToRemove,
		};

		const result = await ApiDeleteQuickSkill(payload);
		if (!result.ok) {
			showErrorToast(result.message || ERRORS.USER_QUICK_SKILLS.REMOVE_FAILED);
			return;
		}

		router.refresh();
		setQuickSkillInput("");
		setQuickSkillToRemove(null);
		setModalDisplayRemove(false);

		showSuccessToast(SUCCESS.USER_QUICK_SKILLS.REMOVE);
	};

	return (
		<>
			{!disabled && (
				<div className="mb-8 max-w-140 relative">
					<div className="flex items-center">
						<div className="w-full mr-2 relative">
							<InputField
								inputName="skill"
								inputType="text"
								label="Add a skill"
								inputValue={quickSkillInput}
								onChange={handleQuickSkillInputChange}
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
							<AddQuickSkillButton handleAddQuickSkill={addQuickSkill} />
						</div>
					</div>
				</div>
			)}

			{/* List of quick skills */}
			<QuickSkillsList quickSkills={quickSkills} removeQuickSkill={removeQuickSkill} disabled={disabled} />

			{!disabled && (
				<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} closeModalWithBackground={closeModalRemove} modalSize={"sm"} modalTitle={"Remove skill"}>
					<RemoveQuickSkillModal quickSkill={quickSkillToRemove} onConfirm={confirmRemoveQuickSkill} closeModalRemove={closeModalRemove} />
				</Modal>
			)}
		</>
	);
};

export default QuickSkillInputForm;
