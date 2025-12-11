import Image from "next/image";
import { Status } from "@/components/Badges/Badges";
import { Avatar } from "@/components/Badges/Avatar";

const JoinProjectDetailsModal = ({ joinProject, type }) => {
	const user = type === "request" ? joinProject.sender : joinProject.receiver;
	const label = type === "request" ? "Sender:" : "Receiver:";
	return (
		<>
			<div className="lg:grid lg:grid-cols-2 justify-around">
				{/* joinProject user */}
				<div className="mb-6 xl:flex items-center">
					<h2 className="text-lg text-gray-400 font-semibold mb-1">{label}</h2>
					<div className="flex items-center pl-1 xl:pl-4">
						<div className="mr-2">
							<Avatar img={user.profilePicture.link} size={"sm"} alt={"user profile picture"} />
						</div>
						<div className="font-semibold">{user.username}</div>
					</div>
				</div>

				{/* For invitation - Sender from the project */}
				{type == "invitation" && (
					<div className="mb-6 xl:flex items-center justify-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-1">Sent by:</h2>
						<div className="flex items-center pl-1 xl:pl-4">
							<div className="mr-2">
								<Avatar img={joinProject.sender.profilePicture.link} size={"sm"} alt={"user profile picture"} />
							</div>
							<div className="font-semibold">{joinProject.sender.username}</div>
						</div>
					</div>
				)}
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
					<p className="pl-1 xl:pl-2">{joinProject.talent}</p>
				</div>
				<div className="xl:flex justify-center">
					<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">
						<span className="capitalize">{type}</span> status:
					</h2>
					<div className="pl-1 xl:pl-2">
						<Status name={joinProject.status.status} size={"sm"} bgColor={joinProject.status.colors.bgColor} />
					</div>
				</div>
			</div>
		</>
	);
};

export default JoinProjectDetailsModal;
