import { IoPeople } from "react-icons/io5";

const MembersDetails = ({ formState, onChange }) => {
	return (
		<>
			{/* Project members */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoPeople className="mr-2 text-2xl" />
				Project members
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
			{/* Project members */}
			<div className="mb-8 max-w-140 relative">
				{/* Members input field */}
				Members
			</div>
		</>
	);
};
export default MembersDetails;
