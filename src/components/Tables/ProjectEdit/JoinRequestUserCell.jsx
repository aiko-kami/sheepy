"use client";

import { useState } from "react";
import Image from "next/image";

import Modal from "@/components/Modals/Modal";
import UpdateMemberModal from "@/components/Modals/ProjectEdit/UpdateMemberModal";

const JoinRequestUserCell = ({ request }) => {
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
					<Image src={request.user.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-4" />
				</button>
				<div className="font-semibold text-base lg:whitespace-nowrap">
					<button type="button" onClick={showModalDetails}>
						<span>{request.user.username}</span>
					</button>
				</div>
			</div>
			<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} modalSize={"std"} modalTitle={"Request"}>
				<UpdateMemberModal member={request.user} closeModal={closeModalDetails} />
			</Modal>
		</>
	);
};

export default JoinRequestUserCell;