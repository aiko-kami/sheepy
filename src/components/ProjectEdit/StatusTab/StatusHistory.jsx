import { IoTime } from "react-icons/io5";
import StatusHistoryTable from "@/components/Tables/ProjectEdit/StatusHistoryTable";

const StatusHistory = ({ statusHistory }) => {
	return (
		<>
			{/* Project status history */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoTime className="mr-2 text-2xl" />
				Status history
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Project status */}
				<div className="mb-8">
					{/* Status history table */}
					{statusHistory && statusHistory.length !== 0 ? (
						<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
							<StatusHistoryTable statusHistory={statusHistory} />
						</div>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">No status history found</span> 😕
						</p>
					)}
				</div>
			</div>
		</>
	);
};
export default StatusHistory;
