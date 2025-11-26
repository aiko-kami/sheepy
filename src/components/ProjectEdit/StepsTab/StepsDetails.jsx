import { IoExtensionPuzzle, IoAddOutline } from "react-icons/io5";

import DraggableStepsList from "@/components/ProjectEdit/StepsTab/DraggableStepsList";
import StaticStepsList from "@/components/ProjectEdit/StepsTab/StaticStepsList";
import LastUpdateBy from "@/components/ProjectEdit/LastUpdateBy";
import { Button } from "@/components/Buttons/Buttons";

const StepsDetails = ({ formInputs, onChange, addStep, userPermissions }) => {
	return (
		<>
			{/* Project steps */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoExtensionPuzzle className="mr-2 text-2xl" />
				Project steps
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{/* Project steps*/}
				<div className="mb-8">
					<LastUpdateBy updatedBy={formInputs.updatedBy} updatedAt={formInputs.updatedAt} />

					{formInputs.projectSteps && formInputs.projectSteps.length !== 0 ? (
						userPermissions.canEditSteps ? (
							<DraggableStepsList formInputs={formInputs} onChange={onChange} />
						) : (
							<StaticStepsList steps={formInputs.projectSteps} />
						)
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">Your project does not have any step yet</span>
						</p>
					)}
				</div>
				<div className="mb-8">
					<Button
						btnProps={{
							type: "button",
							btnColor: "blue",
							action: addStep,
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
						}}
					>
						Save project
					</Button>
				</div>
			</div>
		</>
	);
};

export default StepsDetails;
