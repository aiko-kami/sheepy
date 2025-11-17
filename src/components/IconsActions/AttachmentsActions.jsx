"use client";

import { useState } from "react";
import Link from "next/link";

import Modal from "@/components/Modals/Modal";
import AttachmentRemoveModal from "@/components/Modals/ProjectEdit/AttachmentRemoveModal";
import AttachmentReportModal from "@/components/Modals/ProjectEdit/AttachmentReportModal";
import IconButton from "@/components/Buttons/IconButton";

import { IoEyeOutline, IoCloseCircleOutline, IoArrowDownCircleOutline, IoWarningOutline, IoBan } from "react-icons/io5";

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
						<IconButton btnColor={"cyan"}>
							<IoEyeOutline className={size} title="View attachment" />
						</IconButton>
					</Link>

					<IconButton btnColor={"fuchsia"}>
						<IoArrowDownCircleOutline className={size} title="Download" />
					</IconButton>
				</>
			)}
			{userPermissions.canRemoveAttachments && (
				<>
					<IconButton btnColor={"red"} action={showModalRemove}>
						<IoCloseCircleOutline className={size} title="Remove attachment" />
					</IconButton>
					<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} closeModalWithBackground={closeModalRemove} modalSize={"sm"} modalTitle={"Remove attachment"}>
						<AttachmentRemoveModal attachment={attachment} projectId={projectId} closeModalRemove={closeModalRemove} />
					</Modal>
				</>
			)}
			{userPermissions.canViewAttachments && (
				<>
					<IconButton btnColor={"amber"} action={showModalReport}>
						<IoWarningOutline className={size} title="Report" />
					</IconButton>
					<Modal modalDisplay={modalDisplayReport} closeModal={closeModalReport} modalSize={"sm"} modalTitle={"Report attachment"}>
						<AttachmentReportModal attachment={attachment} projectId={projectId} closeModalReport={closeModalReport} />
					</Modal>
				</>
			)}
			{!userPermissions.canViewAttachments && !userPermissions.canRemoveAttachments && <IoBan className={`text-gray-500 ${size}`} title="No action allowed" />}
		</>
	);
};

export default AttachmentsActions;
