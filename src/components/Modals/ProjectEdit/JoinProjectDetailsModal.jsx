import { Badge, Status } from "@/components/Badges/Badges";
import Image from "next/image";

const JoinProjectDetailsModal = ({ joinProject, type }) => {
	return (
		<>
			<div className="mb-6 xl:flex items-center">
				<h2 className="text-lg text-gray-400 font-semibold mb-1">Sender:</h2>
				<div className="flex items-center pl-1 xl:pl-4">
					<Image src={joinProject.user.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-7 h-7 rounded-full shadow-md mr-4" />
					<div className="font-semibold">{joinProject.user.username}</div>
				</div>
			</div>

			{/* joinProject message sent */}
			<div className="mb-6">
				<h2 className="text-lg text-gray-400 font-semibold mb-1">
					<span className="capitalize">{type}</span> message:
				</h2>
				<p className="pl-1">{joinProject.message}</p>
			</div>
			{/* Talent requested and joinProject status */}
			<div className="lg:grid lg:grid-cols-2 justify-around">
				<div className="xl:flex items-baseline mb-6 lg:mb-0">
					<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Talent requested:</h2>
					<p className="pl-1 xl:pl-2">{joinProject.role}</p>
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
