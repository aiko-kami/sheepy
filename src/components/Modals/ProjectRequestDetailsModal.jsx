import { Badge, Status } from "@/components/Badges/Badges";

const ProjectRequestDetailsModal = ({ request }) => {
	return (
		<>
			{/* Modal content */}
			<div className="max-h-110 overflow-y-auto text-base text-white">
				<div className="px-4 md:px-10 pb-8">
					{/* Project title and category */}
					<div className="sm:grid grid-cols-2">
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Project:</h2>
							<p className="mb-6 font-semibold pl-1">{request.project.title}</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Category:</h2>
							<div className="mb-6 pl-1">
								<Badge badge={request.project.category} size={"sm"} />
							</div>
						</div>
					</div>

					{/* Request message sent */}
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Request message:</h2>
					<p className="mb-6 pl-1">{request.message}</p>

					{/* Talent requested and request status */}
					<div className="sm:grid grid-cols-2 justify-around">
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Talent requested:</h2>
							<p className="pl-1">{request.talent}</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Request status:</h2>
							<div className="pl-1">
								<Status name={request.status.name} size={"sm"} bgColor={request.status.bgColor} bgColorHover={request.status.bgColorHover} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectRequestDetailsModal;
