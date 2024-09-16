import { IoHourglassOutline, IoTime } from "react-icons/io5";
import StatusHistoryTable from "@/components/Tables/StatusHistoryTable";

const StatusHistory = ({ status }) => {
	return (
		<>
			{/* Project status history */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoTime className="mr-2 text-2xl" />
				Status history
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
			{/* Project status */}
			<div className="mb-8">
				{/* Status history table */}
				{status.statusHistory && (
					<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
						<StatusHistoryTable status={status.statusHistory} />
					</div>
				)}
			</div>
		</>
	);
};
export default StatusHistory;
