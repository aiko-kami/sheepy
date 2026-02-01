"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "@/components/Modals/Modal";
import RemoveTalentNeededModal from "@/components/Modals/ProjectEdit/RemoveTalentNeededModal";
import InputField from "@/components/Forms/InputField";
import TalentsList from "@/components/Forms/TalentNeededInputField/TalentsList";
import AddTalentButton from "@/components/Forms/TalentNeededInputField/AddTalentButton";

import { showSuccessToast, showErrorToast } from "@/utils/toast";

import { ApiPostAddTalentNeeded, ApiDeleteTalentNeeded } from "@/lib/api/projectEditionServer";
import { SUCCESS, ERRORS } from "@/lib/constants";

const TalentInputForm = ({ projectId, talentsNeeded, disabled = false }) => {
	const router = useRouter();

	const [talentNeededTalentInput, setTalentNeededTalentInput] = useState("");
	const [talentNeededDescriptionInput, setTalentNeededDescriptionInput] = useState("");
	const [modalDisplayRemove, setModalDisplayRemove] = useState(false);
	const [talentToRemove, setTalentToRemove] = useState(null);

	const addTalentNeeded = async () => {
		const talent = (talentNeededTalentInput || "").trim();
		const description = (talentNeededDescriptionInput || "").trim();

		// Basic validations with early returns
		if (!talent) return showErrorToast(ERRORS.PROJECT_TALENTS_NEEDED.EMPTY_INPUT);
		if (!description) return showErrorToast(ERRORS.PROJECT_TALENTS_NEEDED.EMPTY_DESCRIPTION_INPUT);

		// Case-insensitive duplicate check (assumes stored items have .talent)
		const alreadyExists = talentsNeeded.some((t) => String(t.talent || "").toLowerCase() === talent.toLowerCase());
		if (alreadyExists) return showErrorToast(ERRORS.PROJECT_TALENTS_NEEDED.DUPLICATE_TALENT);

		// Max limit check (max 20)
		if (talentsNeeded.length >= 20) {
			return showErrorToast(ERRORS.PROJECT_TALENTS_NEEDED.MAXIMUM_LIMIT);
		}

		const payload = {
			talent,
			description,
		};

		const result = await ApiPostAddTalentNeeded(projectId, payload);
		if (!result.ok) {
			showErrorToast(result.message || ERRORS.PROJECT_TALENTS_NEEDED.ADD_FAILED);
			return;
		}

		router.refresh();
		setTalentNeededTalentInput("");
		setTalentNeededDescriptionInput("");
		showSuccessToast(SUCCESS.PROJECT_TALENTS_NEEDED.ADD);
	};

	const handleTalentNeededTalentInputChange = (e) => {
		setTalentNeededTalentInput(e.target.value);
	};

	const handleTalentNeededDescriptionInputChange = (e) => {
		setTalentNeededDescriptionInput(e.target.value);
	};

	const closeModalRemove = () => {
		setTalentToRemove(null);
		setModalDisplayRemove(false);
	};

	const removeTalentNeeded = async (talent) => {
		// Basic validations with early returns
		if (!talent) {
			showErrorToast(ERRORS.PROJECT_TALENTS_NEEDED.EMPTY_INPUT_REMOVE);
			return;
		}

		setTalentToRemove(talent);
		setModalDisplayRemove(true);
	};

	const confirmRemoveTalentNeeded = async () => {
		if (!talentToRemove) return;

		const payload = {
			talent: talentToRemove.talent,
		};

		const result = await ApiDeleteTalentNeeded(projectId, payload);
		if (!result.ok) {
			showErrorToast(result.message || ERRORS.PROJECT_TALENTS_NEEDED.REMOVE_FAILED);
			return;
		}

		router.refresh();
		setTalentNeededTalentInput("");
		setTalentNeededDescriptionInput("");
		setTalentToRemove(null);
		setModalDisplayRemove(false);

		showSuccessToast(SUCCESS.PROJECT_TALENTS_NEEDED.REMOVE);
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

			{!disabled && (
				<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} closeModalWithBackground={closeModalRemove} modalSize={"sm"} modalTitle={"Remove talent needed"}>
					<RemoveTalentNeededModal talentNeeded={talentToRemove} onConfirm={confirmRemoveTalentNeeded} closeModalRemove={closeModalRemove} />
				</Modal>
			)}
		</>
	);
};

export default TalentInputForm;
