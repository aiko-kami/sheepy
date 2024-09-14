import { IoFitness } from "react-icons/io5";

const StatusDetails = ({ formState, onChange }) => {
	return (
		<>
			{/* Project status */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoFitness className="mr-2 text-2xl" />
				Project status
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
			{/* Project status */}
			<div className="mb-8 max-w-140 relative">
				{/* Status input field */}
				Status
			</div>
		</>
	);
};
export default StatusDetails;
