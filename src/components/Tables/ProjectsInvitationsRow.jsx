import Link from "next/link";
import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import ProjectInvitationDetailsModal from "@/components/Modals/ProjectInvitationDetailsModal";
import { Badge, Status } from "@/components/Badges/Badges";
import InvitationsActions from "@/components/UserProjectsPrivate/InvitationsActions";

const ProjectsInvitationsRow = ({ invitation }) => {
	const [modalDisplay, setModalDisplay] = useState(false);

	const showModal = () => {
		setModalDisplay(true);
	};
	const closeModal = () => {
		setModalDisplay(false);
	};

	return (
		<>
			<tr className={`border-b bg-gray-800 border-gray-700 hover:bg-gray-600 ${invitation.new && "text-green-500"}`}>
				<td scope="row" className="p-2 md:px-4 md:py-2">
					<div className="font-semibold text-base lg:whitespace-nowrap">
						<Link href={`/projects/${invitation.project.projectId}`}>{invitation.project.title}</Link>
					</div>
				</td>
				<td className="p-2 md:px-4 md:py-2 text-center hidden md:table-cell">
					<div>
						<Badge badge={invitation.project.category} size={"xs"} />
					</div>
				</td>
				<td className="p-2 md:px-4 md:py-2 text-center hidden md:table-cell">
					<button type="button" onClick={showModal}>
						<div className={`${invitation.new && "font-bold"}`}>{invitation.talent}</div>
					</button>
				</td>
				<td className="p-2 md:px-4 md:py-2 hidden md:table-cell">
					<button type="button" onClick={showModal}>
						<div className={`${invitation.new && "font-bold"} text-left line-clamp-2`}>{invitation.message}</div>
					</button>
				</td>
				<td className="p-2 md:px-4 md:py-2 text-center">
					<div>
						<button type="button" onClick={showModal}>
							<Status name={invitation.status.name} size={"xs"} rounded={"xs"} bgColor={invitation.status.bgColor} bgColorHover={invitation.status.bgColorHover} />
						</button>
					</div>
				</td>
				<td className="p-2 md:px-4 md:py-2">
					<div className="flex justify-center flex-wrap md:flex-nowrap text-white">
						<InvitationsActions invitation={invitation} />
					</div>
				</td>
				<Modal modalDisplay={modalDisplay} closeModal={closeModal} closeModalWithBackground={closeModal} modalSize={"std"} modalTitle={"Project invitation"}>
					<ProjectInvitationDetailsModal closeModal={closeModal} invitation={invitation} />
				</Modal>
			</tr>
		</>
	);
};

export default ProjectsInvitationsRow;
