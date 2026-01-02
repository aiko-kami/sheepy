import { IoExtensionPuzzle, IoAddOutline } from "react-icons/io5";

import DraggableStepsList from "@/components/ProjectEdit/StepsTab/DraggableStepsList";
import StaticStepsList from "@/components/ProjectEdit/StepsTab/StaticStepsList";
import LastUpdateBy from "@/components/ProjectEdit/LastUpdateBy";
import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import { Button } from "@/components/Buttons/Buttons";
import ERRORS from "@/lib/constants/errors";

const StepsDetails = ({ formInputs, onChange, addStep, statusesList, userPermissions }) => {
	return (
		<>
			{/* Project steps */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoExtensionPuzzle className="mr-2 text-2xl" />
				Project steps
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Project steps*/}
				<div className="mb-6">
					{!userPermissions.canEditSteps && (
						<div className="mb-4">
							<PermissionsErrorPane message={ERRORS.PROJECT_EDIT.EDIT_STEPS} />
						</div>
					)}
					{formInputs.projectSteps && formInputs.projectSteps.length !== 0 ? (
						<>
							{userPermissions.canEditSteps ? <DraggableStepsList formInputs={formInputs} statusesList={statusesList} onChange={onChange} /> : <StaticStepsList steps={formInputs.projectSteps} />}
							<LastUpdateBy updatedBy={formInputs.updatedBy} updatedAt={formInputs.updatedAt} />
						</>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">Your project does not have any step yet</span>
						</p>
					)}
				</div>
				{userPermissions.canEditSteps && (
					<>
						<div className="mb-8">
							<Button
								btnProps={{
									type: "button",
									btnColor: "blue",
									action: addStep,
									disabled: !userPermissions.canEditSteps,
								}}
							>
								<div className="flex items-center">
									New step <IoAddOutline className="text-2xl ml-2 mt-0.5" />
								</div>
							</Button>
						</div>
						<div className="flex justify-center">
							<Button
								btnProps={{
									type: "submit",
									btnColor: "blue",
									disabled: !userPermissions.canEditSteps,
								}}
							>
								Save project
							</Button>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default StepsDetails;
