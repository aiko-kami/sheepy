import { IoSparklesSharp } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import ObjectiveInputField from "@/components/Forms/ObjectiveInputField/ObjectiveInputField";
import { PermissionsErrorText } from "@/components/Errors/PermissionsError";
import ERRORS from "@/lib/constants/errors";

const Motivation = ({ formInputs, setFormInputs, onChange, userPermissions }) => {
	return (
		<>
			{/* Creator motivation, project objectives and phases */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoSparklesSharp className="mr-2 text-2xl" />
				Creator motivation, objectives and project phases
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Creator motivation */}
				<div className="mb-6 xl:mb-8">
					<TextAreaField
						label="Creator motivation:"
						labelStyle="block"
						inputName="creatorMotivation"
						inputValue={formInputs.creatorMotivation}
						onChange={onChange}
						placeholder="What inspired you to start this project?..."
						maxLength={500}
						rows="4"
						required={true}
						disabled={!userPermissions.canEditCreatorMotivation}
						disabledMessage={!userPermissions.canEditCreatorMotivation && ERRORS.PROJECT_EDIT.EDIT_MOTIVATION}
					/>
				</div>

				{/* Project objectives */}
				<div className="mb-6 xl:mb-8">
					<div className={`block ${!userPermissions.canEditObjectives && "text-gray-500"}`}>Objectives:</div>
					{!userPermissions.canEditObjectives && (
						<div className="mb-2 mt-1 ml-1">
							<PermissionsErrorText message={ERRORS.PROJECT_EDIT.EDIT_OBJECTIVES} />
						</div>
					)}
					<ObjectiveInputField objectives={formInputs.projectObjectives} setFormInputs={setFormInputs} disabled={!userPermissions.canEditObjectives} />
				</div>

				{/* Project phases */}
				<div className="mb-8">
					<TextAreaField
						label="Project phases:"
						labelStyle="block"
						inputName="projectGoal"
						inputValue={formInputs.projectPhases}
						onChange={onChange}
						placeholder="Describe the different phases of your project..."
						maxLength={500}
						rows="6"
						disabled={!userPermissions.canEditPhase}
						disabledMessage={!userPermissions.canEditPhase && ERRORS.PROJECT_EDIT.EDIT_PHASES}
					/>
				</div>

				{(userPermissions.canEditCreatorMotivation || userPermissions.canEditObjectives || userPermissions.canEditPhase) && (
					<div className="flex justify-center">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "blue",
								disabled: !userPermissions.canEditCreatorMotivation && !userPermissions.canEditObjectives && !userPermissions.canEditPhase,
							}}
						>
							Save project
						</Button>
					</div>
				)}
			</div>
		</>
	);
};
export default Motivation;
