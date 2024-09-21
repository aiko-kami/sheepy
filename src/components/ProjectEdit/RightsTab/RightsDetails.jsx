import { IoLockOpen } from "react-icons/io5";

const RightsDetails = ({ formState, onChange }) => {
	return (
		<>
			{/* Project rights */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoLockOpen className="mr-2 text-2xl" />
				Project rights
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="pl-4">
				{/* Project rights */}
				<div className="mb-8">
					{/* rights input field */}
					Rights
				</div>
			</div>
		</>
	);
};
export default RightsDetails;
