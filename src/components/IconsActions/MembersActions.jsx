"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import UpdateMemberModal from "@/components/Modals/ProjectEdit/UpdateMemberModal";
import SendMessageMemberModal from "@/components/Modals/ProjectEdit/SendMessageMemberModal";
import RemoveMemberModal from "@/components/Modals/ProjectEdit/RemoveMemberModal";
import IconButton from "@/components/Buttons/IconButton";

import Link from "next/link";

import { IoBuildOutline, IoCloseCircleOutline, IoChatboxEllipsesOutline, IoPersonOutline } from "react-icons/io5";

const MembersActions = ({ projectId, user, role, talent, startDate, userPermissions, iconSize }) => {
	const [modalDisplayUpdate, setModalDisplayUpdate] = useState(false);
	const [modalDisplayMessage, setModalDisplayMessage] = useState(false);
	const [modalDisplayRemove, setModalDisplayRemove] = useState(false);

	const showModalUpdate = () => {
		setModalDisplayUpdate(true);
	};
	const closeModalUpdate = () => {
		setModalDisplayUpdate(false);
	};
	const showModalMessage = () => {
		setModalDisplayMessage(true);
	};
	const closeModalMessage = () => {
		setModalDisplayMessage(false);
	};
	const showModalRemove = () => {
		setModalDisplayRemove(true);
	};
	const closeModalRemove = () => {
		setModalDisplayRemove(false);
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
			{userPermissions?.canEditMembers && (
				<>
					<IconButton btnColor={"blue"} action={showModalUpdate}>
						<IoBuildOutline className={size} title="Edit member" />
					</IconButton>
					<Modal modalDisplay={modalDisplayUpdate} closeModal={closeModalUpdate} modalSize={"std"} modalTitle={"Update member"}>
						<UpdateMemberModal member={user} role={role} talent={talent} startDate={startDate} closeModalUpdate={closeModalUpdate} />
					</Modal>
				</>
			)}
			<IconButton btnColor={"violet"} action={showModalMessage}>
				<IoChatboxEllipsesOutline className={size} title="Send a message" />
			</IconButton>
			<Modal modalDisplay={modalDisplayMessage} closeModal={closeModalMessage} modalSize={"std"} modalTitle={"Send a message"}>
				<SendMessageMemberModal member={user} closeModalMessage={closeModalMessage} />
			</Modal>

			<Link href={`/users/${user.userId}`}>
				<IconButton btnColor={"blue"}>
					<IoPersonOutline className={size} title="Visit user profile" />
				</IconButton>
			</Link>
			{userPermissions?.canRemoveMembers && (
				<>
					<IconButton btnColor={"red"} action={showModalRemove}>
						<IoCloseCircleOutline className={size} title="Remove from the project" />
					</IconButton>
					<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} closeModalWithBackground={closeModalRemove} modalSize={"std"} modalTitle={"Remove member from the project"}>
						<RemoveMemberModal member={user} role={role} talent={talent} startDate={startDate} closeModalRemove={closeModalRemove} />
					</Modal>
				</>
			)}
		</>
	);
};

export default MembersActions;
