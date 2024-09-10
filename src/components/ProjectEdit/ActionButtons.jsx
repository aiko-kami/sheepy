"use client";

import { useState } from "react";
import { IoArrowForward, IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";

import Modal from "@/components/Modals/Modal";
import ProjectApplicationModal from "@/components/Modals/ProjectApplicationModal";
import { Button, ButtonCircle } from "@/components/Buttons/Buttons";

const HeadSection = ({ project, user }) => {
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
			<div className="text-center mb-8">
				<Button btnProps={{ btnSize: "std", type: "button", action: showModal }}>
					<div className="flex items-center">
						Apply for this project <IoArrowForward className="text-2xl ml-2 mt-0.5" />
					</div>
				</Button>
			</div>
			<Modal modalDisplay={modalDisplay} closeModal={closeModal} modalSize={"xl"} modalTitle={"You want to join this project?"}>
				<ProjectApplicationModal closeModal={closeModal} talentsNeeded={project.talentsNeeded} />
			</Modal>
			{/* Buttons Like and Share */}
			<div className="flex justify-center gap-8 mb-2">
				<ButtonCircle btnProps={{ btnSize: "2xl", type: "button", btnColor: "grayBorder" }}>
					<IoBookmarkOutline />
				</ButtonCircle>

				<ButtonCircle btnProps={{ btnSize: "2xl", type: "button", btnColor: "grayBorder" }}>
					<IoShareSocialOutline />
				</ButtonCircle>
			</div>
		</>
	);
};
export default HeadSection;