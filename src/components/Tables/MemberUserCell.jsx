"use client";

import { useState } from "react";
import Image from "next/image";

import Modal from "@/components/Modals/Modal";
import UpdateMemberModal from "@/components/Modals/UpdateMemberModal";

const MembersTable = ({ member }) => {
	const [modalDisplayDetails, setModalDisplayDetails] = useState(false);

	const showModalDetails = () => {
		setModalDisplayDetails(true);
	};
	const closeModalDetails = () => {
		setModalDisplayDetails(false);
	};

	return (
		<>
			<div className="flex items-center">
				<button type="button" onClick={showModalDetails}>
					<Image src={member.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-4" />
				</button>
				<div className="font-semibold text-base lg:whitespace-nowrap">
					<button type="button" onClick={showModalDetails}>
						<span>{member.username}</span>
					</button>
				</div>
				{member.isOwner && (
					<div className="sm:ml-3">
						<span className="py-1 px-2.5 text-white font-bold text-xs text-nowrap duration-200 rounded cursor-default bg-blue-500">Project Owner</span>
					</div>
				)}
			</div>
			<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} modalSize={"std"} modalTitle={"Update member"}>
				<UpdateMemberModal member={member} closeModal={closeModalDetails} />
			</Modal>
		</>
	);
};

export default MembersTable;
