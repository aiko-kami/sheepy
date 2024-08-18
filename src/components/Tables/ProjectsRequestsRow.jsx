import Link from "next/link";
import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import ProjectRequestDetailsModal from "@/components/Modals/ProjectRequestDetailsModal";
import { Badge, Status } from "@/components/Badges/Badges";
import RequestsActions from "@/components/UserProjectsPrivate/RequestsActions";

const ProjectsRequestsRow = ({ request }) => {
	const [modalDisplay, setModalDisplay] = useState(false);

	const showModal = () => {
		setModalDisplay(true);
	};
	const closeModal = () => {
		setModalDisplay(false);
	};

	return (
		<>
			<tr className={`border-b bg-gray-800 border-gray-700 hover:bg-gray-600 ${request.new && "text-green-500"}`}>
				<td scope="row" className="p-2 md:px-4 md:py-2">
					<div className="font-semibold text-base lg:whitespace-nowrap">
						<Link href={`/projects/${request.project.projectId}`}>{request.project.title}</Link>
					</div>
				</td>
				<td className="p-2 md:px-4 md:py-2 text-center hidden md:table-cell">
					<div>
						<Badge badge={request.project.category} size={"xs"} />
					</div>
				</td>
				<td className="p-2 md:px-4 md:py-2 text-center hidden md:table-cell">
					<button type="button" onClick={showModal}>
						<div className={`${request.new && "font-bold"}`}>{request.talent}</div>
					</button>
				</td>
				<td className="p-2 md:px-4 md:py-2 hidden md:table-cell">
					<button type="button" onClick={showModal}>
						<div className={`${request.new && "font-bold"} text-left line-clamp-2`}>{request.message}</div>
					</button>
				</td>
				<td className="p-2 md:px-4 md:py-2 text-center">
					<div>
						<button type="button" onClick={showModal}>
							<Status name={request.status.name} size={"xs"} rounded={"xs"} bgColor={request.status.bgColor} bgColorHover={request.status.bgColorHover} />
						</button>
					</div>
				</td>
				<td className="p-2 md:px-4 md:py-2">
					<div className="flex justify-center flex-wrap md:flex-nowrap text-white">
						<RequestsActions request={request} />
					</div>
				</td>
				<Modal modalDisplay={modalDisplay} closeModal={closeModal} closeModalWithBackground={closeModal} modalSize={"std"} modalTitle={"Project request"}>
					<ProjectRequestDetailsModal closeModal={closeModal} request={request} />
				</Modal>
			</tr>
		</>
	);
};

export default ProjectsRequestsRow;
