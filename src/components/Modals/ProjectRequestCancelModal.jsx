import Link from "next/link";

import { Button } from "@/components/Buttons/Buttons";
import { Badge } from "@/components/Badges/Badges";

const ProjectRequestCancelModal = ({ closeModalCancel, request }) => {
	const cancelRequest = () => {
		console.log("🚀 ~ cancelRequest: the request has been cancelled");
		closeModalCancel();
	};
	return (
		<>
			{/* Modal content */}
			<div className="max-h-110 overflow-y-auto text-base text-white">
				<div className="px-4 md:px-10 pb-8">
					{/* Project title and category */}
					<div className="sm:grid grid-cols-2">
						<div className="">
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Project:</h2>
							<p className="mb-6 font-semibold pl-1">
								<Link href={`/projects/${request.projectprojectId}`}>{request.project.title}</Link>
							</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Category:</h2>
							<div className="mb-10 pl-1">
								<Badge badge={request.project.category} size={"sm"} />
							</div>
						</div>
					</div>

					{/* Cancel validation */}
					<h2 className="text-lg text-center mb-6">Are you sure you want to cancel this request to join the project?</h2>

					{/* Buttons */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
						<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
							<Button
								btnProps={{
									type: "button",
									action: closeModalCancel,
								}}
							>
								Close
							</Button>
						</div>
						<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
							<Button
								btnProps={{
									type: "button",
									btnColor: "red",
									action: cancelRequest,
								}}
							>
								Cancel request
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectRequestCancelModal;
