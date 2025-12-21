"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "@/components/Modals/Modal";
import RemoveObjectiveModal from "@/components/Modals/ProjectEdit/RemoveObjectiveModal";
import InputField from "@/components/Forms/InputField";
import ObjectivesList from "@/components/Forms/ObjectiveInputForm/ObjectivesList";
import AddObjectiveButton from "@/components/Forms/ObjectiveInputForm/AddObjectiveButton";

import { showSuccessToast, showErrorToast } from "@/utils/toast";

import { ApiPostAddObjective, ApiPostDeleteObjective } from "@/lib/api/projectEditionServer";

const ObjectiveInputForm = ({ projectId, objectives, disabled = false }) => {
	const router = useRouter();

	const [objectiveInput, setObjectiveInput] = useState("");
	const [modalDisplayRemove, setModalDisplayRemove] = useState(false);
	const [objectiveToRemove, setObjectiveToRemove] = useState(null);

	const addObjective = async () => {
		const objective = (objectiveInput || "").trim();

		// Basic validations with early returns
		if (!objective) return showErrorToast("Please enter an objective");

		// Case-insensitive duplicate check (assumes stored items have .objective)
		const alreadyExists = objectives.some((obj) => String(obj || "").toLowerCase() === objective.toLowerCase());
		if (alreadyExists) return showErrorToast("This objective is already present in the list");

		// Max limit check (max 20)
		if (objectives.length >= 20) {
			return showErrorToast("You can only add up to 20 objectives");
		}

		const payload = {
			objective,
		};

		const result = await ApiPostAddObjective(projectId, payload);
		if (!result.ok) {
			showErrorToast(result.message || "Failed to add objective.");
			return;
		}

		router.refresh();
		setObjectiveInput("");
		showSuccessToast("The objective has been added.");
	};

	const handleObjectiveInputChange = (e) => {
		setObjectiveInput(e.target.value);
	};

	const closeModalRemove = () => {
		setObjectiveToRemove(null);
		setModalDisplayRemove(false);
	};

	const removeObjective = async (objective) => {
		// Basic validations with early returns
		if (!objective) {
			showErrorToast("Please select an objective to remove");
			return;
		}

		setObjectiveToRemove(objective);
		setModalDisplayRemove(true);
	};

	const confirmRemoveObjective = async () => {
		if (!objectiveToRemove) return;

		const payload = {
			objective: objectiveToRemove,
		};

		const result = await ApiPostDeleteObjective(projectId, payload);
		if (!result.ok) {
			showErrorToast(result.message || "Failed to remove objective.");
			return;
		}

		router.refresh();
		setObjectiveInput("");
		setObjectiveToRemove(null);
		setModalDisplayRemove(false);

		showSuccessToast("The objective has been removed.");
	};

	return (
		<>
			{!disabled && (
				<div className="mb-6 max-w-200 relative">
					<div className="flex items-center">
						<div className="w-full mr-2 relative">
							<InputField
								inputName="objective"
								inputType="text"
								label="Add an objective"
								inputValue={objectiveInput}
								onChange={handleObjectiveInputChange}
								disabled={disabled}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										addObjective();
									}
								}}
							/>
						</div>

						<div className="min-w-fit">
							<AddObjectiveButton handleAddObjective={addObjective} />
						</div>
					</div>
				</div>
			)}

			{/* List of objectives */}
			<ObjectivesList objectives={objectives} removeObjective={removeObjective} disabled={disabled} />

			{!disabled && (
				<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} closeModalWithBackground={closeModalRemove} modalSize={"sm"} modalTitle={"Remove objective"}>
					<RemoveObjectiveModal objective={objectiveToRemove} onConfirm={confirmRemoveObjective} closeModalRemove={closeModalRemove} />
				</Modal>
			)}
		</>
	);
};

export default ObjectiveInputForm;
