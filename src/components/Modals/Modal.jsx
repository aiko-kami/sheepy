const Modal = ({ modalDisplay, closeModalWithBackground, closeModal, modalTitle, modalSize, children }) => {
	if (!modalDisplay) return null;

	let size;
	switch (modalSize) {
		case "sm":
			size = "min-w-9/10 sm:min-w-140 w-1/3";
			break;
		case "std":
			size = "w-9/10 md:w-full md:max-w-1/2";
			break;
		case "xl":
			size = "min-w-9/10 sm:min-w-140 w-3/5";
			break;
		case "2xl":
			size = "w-9/10 md:w-full md:max-w-2/3";
			break;
		default:
			size = "w-9/10 md:w-full md:max-w-1/2";
	}

	return (
		<>
			{/* Remove the scroll bar from the whole page */}
			<style jsx global>{`
				body {
					overflow: hidden;
				}
			`}</style>

			{/* background blur */}
			<div
				id="default-modal"
				tabIndex="-1"
				aria-hidden="true"
				className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full bg-black bg-opacity-25 backdrop-blur-sm"
				onClick={closeModalWithBackground}
			></div>

			{/* Modal window */}
			<div className={`fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${size} rounded-lg shadow bg-gray-700`}>
				{/* Modal title and cross button */}
				<div className="flex items-center justify-center p-3 md:p-4 rounded-t">
					<h3 className="text-2xl font-semibold text-white text-center my-2 mx-4">{modalTitle}</h3>
					<button
						type="button"
						className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute right-3 top-3 inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
						data-modal-hide="default-modal"
						onClick={closeModal}
					>
						<svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
						</svg>
						<span className="sr-only">Close modal</span>
					</button>
				</div>
				<div className="max-h-190 overflow-y-auto text-base text-white">
					<div className="px-4 md:px-10 pb-8 pt-2">{children}</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
