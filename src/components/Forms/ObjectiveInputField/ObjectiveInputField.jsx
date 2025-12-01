"use client";
import { useState } from "react";

import InputField from "@/components/Forms/InputField";
import ObjectivesList from "@/components/Forms/ObjectiveInputField/ObjectivesList";
import AddObjectiveButton from "@/components/Forms/ObjectiveInputField/AddObjectiveButton";

import { showErrorToast } from "@/utils/toast";

const ObjectiveInputField = ({ objectives, setFormInputs, disabled = false }) => {
	const [objectiveInput, setObjectiveInput] = useState("");

	const addObjective = () => {
		const objective = (objectiveInput || "").trim();

		// Basic validations with early returns
		if (!objective) return showErrorToast("Please enter an objective");

		// Case-insensitive duplicate check (assumes stored items have .talent)
		const alreadyExists = objectives.some((obj) => String(obj || "").toLowerCase() === objective.toLowerCase());
		if (alreadyExists) return showErrorToast("This objective is already present in the list");

		// Max limit check (max 10)
		if (objectives.length >= 10) {
			return showErrorToast("You can only add up to 20 objectives");
		}

		// Add new objective
		setFormInputs((prev) => ({
			...prev,
			projectObjectives: [...(prev.projectObjectives || []), objective],
		}));

		// Reset inputs & error
		setObjectiveInput("");
	};

	const handleObjectiveInputChange = (e) => {
		setObjectiveInput(e.target.value);
	};

	const removeObjective = (objectiveToRemove) => {
		setFormInputs((prevState) => ({
			...prevState,
			projectObjectives: prevState.projectObjectives.filter((obj) => obj !== objectiveToRemove),
		}));
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
								label="Set objectives"
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

			<ObjectivesList objectives={objectives} handleRemoveObjective={removeObjective} disabled={disabled} />
		</>
	);
};

export default ObjectiveInputField;
