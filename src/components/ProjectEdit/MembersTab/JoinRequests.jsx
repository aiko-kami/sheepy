import { IoArrowDownCircle } from "react-icons/io5";
import JoinRequestsTable from "@/components/Tables/JoinRequestsTable";

const RequestsTable = ({ project, user }) => {
	console.log("🚀 ~ RequestsTable ~ project:", project);

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
					{/* requests */}
					{project.requests && project.requests.length !== 0 ? (
						<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
							<JoinRequestsTable requests={project.requests} projectId={project.projectId} projectPermissions={project.permissions} />
						</div>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">No requests found</span>
						</p>
					)}
				</div>
			</div>
		</>
	);
};
export default RequestsTable;
