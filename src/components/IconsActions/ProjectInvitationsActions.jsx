"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import JoinProjectDetailsModal from "@/components/Modals/ProjectEdit/JoinProjectDetailsModal";
import ProjectInvitationCancelModal from "@/components/Modals/ProjectEdit/ProjectInvitationCancelModal";
import JoinProjectSendMessageModal from "@/components/Modals/ProjectEdit/JoinProjectSendMessageModal";

import { IoEyeOutline, IoCreateOutline, IoCloseCircleOutline, IoMailOutline } from "react-icons/io5";

const ProjectInvitationsActions = ({ projectId, invitation, projectPermissions, iconSize }) => {
	const [modalDisplayDetails, setModalDisplayDetails] = useState(false);
	const [modalDisplayUpdate, setModalDisplayUpdate] = useState(false);
	const [modalDisplayCancel, setModalDisplayCancel] = useState(false);
	const [modalDisplaySendMessage, setModalDisplaySendMessage] = useState(false);

	const showModalDetails = () => {
		setModalDisplayDetails(true);
	};
	const closeModalDetails = () => {
		setModalDisplayDetails(false);
	};
	const showModalUpdate = () => {
		setModalDisplayUpdate(true);
	};
	const closeModalUpdate = () => {
		setModalDisplayUpdate(false);
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
			{invitation.actions.view && (
				<>
					<button type="button" onClick={showModalDetails}>
						<IoEyeOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="View invitation" />
					</button>
					<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} modalSize={"std"} modalTitle={"View invitation"}>
						<JoinProjectDetailsModal joinProject={invitation} type={"invitation"} />
					</Modal>
				</>
			)}
			{invitation.actions.edit && (
				<>
					<button type="button">
						<IoCreateOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Edit invitation" />
					</button>
				</>
			)}
			{invitation.actions.cancel && (
				<>
					<button type="button" onClick={showModalCancel}>
						<IoCloseCircleOutline className={`m-1 hover:text-red-400 duration-100 transition ease-in-out ${size}`} title="Cancel invitation" />
					</button>
					<Modal modalDisplay={modalDisplayCancel} closeModal={closeModalCancel} modalSize={"std"} modalTitle={"Cancel invitation"}>
						<ProjectInvitationCancelModal invitation={invitation} closeModalCancel={closeModalCancel} />
					</Modal>
				</>
			)}
			{invitation.actions.sendMessage && (
				<>
					<button type="button" onClick={showModalSendMessage}>
						<IoMailOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Send a message" />
					</button>
					<Modal modalDisplay={modalDisplaySendMessage} closeModal={closeModalSendMessage} modalSize={"std"} modalTitle={"Send a message"}>
						<JoinProjectSendMessageModal joinProject={invitation} closeModalSendMessage={closeModalSendMessage} type={"invitation"} />
					</Modal>
				</>
			)}
		</>
	);
};

export default ProjectInvitationsActions;
