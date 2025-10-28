"use client";

import Link from "next/link";
import { useState } from "react";
import { IoArrowForward, IoBuild } from "react-icons/io5";

import Modal from "@/components/Modals/Modal";
import ProjectApplicationModal from "@/components/Modals/ProjectPublic/ProjectApplicationModal";
import { Button, ButtonCircle } from "@/components/Buttons/Buttons";

const ActionButtons = ({ projectLink, talentsNeeded }) => {
	const [modalDisplay, setModalDisplay] = useState(false);

	const showModal = () => {
		setModalDisplay(true);
	};
	const closeModal = () => {
		setModalDisplay(false);
	};

	return (
		<>
			{/* Button join project */}
			<div className="text-center flex justify-between w-full gap-4">
				<Button btnProps={{ btnSize: "sm-std", type: "button", action: showModal }}>
					<div className="flex items-center">
						Apply <IoArrowForward className="text-2xl ml-2 mt-0.5" />
					</div>
				</Button>
				<Link href={`/projects/${projectLink}/edit/general`}>
					<ButtonCircle btnProps={{ btnSize: "2xl", type: "button", btnColor: "green" }}>
						<IoBuild />
					</ButtonCircle>
				</Link>
			</div>
			<Modal modalDisplay={modalDisplay} closeModal={closeModal} modalSize={"xl"} modalTitle={"You want to join this project?"}>
				<ProjectApplicationModal closeModal={closeModal} talentsNeeded={talentsNeeded} />
			</Modal>
		</>
	);
};
export default ActionButtons;
