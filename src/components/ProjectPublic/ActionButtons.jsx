"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

import { IoArrowForward, IoBuild } from "react-icons/io5";

import Modal from "@/components/Modals/Modal";
import ProjectApplicationModal from "@/components/Modals/ProjectPublic/ProjectApplicationModal";
import { Button, ButtonCircle } from "@/components/Buttons/Buttons";
import { showErrorToast } from "@/utils/toast";
import { ERRORS, errorNotConnectedWithLinks } from "@/lib/constants";

const ActionButtons = ({ projectLink, projectId, talentsNeeded, user, isUserProjectMember, userAppliedProject }) => {
	const [modalDisplay, setModalDisplay] = useState(false);

	const showModal = () => {
		if (!user) {
			// Redirect to sign-up page if user is not authenticated
			showErrorToast(errorNotConnectedWithLinks());
			return;
		}

		if (userAppliedProject) {
			// If the user has already applied, show a message or redirect to a different page
			showErrorToast(ERRORS.PROJECT_REQUESTS.ALREADY_APPLIED);

			return;
		}
		setModalDisplay(true);
	};
	const closeModal = () => {
		setModalDisplay(false);
	};

	return (
		<>
			<div className="text-center flex justify-between w-full gap-4">
				{/* Button join project */}
				{!isUserProjectMember && (
					<Button btnProps={{ btnSize: "sm-std", type: "button", action: showModal }}>
						<div className="flex items-center">
							Apply <IoArrowForward className="text-2xl ml-2 mt-0.5" />
						</div>
					</Button>
				)}

				{/* Button edit project */}
				{isUserProjectMember && (
					<Link href={`/projects/${projectLink}/edit/general`}>
						<ButtonCircle btnProps={{ btnSize: "2xl", type: "button", btnColor: "green", title: "Edit project" }}>
							<IoBuild />
						</ButtonCircle>
					</Link>
				)}
			</div>
			<Modal modalDisplay={modalDisplay} closeModal={closeModal} modalSize={"xl"} modalTitle={"You want to join this project?"}>
				<ProjectApplicationModal closeModal={closeModal} talentsNeeded={talentsNeeded} projectId={projectId} />
			</Modal>
		</>
	);
};
export default ActionButtons;
