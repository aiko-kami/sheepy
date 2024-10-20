"use client";

import { useState } from "react";

import SignUpTitle from "@/components/Auth/SignUp/SignUpTitle";
import SignUpForm from "@/components/Auth/SignUp/SignUpForm";
import LoginLink from "@/components/Auth/SignUp/LoginLink";

import Modal from "@/components/Modals/Modal";
import TermsOfUseModal from "@/components/Modals/Auth/TermsOfUseModal";

const SignUpMenu = () => {
	const [modalDisplay, setModalDisplay] = useState(false);

	const closeModal = () => {
		setModalDisplay(false);
	};

	return (
		<>
			<div className="flex flex-col-reverse py-20 md:flex-row justify-evenly items-center flex-wrap h-full">
				<div className="md:w-3/5 w-full max-w-md px-10">
					<SignUpForm setModalDisplay={setModalDisplay} />
					<LoginLink />
				</div>
				<SignUpTitle />
			</div>
			<Modal modalDisplay={modalDisplay} closeModal={closeModal} modalSize={"std"} modalTitle={"Terms of Use"}>
				<TermsOfUseModal closeModal={closeModal} />
			</Modal>
		</>
	);
};

export default SignUpMenu;
