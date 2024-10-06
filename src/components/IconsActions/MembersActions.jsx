"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import UpdateMemberModal from "@/components/Modals/UpdateMemberModal";
import RemoveMemberModal from "@/components/Modals/RemoveMemberModal";

import Link from "next/link";

import { IoBuildOutline, IoCloseCircleOutline, IoChatboxEllipsesOutline, IoPersonOutline } from "react-icons/io5";

const MembersActions = ({ projectId, member, projectPermissions, iconSize }) => {
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
			{projectPermissions.canEditMembers && (
				<>
					<button type="button" onClick={showModalUpdate}>
						<IoBuildOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Edit member" />
					</button>
					<Modal modalDisplay={modalDisplayUpdate} closeModal={closeModalUpdate} modalSize={"std"} modalTitle={"Update member"}>
						<UpdateMemberModal member={member} closeModal={closeModalUpdate} />
					</Modal>
				</>
			)}
			<Link href={`/projects/${projectId}`}>
				<IoChatboxEllipsesOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Send a message" />
			</Link>
			<Link href={`/users/${member.userId}`}>
				<IoPersonOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Visit user profile" />
			</Link>
			{projectPermissions.canRemoveMembers && (
				<>
					<button type="button" onClick={showModalRemove}>
						<IoCloseCircleOutline className={`m-1 hover:text-red-400 duration-100 transition ease-in-out ${size}`} title="Remove from the project" />
					</button>
					<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} modalSize={"std"} modalTitle={"Remove member from the project"}>
						<RemoveMemberModal member={member} closeModal={closeModalRemove} />
					</Modal>
				</>
			)}
		</>
	);
};

export default MembersActions;
