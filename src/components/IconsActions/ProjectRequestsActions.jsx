"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import JoinProjectDetailsModal from "@/components/Modals/ProjectEdit/JoinProjectDetailsModal";
import ProjectRequestAcceptModal from "@/components/Modals/ProjectEdit/ProjectRequestAcceptModal";
import ProjectRequestDeclineModal from "@/components/Modals/ProjectEdit/ProjectRequestDeclineModal";
import JoinProjectSendMessageModal from "@/components/Modals/ProjectEdit/JoinProjectSendMessageModal";
import ProjectRequestReportModal from "@/components/Modals/ProjectEdit/ProjectRequestReportModal";

import { IoEyeOutline, IoCheckmarkCircleOutline, IoCloseCircleOutline, IoMailOutline, IoWarningOutline } from "react-icons/io5";

const ProjectRequestsActions = ({ projectId, request, userPermissions, iconSize }) => {
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
			{userPermissions.canViewJoinProjectRequests && (
				<>
					<button type="button" onClick={showModalDetails}>
						<IoEyeOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="View request" />
					</button>
					<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} closeModalWithBackground={closeModalDetails} modalSize={"std"} modalTitle={"View request"}>
						<JoinProjectDetailsModal joinProject={request} type={"request"} />
					</Modal>
				</>
			)}
			{userPermissions.canViewJoinProjectRequests && userPermissions.canEditJoinProjectRequests && (
				<>
					<button type="button" onClick={showModalAccept}>
						<IoCheckmarkCircleOutline className={`m-1 hover:text-green-400 duration-100 transition ease-in-out ${size}`} title="Accept request" />
					</button>
					<Modal modalDisplay={modalDisplayAccept} closeModal={closeModalAccept} closeModalWithBackground={closeModalAccept} modalSize={"std"} modalTitle={"Accept request"}>
						<ProjectRequestAcceptModal request={request} closeModalAccept={closeModalAccept} projectId={projectId} />
					</Modal>
					<button type="button" onClick={showModalDecline}>
						<IoCloseCircleOutline className={`m-1 hover:text-red-400 duration-100 transition ease-in-out ${size}`} title="Decline request" />
					</button>
					<Modal modalDisplay={modalDisplayDecline} closeModal={closeModalDecline} closeModalWithBackground={closeModalDecline} modalSize={"std"} modalTitle={"Decline request"}>
						<ProjectRequestDeclineModal request={request} closeModalDecline={closeModalDecline} projectId={projectId} />
					</Modal>
					<button type="button" onClick={showModalSendMessage}>
						<IoMailOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Send a message" />
					</button>
					<Modal modalDisplay={modalDisplaySendMessage} closeModal={closeModalSendMessage} modalSize={"std"} modalTitle={"Send a message"}>
						<JoinProjectSendMessageModal joinProject={request} closeModalSendMessage={closeModalSendMessage} type={"request"} projectId={projectId} />
					</Modal>
				</>
			)}
			{userPermissions.canViewJoinProjectRequests && (
				<>
					<button type="button" onClick={showModalReport}>
						<IoWarningOutline className={`m-1 hover:text-yellow-500 duration-100 transition ease-in-out ${size}`} title="Report" />
					</button>
					<Modal modalDisplay={modalDisplayReport} closeModal={closeModalReport} modalSize={"std"} modalTitle={"Report project request"}>
						<ProjectRequestReportModal request={request} closeModalReport={closeModalReport} projectId={projectId} />
					</Modal>
				</>
			)}
		</>
	);
};

export default ProjectRequestsActions;
