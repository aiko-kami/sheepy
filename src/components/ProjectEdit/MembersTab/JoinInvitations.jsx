import { IoArrowUpCircle } from "react-icons/io5";

const JoinInvitations = ({ formState, onChange }) => {
	return (
		<>
			{/* Join inviations */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoArrowUpCircle className="mr-2 text-2xl" />
				Invitations to join the project
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
			{/* Join inviations */}
			<div className="mb-8 max-w-140 relative">
				{/* Members input field */}
				Invitations
			</div>
		</>
	);
};
export default JoinInvitations;
