import { Button } from "@/components/Buttons/Buttons";
import { Status } from "@/components/Badges/Badges";
import Image from "next/image";

const ProjectRequestAcceptModal = ({ closeModalAccept, request }) => {
	const acceptRequest = () => {
		console.log("🚀 ~ acceptRequest: the request has been accepted");
		closeModalAccept();
	};
	return (
		<>
			{/* User, request message and talent requested */}
			<h2 className="text-xl text-center font-semibold mb-1">Request details</h2>
			<div className="mb-10 border-2 border-gray-400 rounded-md p-4 pb-5">
				{/* joinProject user */}
				<div className="mb-6 xl:flex items-center">
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Sender:</h2>
					<div className="flex items-center pl-1 xl:pl-4">
						<Image src={request.sender.profilePicture.link} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-7 h-7 rounded-full shadow-md mr-4" />
						<div className="font-semibold">{request.sender.username}</div>
					</div>
				</div>

				{/* joinProject message sent */}
				<div className="mb-6">
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Request message:</h2>
					<p className="pl-1">{request.message}</p>
				</div>

				{/* Talent requested and joinProject status */}
				<div className="lg:grid lg:grid-cols-2 justify-around">
					<div className="xl:flex items-baseline mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Talent requested:</h2>
						<p className="pl-1 xl:pl-2">{request.talent}</p>
					</div>
					<div>
						<div className="xl:flex justify-center">
							<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Request status:</h2>
							<div className="pl-1 xl:pl-2">
								<Status name={request.status.status} size={"sm"} bgColor={request.status.colors.bgColor} />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Accept validation */}
			<h2 className="text-lg font-semibold text-center mb-6">Are you sure you want to accept this request to join the project?</h2>

			{/* Buttons */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
				<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
					<Button
						btnProps={{
							type: "button",
							action: closeModalAccept,
						}}
					>
						Close
					</Button>
				</div>
				<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
					<Button
						btnProps={{
							type: "button",
							btnColor: "green",
							action: acceptRequest,
						}}
					>
						Accept request
					</Button>
				</div>
			</div>
		</>
	);
};

export default ProjectRequestAcceptModal;
