"use client";
import { useState } from "react";

import Modal from "@/components/Modals/Modal";
import RemoveCertificationModal from "@/components/Modals/UserPrivate/RemoveCertificationModal";
import InputField from "@/components/Forms/InputField";
import CertificationsList from "@/components/Forms/CertificationInputForm/CertificationsList";
import AddCertificationButton from "@/components/Forms/CertificationInputForm/AddCertificationButton";

import { showErrorToast } from "@/utils/toast";

const CertificationInputForm = ({ certifications = [], disabled = false }) => {
	const [certificationInput, setCertificationInput] = useState("");
	const [modalDisplayRemove, setModalDisplayRemove] = useState(false);
	const [certificationToRemove, setCertificationToRemove] = useState(null);

	const addCertification = async () => {
		const certification = (certificationInput || "").trim();

		// Basic validations with early returns
		if (!certification) return showErrorToast("Please enter a certification.");

		// Case-insensitive duplicate check (assumes stored items have .certification)
		const alreadyExists = certifications.some((obj) => String(obj || "").toLowerCase() === certification.toLowerCase());
		if (alreadyExists) return showErrorToast("This certification is already present in the list.");

		// Max limit check (max 20)
		if (certifications.length >= 20) {
			return showErrorToast("You can only add up to 20 certifications.");
		}
		certifications.push(certification);
		setCertificationInput("");
	};

	const handleCertificationInputChange = (e) => {
		setCertificationInput(e.target.value);
	};

	const closeModalRemove = () => {
		setCertificationToRemove(null);
		setModalDisplayRemove(false);
	};

	const removeCertification = async (certification) => {
		// Basic validations with early returns
		if (!certification) {
			showErrorToast("Please select a certification to remove.");
			return;
		}

		setCertificationToRemove(certification);
		setModalDisplayRemove(true);
	};

	const confirmRemoveCertification = async () => {
		if (!certificationToRemove) return;

		const updatedCertifications = certifications.filter((s) => s !== certificationToRemove);
		certifications.splice(0, certifications.length, ...updatedCertifications);
		setCertificationInput("");
		setCertificationToRemove(null);
		setModalDisplayRemove(false);
	};

	return (
		<div>
			{!disabled && (
				<div className="mb-6 max-w-140 relative">
					<div className="flex items-center">
						<div className="w-full mr-2 relative">
							<InputField
								inputName="certification"
								inputType="text"
								label="Add a certification"
								inputValue={certificationInput}
								onChange={handleCertificationInputChange}
								disabled={disabled}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										addCertification();
									}
								}}
							/>
						</div>

						<div className="min-w-fit">
							<AddCertificationButton handleAddCertification={addCertification} />
						</div>
					</div>
				</div>
			)}

			{/* List of certifications */}
			<CertificationsList certifications={certifications} removeCertification={removeCertification} disabled={disabled} />

			{!disabled && (
				<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} closeModalWithBackground={closeModalRemove} modalSize={"sm"} modalTitle={"Remove certification"}>
					<RemoveCertificationModal certification={certificationToRemove} onConfirm={confirmRemoveCertification} closeModalRemove={closeModalRemove} />
				</Modal>
			)}
		</div>
	);
};

export default CertificationInputForm;
