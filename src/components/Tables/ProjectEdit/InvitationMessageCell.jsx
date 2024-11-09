"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import UpdateMemberModal from "@/components/Modals/ProjectEdit/UpdateMemberModal";

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
			<button type="button" onClick={showModalDetails}>
				<div className="text-gray-400 whitespace-nowrap">{invitation.message}</div>
			</button>
			<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} modalSize={"std"} modalTitle={"Invitation"}>
				<UpdateMemberModal closeModal={closeModalDetails} />
			</Modal>
		</>
	);
};

export default InvitationMessageCell;
