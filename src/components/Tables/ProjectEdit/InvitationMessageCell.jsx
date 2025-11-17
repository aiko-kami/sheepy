"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import JoinProjectDetailsModal from "@/components/Modals/ProjectEdit/JoinProjectDetailsModal";

const InvitationMessageCell = ({ invitation }) => {
	const [modalDisplayDetails, setModalDisplayDetails] = useState(false);

	const showModalDetails = () => {
		setModalDisplayDetails(true);
	};
	const closeModalDetails = () => {
		setModalDisplayDetails(false);
	};

	return (
		<>
			<div onClick={showModalDetails} className="text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:text-white transition duration-75 ease-in-out">
				{invitation.message}
			</div>
			<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} closeModalWithBackground={closeModalDetails} modalSize={"std"} modalTitle={"View invitation"}>
				<JoinProjectDetailsModal joinProject={invitation} type={"invitation"} />
			</Modal>
		</>
	);
};

export default InvitationMessageCell;
