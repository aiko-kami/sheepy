import { IoFootsteps } from "react-icons/io5";

const StepsDetails = ({ formState, onChange }) => {
	return (
		<>
			{/* Project steps */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoFootsteps className="mr-2 text-2xl" />
				Project steps
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
			{/* Project steps */}
			<div className="mb-8 max-w-140 relative">
				{/* Steps input field */}
				Steps
			</div>
		</>
	);
};
export default StepsDetails;
