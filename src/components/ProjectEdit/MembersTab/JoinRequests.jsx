import { IoArrowDownCircle } from "react-icons/io5";
import JoinRequestsTable from "@/components/Tables/ProjectEdit/JoinRequestsTable";

const RequestsTable = ({ projectId, joinProjectRequests, user, userPermissions }) => {
	return (
		<>
			{/* Join requests */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoArrowDownCircle className="mr-2 text-2xl" />
				Requests to join the project
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Join requests */}
				<div className="mb-8 flex justify-center">
					{userPermissions.canViewJoinProjectRequests ? (
						<>
							{/* requests */}
							{joinProjectRequests && joinProjectRequests.length !== 0 ? (
								<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
									<JoinRequestsTable joinProjectRequests={joinProjectRequests} projectId={projectId} userPermissions={userPermissions} />
								</div>
							) : (
								<p className=" text-xl text-center pt-10">
									<span className="italic">No requests found</span>
								</p>
							)}
						</>
					) : (
						<p className="text-center italic text-pink-700">You do not have permission to view the requests to join the project</p>
					)}
				</div>
			</div>
		</>
	);
};
export default RequestsTable;
