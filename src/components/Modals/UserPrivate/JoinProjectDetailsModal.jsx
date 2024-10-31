import { Badge, Status } from "@/components/Badges/Badges";

const JoinProjectDetailsModal = ({ joinProject, type }) => {
	return (
		<>
			{/* Project title and category */}
			<div className="lg:grid lg:grid-cols-2 justify-around mb-8">
				<div className="xl:flex items-baseline mb-6 lg:mb-0">
					<h2 className="text-lg text-gray-400 font-semibold">Project:</h2>
					<p className="pl-1 xl:pl-2">{joinProject.project.title}</p>
				</div>
				<div className="xl:flex justify-center">
					<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Category:</h2>
					<div className="pl-1 xl:pl-2">
						<Badge badge={joinProject.project.category} size={"sm"} />
					</div>
				</div>
			</div>

			{/* joinProject message sent */}
			<h2 className="text-lg text-gray-400 font-semibold mb-1">
				<span className="capitalize">{type}</span> message:
			</h2>
			<p className="mb-10 pl-1">{joinProject.message}</p>

			{/* Talent requested and joinProject status */}
			<div className="lg:grid lg:grid-cols-2 justify-around">
				<div className="xl:flex items-baseline mb-6 lg:mb-0">
					<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Talent requested:</h2>
					<p className="pl-1">{joinProject.talent}</p>
				</div>
				<div className="xl:flex justify-center">
					<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">
						<span className="capitalize">{type}</span> status:
					</h2>
					<div className="pl-1 xl:pl-2">
						<Status name={joinProject.status.name} size={"sm"} bgColor={joinProject.status.bgColor} />
					</div>
				</div>
			</div>
		</>
	);
};

export default JoinProjectDetailsModal;
