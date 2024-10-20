"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";
import Modal from "@/components/Modals/Modal";
import ProjectApplicationModal from "@/components/Modals/ProjectPublic/ProjectApplicationModal";

const TalentsNeeded = ({ project, user }) => {
	const [modalDisplay, setModalDisplay] = useState(false);
	const [selectedRole, setSelectedRole] = useState("");

	const showModal = (role) => {
		setSelectedRole(role);
		setModalDisplay(true);
	};

	const closeModal = () => {
		setModalDisplay(false);
		setSelectedRole("");
	};

	return (
		<>
			<h2 className="font-semibold text-3xl mb-3">Talents needed</h2>
			<hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
			<div className="mt-5 mb-0 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:mx-8">
				{project.talentsNeeded.map((talent, index) => (
					<React.Fragment key={index}>
						<div className="text-gray-300 text-lg mb-8 mr-2 flex items-center h-full col-span-2">
							<Image src={project.talentProfilePicture} className="object-cover rounded-full w-10 h-10 mr-3" alt="talent profile picture" height={0} width={0} sizes="100vw" />
							<p className="overflow-auto hyphens-auto ">{talent.role}</p>
						</div>
						<div className="flex items-center">
							<Button btnProps={{ btnSize: "sm", type: "button", action: () => showModal(talent.role) }}>
								<div className="flex">
									Apply
									<IoArrowForward className="text-lg ml-1 mt-0.5" />
								</div>
							</Button>
						</div>
					</React.Fragment>
				))}
				<Modal modalDisplay={modalDisplay} closeModal={closeModal} modalSize={"xl"} modalTitle={"You want to join this project?"}>
					<ProjectApplicationModal closeModal={closeModal} talentsNeeded={project.talentsNeeded} roleSelected={selectedRole} />
				</Modal>
			</div>
		</>
	);
};
export default TalentsNeeded;
