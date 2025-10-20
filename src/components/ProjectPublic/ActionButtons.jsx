"use client";

import Link from "next/link";
import { useState } from "react";
import { IoArrowForward, IoBuild } from "react-icons/io5";

import Modal from "@/components/Modals/Modal";
import ProjectApplicationModal from "@/components/Modals/ProjectPublic/ProjectApplicationModal";
import { Button } from "@/components/Buttons/Buttons";

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
			<div className="text-center flex justify-center gap-2">
				<div className="">
					<Button btnProps={{ btnSize: "std", type: "button", action: showModal }}>
						<div className="flex items-center">
							Apply for this project <IoArrowForward className="text-2xl ml-2 mt-0.5" />
						</div>
					</Button>
				</div>
				<div className="">
					<Link href={`/projects/${projectLink}/edit/general`}>
						<Button btnProps={{ btnSize: "std", type: "button", btnColor: "green" }}>
							<div className="flex items-center">
								Edit project <IoBuild className="text-2xl ml-2 mt-0.5" />
							</div>
						</Button>
					</Link>
				</div>
			</div>
			<Modal modalDisplay={modalDisplay} closeModal={closeModal} modalSize={"xl"} modalTitle={"You want to join this project?"}>
				<ProjectApplicationModal closeModal={closeModal} talentsNeeded={talentsNeeded} />
			</Modal>
		</>
	);
};
export default ActionButtons;
