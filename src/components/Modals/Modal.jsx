import Image from "next/image";
import Link from "next/link";

const Modal = ({ modalDisplay, closeModalWithBackground, children }) => {
	if (!modalDisplay) return null;

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
			{children}
		</>
	);
};

export default Modal;
