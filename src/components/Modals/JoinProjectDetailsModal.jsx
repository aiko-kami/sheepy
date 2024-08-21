import { Badge, Status } from "@/components/Badges/Badges";

const JoinProjectDetailsModal = ({ joinProject, type }) => {
	return (
		<>
			{/* Modal content */}
			<div className="max-h-110 overflow-y-auto text-base text-white">
				<div className="px-4 md:px-10 pb-8">
					{/* Project title and category */}
					<div className="sm:grid grid-cols-2">
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Project:</h2>
							<p className="mb-6 font-semibold pl-1">{joinProject.project.title}</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Category:</h2>
							<div className="mb-6 pl-1">
								<Badge badge={joinProject.project.category} size={"sm"} />
							</div>
						</div>
					</div>

					{/* joinProject message sent */}
					<h2 className="text-lg text-gray-400 font-semibold mb-1">
						<span className="capitalize">{type}</span> message:
					</h2>
					<p className="mb-6 pl-1">{joinProject.message}</p>

					{/* Talent requested and joinProject status */}
					<div className="sm:grid grid-cols-2 justify-around">
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Talent requested:</h2>
							<p className="pl-1">{joinProject.talent}</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">
								<span className="capitalize">{type}</span> status:
							</h2>
							<div className="pl-1">
								<Status name={joinProject.status.name} size={"sm"} bgColor={joinProject.status.bgColor} bgColorHover={joinProject.status.bgColorHover} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default JoinProjectDetailsModal;
