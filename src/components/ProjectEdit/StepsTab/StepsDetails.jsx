import React from "react";
import { IoExtensionPuzzle, IoAddOutline } from "react-icons/io5";
import DraggableStepsList from "@/components/ProjectEdit/StepsTab/DraggableStepsList";
import { Button } from "@/components/Buttons/Buttons";

const StepsDetails = ({ formState, onChange, addStep }) => {
	return (
		<>
			{/* Project steps */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoExtensionPuzzle className="mr-2 text-2xl" />
				Project steps
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="pl-4">
				{/* Project steps*/}
				<div className="mb-8">
					<DraggableStepsList formState={formState} onChange={onChange} />
				</div>
				<div className="mb-6">
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
			</div>
		</>
	);
};

export default StepsDetails;
