"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import UpdateMemberModal from "@/components/Modals/ProjectEdit/UpdateMemberModal";
import RemoveMemberModal from "@/components/Modals/ProjectEdit/RemoveMemberModal";
import ProjectRequestReportModal from "@/components/Modals/ProjectEdit/ProjectRequestReportModal";
import ProjectRequestAcceptModal from "@/components/Modals/ProjectEdit/ProjectRequestAcceptModal";
import ProjectRequestDeclineModal from "@/components/Modals/ProjectEdit/ProjectRequestDeclineModal";

import Link from "next/link";

import { IoEyeOutline, IoPersonOutline, IoCheckmarkCircleOutline, IoCloseCircleOutline, IoMailOutline, IoWarningOutline } from "react-icons/io5";

const ProjectRequestsActions = ({ projectId, request, projectPermissions, iconSize }) => {
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
			{request.actions.view && (
				<button type="button" onClick={showModalDetails}>
					<IoEyeOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="View request" />
				</button>
			)}
			{request.actions.accept && (
				<>
					<button type="button" onClick={showModalAccept}>
						<IoCheckmarkCircleOutline className={`m-1 hover:text-green-400 duration-100 transition ease-in-out ${size}`} title="Accept request" />
					</button>
					<Modal modalDisplay={modalDisplayAccept} closeModal={closeModalAccept} modalSize={"std"} modalTitle={"Accept request"}>
						<ProjectRequestAcceptModal request={request} closeModalAccept={closeModalAccept} />
					</Modal>
				</>
			)}
			{request.actions.decline && (
				<>
					<button type="button" onClick={showModalDecline}>
						<IoCloseCircleOutline className={`m-1 hover:text-red-400 duration-100 transition ease-in-out ${size}`} title="Decline request" />
					</button>
					<Modal modalDisplay={modalDisplayDecline} closeModal={closeModalDecline} modalSize={"std"} modalTitle={"Decline request"}>
						<ProjectRequestDeclineModal request={request} closeModalDecline={closeModalDecline} />
					</Modal>
				</>
			)}
			{request.actions.sendMessage && (
				<button type="button" onClick={showModalSendMessage}>
					<IoMailOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Send a message" />
				</button>
			)}
			{request.actions.report && (
				<>
					<button type="button" onClick={showModalReport}>
						<IoWarningOutline className={`m-1 hover:text-yellow-500 duration-100 transition ease-in-out ${size}`} title="Report" />
					</button>
					<Modal modalDisplay={modalDisplayReport} closeModal={closeModalReport} modalSize={"std"} modalTitle={"Report project request"}>
						<ProjectRequestReportModal request={request} closeModalReport={closeModalReport} />
					</Modal>
				</>
			)}
		</>
	);
};

export default ProjectRequestsActions;
