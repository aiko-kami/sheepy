import { IoPeople } from "react-icons/io5";
import MembersTable from "@/components/Tables/ProjectEdit/MembersTable";

const MembersDetails = ({ projectId, userPermissions, members }) => {
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
					{members && members.length !== 0 ? (
						<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
							<MembersTable members={members} projectId={projectId} userPermissions={userPermissions} />
						</div>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">No members found</span>
						</p>
					)}
				</div>
			</div>
		</>
	);
};
export default MembersDetails;
