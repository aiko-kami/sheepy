"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import UpdateMemberModal from "@/components/Modals/UpdateMemberModal";

const JoinRequestMessageCell = ({ request }) => {
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
				<div className="text-gray-400 whitespace-nowrap">{request.message}</div>
			</button>
			<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} modalSize={"std"} modalTitle={"Request"}>
				<UpdateMemberModal closeModal={closeModalDetails} />
			</Modal>
		</>
	);
};

export default JoinRequestMessageCell;
