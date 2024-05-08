"use client";

import UserTalentCardModal from "./UserTalentCardModal";
import Link from "next/link";
import { useState } from "react";

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
			<UserTalentCardModal modalDisplay={modalDisplay} closeModal={closeModal} />
		</>
	);
};

export default UserTalentCard;
