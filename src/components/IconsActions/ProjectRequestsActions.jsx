"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import JoinProjectDetailsModal from "@/components/Modals/ProjectEdit/JoinProjectDetailsModal";
import ProjectRequestAcceptModal from "@/components/Modals/ProjectEdit/ProjectRequestAcceptModal";
import ProjectRequestDeclineModal from "@/components/Modals/ProjectEdit/ProjectRequestDeclineModal";
import JoinProjectSendMessageModal from "@/components/Modals/ProjectEdit/JoinProjectSendMessageModal";
import ProjectRequestReportModal from "@/components/Modals/ProjectEdit/ProjectRequestReportModal";
import IconButton from "@/components/Buttons/IconButton";

import { IoEyeOutline, IoCheckmarkCircleOutline, IoCloseCircleOutline, IoMailOutline, IoWarningOutline, IoBan } from "react-icons/io5";

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
					<IconButton btnColor={"cyan"} action={showModalDetails}>
						<IoEyeOutline className={size} title="View request" />
					</IconButton>
					<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} closeModalWithBackground={closeModalDetails} modalSize={"std"} modalTitle={"View request"}>
						<JoinProjectDetailsModal joinProject={request} type={"request"} />
					</Modal>
				</>
			)}
			{userPermissions.canViewJoinProjectRequests && userPermissions.canEditJoinProjectRequests && (
				<>
					<IconButton btnColor={"green"} action={showModalAccept}>
						<IoCheckmarkCircleOutline className={size} title="Accept request" />
					</IconButton>
					<Modal modalDisplay={modalDisplayAccept} closeModal={closeModalAccept} closeModalWithBackground={closeModalAccept} modalSize={"std"} modalTitle={"Accept request"}>
						<ProjectRequestAcceptModal request={request} closeModalAccept={closeModalAccept} projectId={projectId} />
					</Modal>

					<IconButton btnColor={"red"} action={showModalDecline}>
						<IoCloseCircleOutline className={size} title="Decline request" />
					</IconButton>
					<Modal modalDisplay={modalDisplayDecline} closeModal={closeModalDecline} closeModalWithBackground={closeModalDecline} modalSize={"std"} modalTitle={"Decline request"}>
						<ProjectRequestDeclineModal request={request} closeModalDecline={closeModalDecline} projectId={projectId} />
					</Modal>

					<IconButton btnColor={"violet"} action={showModalSendMessage}>
						<IoMailOutline className={size} title="Send a message" />
					</IconButton>
					<Modal modalDisplay={modalDisplaySendMessage} closeModal={closeModalSendMessage} modalSize={"std"} modalTitle={"Send a message"}>
						<JoinProjectSendMessageModal joinProject={request} closeModalSendMessage={closeModalSendMessage} type={"request"} projectId={projectId} />
					</Modal>
				</>
			)}
			{userPermissions.canViewJoinProjectRequests && (
				<>
					<IconButton btnColor={"amber"} action={showModalReport}>
						<IoWarningOutline className={size} title="Report" />
					</IconButton>
					<Modal modalDisplay={modalDisplayReport} closeModal={closeModalReport} modalSize={"std"} modalTitle={"Report project request"}>
						<ProjectRequestReportModal request={request} closeModalReport={closeModalReport} projectId={projectId} />
					</Modal>
				</>
			)}
			{!userPermissions.canViewJoinProjectRequests && <IoBan className={`text-gray-500 ${size}`} title="No action allowed" />}
		</>
	);
};

export default ProjectRequestsActions;
