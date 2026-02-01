import { IoCompassOutline } from "react-icons/io5";
import ObjectiveInputForm from "@/components/Forms/ObjectiveInputForm/ObjectiveInputForm";
import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import { ERRORS } from "@/lib/constants";

const Objectives = ({ projectId, objectives, userPermissions }) => {
	return (
		<>
			{/* Project objectives and phases */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoCompassOutline className="mr-2 text-2xl" />
				Project objectives
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				<div className="mb-8">
					{!userPermissions.canEditObjectives && (
						<div className="mb-4">
							<PermissionsErrorPane message={ERRORS.PROJECT_PERMISSIONS.EDIT_OBJECTIVES} />
						</div>
					)}
					<ObjectiveInputForm projectId={projectId} objectives={objectives} disabled={!userPermissions.canEditObjectives} />
				</div>
			</div>
		</>
	);
};
export default Objectives;
