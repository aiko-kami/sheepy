"use client";

import Link from "next/link";
import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import ProjectRequestDetailsModal from "@/components/Modals/ProjectRequestDetailsModal";
import ProjectRequestCancelModal from "@/components/Modals/ProjectRequestCancelModal";
import JoinProjectSendMessageModal from "@/components/Modals/JoinProjectSendMessageModal";

import { IoEyeOutline, IoCloseCircleOutline, IoMailOutline } from "react-icons/io5";

const RequestsActions = ({ request, iconSize }) => {
	const [modalDisplayDetails, setModalDisplayDetails] = useState(false);
	const [modalDisplayCancel, setModalDisplayCancel] = useState(false);
	const [modalDisplaySendMessage, setModalDisplaySendMessage] = useState(false);

	const showModalDetails = () => {
		setModalDisplayDetails(true);
	};
	const closeModalDetails = () => {
		setModalDisplayDetails(false);
	};
	const showModalCancel = () => {
		setModalDisplayCancel(true);
	};
	const closeModalCancel = () => {
		setModalDisplayCancel(false);
	};
	const showModalSendMessage = () => {
		setModalDisplaySendMessage(true);
	};
	const closeModalSendMessage = () => {
		setModalDisplaySendMessage(false);
	};

	let size;
	switch (iconSize) {
		case "sm":
			size = "text-xl";
			break;
		case "std":
			size = "text-2xl";
			break;
		case "lg":
			size = "text-3xl";
			break;
		default:
			size = "text-2xl";
	}

	return (
		<>
			{request.actions.view && (
				<>
					<button type="button" onClick={showModalDetails}>
						<IoEyeOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="View request" />
					</button>
					<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} closeModalWithBackground={closeModalDetails} modalSize={"std"} modalTitle={"Project request"}>
						<ProjectRequestDetailsModal request={request} />
					</Modal>
				</>
			)}
			{request.actions.cancel && (
				<>
					<button type="button" onClick={showModalCancel}>
						<IoCloseCircleOutline className={`m-1 hover:text-pink-400 duration-100 transition ease-in-out ${size}`} title="Cancel request" />
					</button>
					<Modal modalDisplay={modalDisplayCancel} closeModal={closeModalCancel} closeModalWithBackground={closeModalCancel} modalSize={"std"} modalTitle={"Cancel project request"}>
						<ProjectRequestCancelModal closeModalCancel={closeModalCancel} request={request} />
					</Modal>
				</>
			)}
			{request.actions.sendMessage && (
				<>
					<button type="button" onClick={showModalSendMessage}>
						<IoMailOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Send a message" />
					</button>
					<Modal modalDisplay={modalDisplaySendMessage} closeModal={closeModalSendMessage} modalSize={"std"} modalTitle={"Send a message"}>
						<JoinProjectSendMessageModal closeModalSendMessage={closeModalSendMessage} joinProject={request} />
					</Modal>
				</>
			)}
		</>
	);
};

export default RequestsActions;
