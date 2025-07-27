"use client";

import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export const WindowFrame = ({ title, children, onClose, onSaveDraft, hasUnsavedChanges = false }) => {
	const [showCloseModal, setShowCloseModal] = useState(false);

	const handleCloseClick = () => {
		if (hasUnsavedChanges) {
			setShowCloseModal(true);
		} else {
			onClose();
		}
	};

	const handleConfirmClose = (action) => {
		setShowCloseModal(false);

		switch (action) {
			case "save":
				onSaveDraft();
				onClose();
				break;
			case "discard":
				onClose();
				break;
			case "cancel":
				// Do nothing, just close modal
				break;
		}
	};

	return (
		<>
			<div className="bg-black/50 backdrop-blur-sm z-40" />

			<div className="flex items-center justify-center">
				<div className="w-full h-full max-w-8xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden pb-6 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
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
							<button onClick={handleCloseClick} className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-all duration-200 group">
								<IoCloseOutline className="h-4 w-4 group-hover:scale-110 transition-transform" />
							</button>
						</div>
					</div>

					{/* Window Content */}
					<div className="h-[calc(100%-4rem)] overflow-auto pt-6">{children}</div>
				</div>
			</div>
		</>
	);
};
