"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import JoinProjectDetailsModal from "@/components/Modals/ProjectEdit/JoinProjectDetailsModal";

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
			<div onClick={showModalDetails} className="text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer hover:text-white transition duration-75 ease-in-out">
				{request.message}
			</div>
			<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} closeModalWithBackground={closeModalDetails} modalSize={"std"} modalTitle={"View request"}>
				<JoinProjectDetailsModal joinProject={request} type={"request"} />
			</Modal>
		</>
	);
};

export default JoinRequestMessageCell;
