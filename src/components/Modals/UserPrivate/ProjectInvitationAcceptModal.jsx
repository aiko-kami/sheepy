import { Button } from "@/components/Buttons/Buttons";
import { Badge } from "@/components/Badges/Badges";

const ProjectInvitationAcceptModal = ({ closeModalAccept, invitation }) => {
	const acceptInvitation = () => {
		console.log("🚀 ~ acceptInvitation: the invitation has been accepted");
		closeModalAccept();
	};
	return (
		<>
			{/* Project title and category */}
			<div className="sm:grid grid-cols-2">
				<div className="">
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Project:</h2>
					<p className="mb-6 font-semibold pl-1">{invitation.project.title}</p>
				</div>
				<div>
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Category:</h2>
					<div className="mb-10 pl-1">
						<Badge badge={invitation.project.category} size={"sm"} />
					</div>
				</div>
			</div>

			{/* Accept validation */}
			<h2 className="text-lg font-semibold text-center mb-6">Are you sure you want to accept this invitation to join the project?</h2>

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
							action: acceptInvitation,
						}}
					>
						Accept invitation
					</Button>
				</div>
			</div>
		</>
	);
};

export default ProjectInvitationAcceptModal;
