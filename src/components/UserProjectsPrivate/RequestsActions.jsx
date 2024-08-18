"use client";

import Link from "next/link";
import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import ProjectRequestDetailsModal from "@/components/Modals/ProjectRequestDetailsModal";

import { IoEyeOutline, IoCloseCircleOutline, IoMailOutline } from "react-icons/io5";

const RequestsActions = ({ request, iconSize }) => {
	const [modalDisplay, setModalDisplay] = useState(false);

	const showModal = () => {
		setModalDisplay(true);
	};
	const closeModal = () => {
		setModalDisplay(false);
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
					<button type="button" onClick={showModal}>
						<IoEyeOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="View request" />
					</button>
					<Modal modalDisplay={modalDisplay} closeModal={closeModal} closeModalWithBackground={closeModal} modalSize={"sm"} modalTitle={"Project request"}>
						<ProjectRequestDetailsModal closeModal={closeModal} request={request} />
					</Modal>
				</>
			)}
			{request.actions.cancel && (
				<Link href="#">
					<IoCloseCircleOutline className={`m-1 hover:text-pink-400 duration-100 transition ease-in-out ${size}`} title="Cancel request" />
				</Link>
			)}
			{request.actions.sendMessage && (
				<Link href="#">
					<IoMailOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Send a message" />
				</Link>
			)}
		</>
	);
};

export default RequestsActions;
