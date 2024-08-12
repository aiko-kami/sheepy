"use client";

import { useState } from "react";

import UserTalentCardModal from "@/components/Modals/UserTalentCardModal";
import Modal from "@/components/Modals/Modal";

const UserTalentCard = ({ talent }) => {
	const [modalDisplay, setModalDisplay] = useState(false);

	const showModal = () => {
		setModalDisplay(true);
	};
	const closeModal = () => {
		setModalDisplay(false);
	};

	return (
		<>
			<div className="rounded-lg min-w-full shadow-2xl bg-blue-900">
				<div className="p-4 text-center">
					<h2 className="font-semibold text-xl py-1">{talent.name}</h2>
					<p className="py-1">{talent.description}</p>
					<button type="button" className="italic hover:underline" onClick={showModal}>
						Read more...
					</button>
				</div>
			</div>
			<Modal modalDisplay={modalDisplay} closeModalWithBackground={closeModal} closeModal={closeModal} modalSize={"2xl"} modalTitle={"UX/UI Designer"}>
				<UserTalentCardModal closeModal={closeModal} />
			</Modal>
		</>
	);
};

export default UserTalentCard;
