"use client";

import Link from "next/link";
import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import JoinProjectDetailsModal from "@/components/Modals/UserPrivate/JoinProjectDetailsModal";
import { Badge, Status } from "@/components/Badges/Badges";
import UserRequestsActions from "@/components/IconsActions/UserRequestsActions";
import UserInvitationsActions from "@/components/IconsActions/UserInvitationsActions";

const JoinProjectRow = ({ joinProject, type }) => {
	const [modalDisplay, setModalDisplay] = useState(false);

	const showModal = () => {
		setModalDisplay(true);
	};
	const closeModal = () => {
		setModalDisplay(false);
	};

	return (
		<>
			<tr className={`border-b bg-gray-800 border-gray-700 hover:bg-gray-600 ${joinProject.recent && "text-green-500"}`}>
				<td scope="row" className="p-2 md:px-4 md:py-2">
					<div className="font-semibold text-base lg:whitespace-nowrap">
						<Link href={`/projects/${joinProject.project.projectId}`}>{joinProject.project.title}</Link>
					</div>
				</td>
				<td className="p-2 md:px-4 md:py-2 text-center hidden md:table-cell">
					<div>
						<Badge badge={joinProject.project.category} size={"xs"} />
					</div>
				</td>
				<td className="p-2 md:px-4 md:py-2 text-center hidden md:table-cell">
					<button type="button" onClick={showModal}>
						<div className={`${joinProject.recent && "font-bold"}`}>{joinProject.talent}</div>
					</button>
				</td>
				<td className="p-2 md:px-4 md:py-2 hidden md:table-cell">
					<button type="button" onClick={showModal}>
						<div className={`${joinProject.recent && "font-bold"} text-left line-clamp-2`}>{joinProject.message}</div>
					</button>
				</td>
				<td className="p-2 md:px-4 md:py-2 text-center">
					<button type="button" onClick={showModal}>
						<Status name={joinProject.status.name} size={"xs"} rounded={"xs"} bgColor={joinProject.status.bgColor} />
					</button>
				</td>
				<td className="p-2 md:px-4 md:py-2">
					<div className="flex justify-center flex-wrap md:flex-nowrap text-white">
						{type === "invitation" && <UserInvitationsActions invitation={joinProject} />}
						{type === "request" && <UserRequestsActions request={joinProject} />}
					</div>
				</td>
				<Modal modalDisplay={modalDisplay} closeModal={closeModal} closeModalWithBackground={closeModal} modalSize={"std"} modalTitle={`Project ${type}`}>
					<JoinProjectDetailsModal joinProject={joinProject} type={type} />
				</Modal>
			</tr>
		</>
	);
};

export default JoinProjectRow;
