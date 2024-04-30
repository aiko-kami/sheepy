"use client";

import UserTalentCardModal from "./UserTalentCardModal";
import Link from "next/link";
import { useState } from "react";

const UserTalentCard = () => {
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
					<h2 className="font-semibold text-xl py-1">UX/UI Designer</h2>
					<p className="py-1">Builder of intuitive digital experiences</p>
					<div className="py-2 flex flex-wrap justify-center">
						<Link href="/tags/ocean">
							<div className="inline-flex items-center bg-blue-300 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">User research</div>
						</Link>
						<Link href="/tags/mecanics">
							<div className="inline-flex items-center bg-orange-400 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Wireframing</div>
						</Link>
						<Link href="/tags/exploration">
							<div className="inline-flex items-center bg-green-400 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Prototyping</div>
						</Link>
					</div>
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
