"use client";

import { useState } from "react";
import Image from "next/image";

import Modal from "@/components/Modals/Modal";
import UpdateMemberModal from "@/components/Modals/ProjectEdit/UpdateMemberModal";

const MemberUserCell = ({ user, role }) => {
	const [modalDisplayDetails, setModalDisplayDetails] = useState(false);

	const showModalDetails = () => {
		setModalDisplayDetails(true);
	};
	const closeModalDetails = () => {
		setModalDisplayDetails(false);
	};

	return (
		<>
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<button type="button" onClick={showModalDetails}>
						<Image src={user.profilePicture.link} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-4" />
					</button>
					<div className="font-semibold text-base lg:whitespace-nowrap mr-2">
						<button type="button" onClick={showModalDetails}>
							<span>{user.username}</span>
						</button>
					</div>
				</div>
				{role === "owner" && <span className="py-1 px-2.5 text-white font-bold text-xs text-nowrap rounded cursor-default bg-blue-500">Project Owner</span>}
			</div>
			<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} modalSize={"std"} modalTitle={"Update member"}>
				<UpdateMemberModal user={user} closeModal={closeModalDetails} />
			</Modal>
		</>
	);
};

export default MemberUserCell;
