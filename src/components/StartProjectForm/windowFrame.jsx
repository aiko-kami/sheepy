"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { IoCloseOutline } from "react-icons/io5";
import Modal from "@/components/Modals/Modal";
import CloseWindowFrameModal from "@/components/Modals/ProjectCreation/CloseWindowFrameModal";

export const WindowFrame = ({ title, currentStep, children }) => {
	const router = useRouter();

	const [modalDisplayCloseWindow, setModalDisplayCloseWindow] = useState(false);
	const closeWindow = () => {
		router.push("/");
	};

	const showModalCloseWindow = () => {
		setModalDisplayCloseWindow(true);
	};
	const closeModalCloseWindow = () => {
		setModalDisplayCloseWindow(false);
	};

	return (
		<>
			<div className="bg-black/50 backdrop-blur-sm z-40" />

			<div className="flex items-center justify-center">
				<div
					className={`${
						currentStep == 0 ? "from-blue-900/30 via-blue-900 to-purple-900/40" : "from-gray-900 via-blue-900 to-gray-900"
					} w-full h-full max-w-8xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br`}
				>
					{/* Window Title Bar */}
					<div className="flex items-center justify-between px-3 py-1 bg-gray-800/50 border-b border-gray-700/50">
						{/* Window Controls (Left) */}
						<div className="flex items-center min-w-20"></div>

						{/* Window Title (Center) */}
						<div className="flex-1 text-center">
							<h1 className="font-semibold text-gray-200">{title}</h1>
						</div>

						{/* Window Actions (Right) */}
						<div className="flex items-center space-x-2">
							<button
								onClick={() => {
									if (currentStep === 0) {
										closeWindow();
									} else {
										showModalCloseWindow();
									}
								}}
								className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-all duration-200 group"
							>
								<IoCloseOutline className="h-4 w-4 group-hover:scale-110 transition-transform" />
							</button>
						</div>
					</div>

					{/* Window Content */}
					<div className="h-[calc(100%-4rem)] overflow-auto pt-6">{children}</div>
				</div>
			</div>
			<Modal modalDisplay={modalDisplayCloseWindow} closeModal={closeModalCloseWindow} modalSize={"sm"} modalTitle={"Close Project Creation?"}>
				<CloseWindowFrameModal closeModalCloseWindow={closeModalCloseWindow} />
			</Modal>
		</>
	);
};
