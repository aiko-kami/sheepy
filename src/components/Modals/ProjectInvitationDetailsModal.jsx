import { Badge, Status } from "@/components/Badges/Badges";

const ProjectInvitationDetailsModal = ({ invitation }) => {
	return (
		<>
			{/* Modal content */}
			<div className="max-h-110 overflow-y-auto text-base text-white">
				<div className="px-4 md:px-10 pb-8">
					{/* Project title and category */}
					<div className="sm:grid grid-cols-2">
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Project:</h2>
							<p className="mb-6 font-semibold pl-1">{invitation.project.title}</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Category:</h2>
							<div className="mb-6 pl-1">
								<Badge badge={invitation.project.category} size={"sm"} />
							</div>
						</div>
					</div>

					{/* Invitation message received */}
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Invitation message:</h2>
					<p className="mb-6 pl-1">{invitation.message}</p>

					{/* Talent required and invitation status */}
					<div className="sm:grid grid-cols-2 justify-around">
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Talent required:</h2>
							<p className="pl-1">{invitation.talent}</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Invitation status:</h2>
							<div className="pl-1">
								<Status name={invitation.status.name} size={"sm"} bgColor={invitation.status.bgColor} bgColorHover={invitation.status.bgColorHover} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectInvitationDetailsModal;
