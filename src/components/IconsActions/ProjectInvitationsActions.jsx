"use client";

import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import UpdateMemberModal from "@/components/Modals/UpdateMemberModal";
import RemoveMemberModal from "@/components/Modals/RemoveMemberModal";

import Link from "next/link";

import { IoEyeOutline, IoCreateOutline, IoCloseCircleOutline, IoMailOutline, IoWarningOutline } from "react-icons/io5";

const ProjectInvitationsActions = ({ projectId, invitation, projectPermissions, iconSize }) => {
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
			{invitation.actions.view && (
				<button type="button" onClick={showModalUpdate}>
					<IoEyeOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="View invitation" />
				</button>
			)}
			{invitation.actions.edit && (
				<button type="button">
					<IoCreateOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Edit invitation" />
				</button>
			)}
			{invitation.actions.cancel && (
				<button type="button" onClick={showModalRemove}>
					<IoCloseCircleOutline className={`m-1 hover:text-red-400 duration-100 transition ease-in-out ${size}`} title="Cancel invitation" />
				</button>
			)}
			{invitation.actions.sendMessage && (
				<button type="button">
					<IoMailOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Send a message" />
				</button>
			)}
		</>
	);
};

export default ProjectInvitationsActions;
