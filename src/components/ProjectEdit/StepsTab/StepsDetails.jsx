import { IoExtensionPuzzle } from "react-icons/io5";
import DraggableStepsList from "@/components/ProjectEdit/StepsTab/DraggableStepsList";

const StepsDetails = ({ formState, onChange }) => {
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
					{/* steps input field */}
					<DraggableStepsList formState={formState} onChange={onChange} />
				</div>
			</div>
		</>
	);
};
export default StepsDetails;
