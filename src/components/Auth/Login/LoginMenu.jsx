"use client";

import { useState } from "react";

import LoginTitle from "@/components/Auth/Login/LoginTitle";
import LoginForm from "@/components/Auth/Login/LoginForm";
import OtherLoginMethods from "@/components/Auth/Login/OtherLoginMethods";
import SignUpLink from "@/components/Auth/Login/SignUpLink";

import Modal from "@/components/Modals/Modal";
import ForgotPasswordModal from "@/components/Modals/ForgotPasswordModal";

const LoginMenu = () => {
	const [modalDisplay, setModalDisplay] = useState(false);

	const closeModal = () => {
		setModalDisplay(false);
	};

	return (
		<>
			<div className="flex flex-col py-20 md:flex-row justify-evenly items-center flex-wrap h-full">
				<LoginTitle />
				<div className="md:w-3/5 w-full max-w-md px-10">
					<LoginForm setModalDisplay={setModalDisplay} />
					<OtherLoginMethods />
					<SignUpLink />
				</div>
			</div>
			<Modal modalDisplay={modalDisplay} closeModal={closeModal} modalSize={"sm"} modalTitle={"Forgot your password?"}>
				<ForgotPasswordModal closeModal={closeModal} />
			</Modal>
		</>
	);
};

export default LoginMenu;
