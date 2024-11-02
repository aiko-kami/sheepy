import { Button } from "@/components/Buttons/Buttons";
import { Badge, Status } from "@/components/Badges/Badges";

const ProjectInvitationDeclineModal = ({ closeModalDecline, invitation }) => {
	const declineInvitation = () => {
		console.log("🚀 ~ declineInvitation: the invitation has been declined");
		closeModalDecline();
	};
	return (
		<>
			{/* User, invitation message and talent requested */}
			<h2 className="text-xl text-center font-semibold mb-1">Invitation details</h2>
			<div className="mb-6 border-2 border-gray-400 rounded-md p-4 pb-5">
				{/* Project title and category */}
				<div className="lg:grid lg:grid-cols-2 justify-around mb-8">
					<div className="xl:flex items-baseline mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold">Project:</h2>
						<p className="pl-1 xl:pl-2">{invitation.project.title}</p>
					</div>
					<div className="xl:flex justify-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Category:</h2>
						<div className="pl-1 xl:pl-2">
							<Badge badge={invitation.project.category} size={"sm"} />
						</div>
					</div>
				</div>

				{/* Invitation message sent */}
				<h2 className="text-lg text-gray-400 font-semibold mb-1">Invitation message:</h2>
				<p className="mb-10 pl-1">{invitation.message}</p>

				{/* Talent requested and invitation status */}
				<div className="lg:grid lg:grid-cols-2 justify-around">
					<div className="xl:flex items-baseline mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Talent requested:</h2>
						<p className="pl-1">{invitation.talent}</p>
					</div>
					<div className="xl:flex justify-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Invitation status:</h2>
						<div className="pl-1 xl:pl-2">
							<Status name={invitation.status.name} size={"sm"} bgColor={invitation.status.bgColor} />
						</div>
					</div>
				</div>
			</div>

			{/* Decline validation */}
			<h2 className="text-lg font-semibold text-center mb-6">Are you sure you want to decline this invitation to join the project?</h2>

			{/* Buttons */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
				<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
					<Button
						btnProps={{
							type: "button",
							action: closeModalDecline,
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
							action: declineInvitation,
						}}
					>
						Decline invitation
					</Button>
				</div>
			</div>
		</>
	);
};

export default ProjectInvitationDeclineModal;
