"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";
import Modal from "@/components/Modals/Modal";
import ProjectApplicationModal from "@/components/Modals/ProjectPublic/ProjectApplicationModal";

import { useAuth } from "@/contexts/AuthContext";

const TalentsNeeded = ({ project }) => {
	const { user } = useAuth();

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
			<div className="lg:mx-4 border rounded-xl p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-xl mb-4 sm:mb-8">
				<h2 className="text-xl font-bold mb-6">Talents needed</h2>
				<div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:mx-8">
					{project.talentsNeeded.map((talent, index) => (
						<React.Fragment key={index}>
							<div className="text-slate-300 text-lg mb-6 last:mb-0 mr-2 flex items-center h-full col-span-2">
								<Image src={project.talentProfilePicture} className="object-cover rounded-full w-10 h-10 mr-3" alt="talent profile picture" height={0} width={0} sizes="100vw" />
								<p className="overflow-auto hyphens-auto ">{talent}</p>
							</div>
							<div className="flex items-center justify-end">
								<Button btnProps={{ btnSize: "sm", type: "button", action: () => showModal(talent) }}>
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
			</div>
		</>
	);
};
export default TalentsNeeded;
