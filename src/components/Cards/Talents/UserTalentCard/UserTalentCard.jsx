"use client";

import { useState } from "react";

import UserTalentCardModal from "@/components/Modals/UserPublic/UserTalentCardModal";
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
			<div className="rounded-lg min-w-full shadow-2xl bg-blue-900 hover:cursor-pointer" onClick={showModal}>
				<div className="p-4 text-center">
					<h2 className="font-semibold text-lg py-1 line-clamp-1">{talent.name}</h2>
					<p className="py-1 line-clamp-3">{talent.description}</p>
					<button type="button" className="italic underline " onClick={showModal}>
						Read more
					</button>
				</div>
			</div>
			<Modal modalDisplay={modalDisplay} closeModalWithBackground={closeModal} closeModal={closeModal} modalSize={"2xl"} modalTitle={talent.name}>
				<UserTalentCardModal closeModal={closeModal} talent={talent} />
			</Modal>
		</>
	);
};

export default UserTalentCard;
