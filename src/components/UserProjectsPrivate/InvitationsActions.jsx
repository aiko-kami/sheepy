"use client";

import Link from "next/link";
import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import ProjectInvitationDetailsModal from "@/components/Modals/ProjectInvitationDetailsModal";

import { IoEyeOutline, IoCheckmarkCircleOutline, IoCloseCircleOutline, IoMailOutline, IoWarningOutline } from "react-icons/io5";

const InvitationsActions = ({ invitation, iconSize }) => {
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
			{invitation.actions.view && (
				<>
					<button type="button" onClick={showModal}>
						<IoEyeOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="View invitation" />
					</button>
					<Modal modalDisplay={modalDisplay} closeModal={closeModal} closeModalWithBackground={closeModal} modalSize={"sm"} modalTitle={"Project request"}>
						<ProjectInvitationDetailsModal closeModal={closeModal} invitation={invitation} />
					</Modal>
				</>
			)}
			{invitation.actions.accept && (
				<Link href="#">
					<IoCheckmarkCircleOutline className={`m-1 hover:text-green-400 duration-100 transition ease-in-out ${size}`} title="Accept invitation" />
				</Link>
			)}
			{invitation.actions.decline && (
				<Link href="#">
					<IoCloseCircleOutline className={`m-1 hover:text-pink-400 duration-100 transition ease-in-out ${size}`} title="Decline invitation" />
				</Link>
			)}
			{invitation.actions.sendMessage && (
				<Link href="#">
					<IoMailOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Send a message" />
				</Link>
			)}
			{invitation.actions.report && (
				<Link href="#">
					<IoWarningOutline className={`m-1 hover:text-yellow-500 duration-100 transition ease-in-out ${size}`} title="Report" />
				</Link>
			)}
		</>
	);
};

export default InvitationsActions;
