"use client";

import { useState } from "react";
import Link from "next/link";

import Modal from "@/components/Modals/Modal";
import AttachmentRemoveModal from "@/components/Modals/ProjectEdit/AttachmentRemoveModal";
import AttachmentReportModal from "@/components/Modals/ProjectEdit/AttachmentReportModal";

import { IoEyeOutline, IoCloseCircleOutline, IoArrowDownCircleOutline, IoWarningOutline } from "react-icons/io5";

const AttachmentsActions = ({ projectId, attachment, userPermissions, iconSize }) => {
	const [modalDisplayRemove, setModalDisplayRemove] = useState(false);
	const [modalDisplayReport, setModalDisplayReport] = useState(false);

	const showModalRemove = () => {
		setModalDisplayRemove(true);
	};
	const closeModalRemove = () => {
		setModalDisplayRemove(false);
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
			{userPermissions.canViewAttachments && (
				<>
					<Link href={attachment.link} rel="noopener noreferrer" target="_blank">
						<IoEyeOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="View attachment" />
					</Link>
				</>
			)}
			{userPermissions.canRemoveAttachments && (
				<>
					<button type="button" onClick={showModalRemove}>
						<IoCloseCircleOutline className={`m-1 hover:text-red-400 duration-100 transition ease-in-out ${size}`} title="Remove attachment" />
					</button>
					<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} closeModalWithBackground={closeModalRemove} modalSize={"sm"} modalTitle={"Remove attachment"}>
						<AttachmentRemoveModal attachment={attachment} projectId={projectId} closeModalRemove={closeModalRemove} />
					</Modal>
				</>
			)}
			{userPermissions.canViewAttachments && (
				<>
					<button type="button">
						<IoArrowDownCircleOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Download" />
					</button>
				</>
			)}
			{userPermissions.canViewAttachments && (
				<>
					<button type="button" onClick={showModalReport}>
						<IoWarningOutline className={`m-1 hover:text-yellow-500 duration-100 transition ease-in-out ${size}`} title="Report" />
					</button>
					<Modal modalDisplay={modalDisplayReport} closeModal={closeModalReport} modalSize={"sm"} modalTitle={"Report attachment"}>
						<AttachmentReportModal attachment={attachment} projectId={projectId} closeModalReport={closeModalReport} />
					</Modal>
				</>
			)}
		</>
	);
};

export default AttachmentsActions;
