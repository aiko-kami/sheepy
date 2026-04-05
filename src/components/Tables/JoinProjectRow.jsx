"use client";

import Link from "next/link";
import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import JoinProjectDetailsModal from "@/components/Modals/UserPrivate/JoinProjectDetailsModal";
import { Badge, Status } from "@/components/Badges/Badges";
import UserRequestsActions from "@/components/IconsActions/UserRequestsActions";
import UserInvitationsActions from "@/components/IconsActions/UserInvitationsActions";

const JoinProjectRow = ({ joinProject, type }) => {
	console.log("🚀 ~ JoinProjectRow ~ joinProject:", joinProject.project);

	const [modalDisplay, setModalDisplay] = useState(false);

	const showModal = () => {
		setModalDisplay(true);
	};
	const closeModal = () => {
		setModalDisplay(false);
	};

	const cellBase = "p-2 md:px-4 md:py-2 align-middle";

	const clickableCell = "w-full line-clamp-1";

	return (
		<>
			<tr className={`border-b bg-gray-800 border-gray-700 hover:bg-gray-600 ${joinProject.recent ? "text-green-500" : ""}`}>
				{/* Project Title */}
				<td className={`${cellBase} w-1/2 text-center`}>
					<div className="font-semibold text-sm sm:text-base truncate">
						<Link href={`/projects/${joinProject.project.link}`}>{joinProject.project.title}</Link>
					</div>
				</td>

				{/* Category */}
				<td className={`${cellBase} text-center hidden lg:table-cell w-1/3`}>
					<Badge badge={joinProject.project.category} size="xs" />
				</td>

				{/* Talent */}
				<td className={`${cellBase} text-center hidden lg:table-cell`}>
					<button type="button" onClick={showModal} className={clickableCell}>
						<span className={joinProject.recent ? "font-bold" : ""}>{joinProject.talent}</span>
					</button>
				</td>

				{/* Message */}
				<td className={`${cellBase} hidden lg:table-cell`}>
					<button type="button" onClick={showModal} className={`${clickableCell} text-left`}>
						<span className={joinProject.recent ? "font-bold" : ""}>{joinProject.message}</span>
					</button>
				</td>

				{/* Status */}
				<td className={`${cellBase} text-center`}>
					<button type="button" onClick={showModal}>
						<Status name={joinProject.status.status} size="xs" rounded="xs" bgColor={joinProject.status.colors.bgColor} />
					</button>
				</td>

				{/* Actions */}
				<td className={`${cellBase}`}>
					<div className="flex justify-center text-white">
						{type === "invitation" && <UserInvitationsActions invitation={joinProject} />}
						{type === "request" && <UserRequestsActions request={joinProject} />}
					</div>
				</td>
			</tr>

			<Modal modalDisplay={modalDisplay} closeModal={closeModal} closeModalWithBackground={closeModal} modalSize={"std"} modalTitle={`Project ${type}`}>
				<JoinProjectDetailsModal joinProject={joinProject} type={type} />
			</Modal>
		</>
	);
};

export default JoinProjectRow;
