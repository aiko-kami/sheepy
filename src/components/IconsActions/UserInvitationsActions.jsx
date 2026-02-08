"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import JoinProjectDetailsModal from "@/components/Modals/UserPrivate/JoinProjectDetailsModal";
import ProjectInvitationAcceptModal from "@/components/Modals/UserPrivate/ProjectInvitationAcceptModal";
import ProjectInvitationDeclineModal from "@/components/Modals/UserPrivate/ProjectInvitationDeclineModal";
import JoinProjectSendMessageModal from "@/components/Modals/UserPrivate/JoinProjectSendMessageModal";
import ProjectInvitationReportModal from "@/components/Modals/UserPrivate/ProjectInvitationReportModal";

import { IoEyeOutline, IoCheckmarkCircleOutline, IoCloseCircleOutline, IoMailOutline, IoWarningOutline } from "react-icons/io5";

const UserInvitationsActions = ({ invitation, iconSize }) => {
	const [modalDisplayDetails, setModalDisplayDetails] = useState(false);
	const [modalDisplayAccept, setModalDisplayAccept] = useState(false);
	const [modalDisplayDecline, setModalDisplayDecline] = useState(false);
	const [modalDisplaySendMessage, setModalDisplaySendMessage] = useState(false);
	const [modalDisplayReport, setModalDisplayReport] = useState(false);

	const showModalDetails = () => {
		setModalDisplayDetails(true);
	};
	const closeModalDetails = () => {
		setModalDisplayDetails(false);
	};
	const showModalAccept = () => {
		setModalDisplayAccept(true);
	};
	const closeModalAccept = () => {
		setModalDisplayAccept(false);
	};
	const showModalDecline = () => {
		setModalDisplayDecline(true);
	};
	const closeModalDecline = () => {
		setModalDisplayDecline(false);
	};
	const showModalSendMessage = () => {
		setModalDisplaySendMessage(true);
	};
	const closeModalSendMessage = () => {
		setModalDisplaySendMessage(false);
	};
	const showModalReport = () => {
		setModalDisplayReport(true);
	};
	const closeModalReport = () => {
		setModalDisplayReport(false);
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
			{invitation.actions?.view && (
				<>
					<button type="button" onClick={showModalDetails}>
						<IoEyeOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="View invitation" />
					</button>
					<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} closeModalWithBackground={closeModalDetails} modalSize={"std"} modalTitle={"Project invitation"}>
						<JoinProjectDetailsModal joinProject={invitation} type={"invitation"} />
					</Modal>
				</>
			)}
			{invitation.actions?.accept && (
				<>
					<button type="button" onClick={showModalAccept}>
						<IoCheckmarkCircleOutline className={`m-1 hover:text-green-400 duration-100 transition ease-in-out ${size}`} title="Accept invitation" />
					</button>
					<Modal modalDisplay={modalDisplayAccept} closeModal={closeModalAccept} closeModalWithBackground={closeModalAccept} modalSize={"std"} modalTitle={"Accept project invitation"}>
						<ProjectInvitationAcceptModal closeModalAccept={closeModalAccept} invitation={invitation} />
					</Modal>
				</>
			)}
			{invitation.actions?.decline && (
				<>
					<button type="button" onClick={showModalDecline}>
						<IoCloseCircleOutline className={`m-1 hover:text-pink-400 duration-100 transition ease-in-out ${size}`} title="Decline invitation" />
					</button>
					<Modal modalDisplay={modalDisplayDecline} closeModal={closeModalDecline} closeModalWithBackground={closeModalDecline} modalSize={"std"} modalTitle={"Decline project invitation"}>
						<ProjectInvitationDeclineModal closeModalDecline={closeModalDecline} invitation={invitation} />
					</Modal>
				</>
			)}
			{invitation.actions?.sendMessage && (
				<>
					<button type="button" onClick={showModalSendMessage}>
						<IoMailOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Send a message" />
					</button>
					<Modal modalDisplay={modalDisplaySendMessage} closeModal={closeModalSendMessage} modalSize={"std"} modalTitle={"Send a message"}>
						<JoinProjectSendMessageModal closeModalSendMessage={closeModalSendMessage} joinProject={invitation} type={"invitation"} />
					</Modal>
				</>
			)}
			{invitation.actions?.report && (
				<>
					<button type="button" onClick={showModalReport}>
						<IoWarningOutline className={`m-1 hover:text-yellow-500 duration-100 transition ease-in-out ${size}`} title="Report" />
					</button>
					<Modal modalDisplay={modalDisplayReport} closeModal={closeModalReport} modalSize={"std"} modalTitle={"Report project invitation"}>
						<ProjectInvitationReportModal closeModalReport={closeModalReport} invitation={invitation} />
					</Modal>
				</>
			)}
		</>
	);
};

export default UserInvitationsActions;
