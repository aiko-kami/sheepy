import { IoSparklesSharp } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import ObjectiveInputField from "@/components/Forms/ObjectiveInputField/ObjectiveInputField";
import { PermissionsErrorText } from "@/components/Errors/PermissionsError";
import ERRORS from "@/lib/constants/errors";

const Objectives = ({ formInputs, setFormInputs, onChange, userPermissions }) => {
	return (
		<>
			{/* Project objectives and phases */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoSparklesSharp className="mr-2 text-2xl" />
				Project objectives and phases
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Project objectives */}
				<div className="mb-8">
					<div className={`block ${!userPermissions.canEditObjectives && "text-gray-500"}`}>Objectives:</div>
					{!userPermissions.canEditObjectives && (
						<div className="mb-2 mt-1 ml-1">
							<PermissionsErrorText message={ERRORS.PROJECT_EDIT.EDIT_OBJECTIVES} />
						</div>
					)}
					<ObjectiveInputField objectives={formInputs.projectObjectives} setFormInputs={setFormInputs} disabled={!userPermissions.canEditObjectives} />
				</div>
			</div>
		</>
	);
};
export default Objectives;
