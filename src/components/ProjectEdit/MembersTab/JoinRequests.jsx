import { IoArrowDownCircle } from "react-icons/io5";

const JoinRequests = ({ formState, onChange, requests }) => {
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
					<>Requests</>
				) : (
					<p className=" text-xl text-center pt-10">
						<span className="italic">No requests found</span> 😕
					</p>
				)}
			</div>
		</>
	);
};
export default JoinRequests;
