import MembersTable from "@/components/Tables/MembersTable";
import { IoPeople } from "react-icons/io5";

const MembersDetails = ({ formState, onChange, members }) => {
	return (
		<>
			{/* Project members */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoPeople className="mr-2 text-2xl" />
				Project members
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Project members */}
				<div className="mb-8 flex justify-center">
					{/* Status history table */}
					{members && (
						<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
							<MembersTable members={members} />
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default MembersDetails;
