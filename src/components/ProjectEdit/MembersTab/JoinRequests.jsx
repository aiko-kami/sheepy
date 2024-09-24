import { IoArrowDownCircle } from "react-icons/io5";
import JoinRequestsTable from "@/components/Tables/JoinRequestsTable";

const RequestsTable = ({ formState, onChange, requests }) => {
	return (
		<>
			{/* Join requests */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoArrowDownCircle className="mr-2 text-2xl" />
				Requests to join the project
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
			{/* Join requests */}
			<div className="mb-8">
				{/* requests */}
				{requests && requests.length !== 0 ? (
					<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
						<JoinRequestsTable requests={requests} />
					</div>
				) : (
					<p className=" text-xl text-center pt-6">
						<span className="italic">No requests found</span>
					</p>
				)}
			</div>
		</>
	);
};
export default RequestsTable;
