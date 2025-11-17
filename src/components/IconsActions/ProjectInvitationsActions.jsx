"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import JoinProjectDetailsModal from "@/components/Modals/ProjectEdit/JoinProjectDetailsModal";
import ProjectInvitationEditModal from "@/components/Modals/ProjectEdit/ProjectInvitationEditModal";
import ProjectInvitationCancelModal from "@/components/Modals/ProjectEdit/ProjectInvitationCancelModal";
import JoinProjectSendMessageModal from "@/components/Modals/ProjectEdit/JoinProjectSendMessageModal";
import IconButton from "@/components/Buttons/IconButton";

import { IoEyeOutline, IoCreateOutline, IoCloseCircleOutline, IoMailOutline, IoBan } from "react-icons/io5";

const ProjectInvitationsActions = ({ projectId, invitation, talentsNeeded, userPermissions, iconSize }) => {
	const [modalDisplayDetails, setModalDisplayDetails] = useState(false);
	const [modalDisplayEdit, setModalDisplayEdit] = useState(false);
	const [modalDisplayCancel, setModalDisplayCancel] = useState(false);
	const [modalDisplaySendMessage, setModalDisplaySendMessage] = useState(false);

	const showModalDetails = () => {
		setModalDisplayDetails(true);
	};
	const closeModalDetails = () => {
		setModalDisplayDetails(false);
	};
	const showModalEdit = () => {
		setModalDisplayEdit(true);
	};
	const closeModalEdit = () => {
		setModalDisplayEdit(false);
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
			{userPermissions.canViewJoinProjectInvitations && (
				<>
					<IconButton btnColor={"cyan"} action={showModalDetails}>
						<IoEyeOutline className={size} title="View invitation" />
					</IconButton>
					<Modal modalDisplay={modalDisplayDetails} closeModal={closeModalDetails} closeModalWithBackground={closeModalDetails} modalSize={"std"} modalTitle={"View invitation"}>
						<JoinProjectDetailsModal joinProject={invitation} type={"invitation"} />
					</Modal>
				</>
			)}
			{userPermissions.canViewJoinProjectInvitations && userPermissions.canEditJoinProjectInvitations && (
				<>
					<IconButton btnColor={"blue"} action={showModalEdit}>
						<IoCreateOutline className={size} title="Edit invitation" />
					</IconButton>
					<Modal modalDisplay={modalDisplayEdit} closeModal={closeModalEdit} modalSize={"std"} modalTitle={"Edit invitation"}>
						<ProjectInvitationEditModal invitation={invitation} closeModalEdit={closeModalEdit} projectId={projectId} talentsNeeded={talentsNeeded} />
					</Modal>

					<IconButton btnColor={"red"} action={showModalCancel}>
						<IoCloseCircleOutline className={size} title="Cancel invitation" />
					</IconButton>
					<Modal modalDisplay={modalDisplayCancel} closeModal={closeModalCancel} closeModalWithBackground={closeModalCancel} modalSize={"std"} modalTitle={"Cancel invitation"}>
						<ProjectInvitationCancelModal invitation={invitation} closeModalCancel={closeModalCancel} projectId={projectId} />
					</Modal>

					<IconButton btnColor={"violet"} action={showModalSendMessage}>
						<IoMailOutline className={size} title="Send a message" />
					</IconButton>
					<Modal modalDisplay={modalDisplaySendMessage} closeModal={closeModalSendMessage} modalSize={"std"} modalTitle={"Send a message"}>
						<JoinProjectSendMessageModal joinProject={invitation} closeModalSendMessage={closeModalSendMessage} type={"invitation"} projectId={projectId} />
					</Modal>
				</>
			)}
			{!userPermissions.canViewJoinProjectInvitations && !userPermissions.canEditJoinProjectInvitations && <IoBan className={`text-gray-500 ${size}`} title="No action allowed" />}
		</>
	);
};

export default ProjectInvitationsActions;
