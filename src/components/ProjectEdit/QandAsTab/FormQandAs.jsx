"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import QandAs from "@/components/ProjectEdit/QandAsTab/QandAs";

const FormQandAs = ({ projectId, projectLink, status, statusBgColor, QAs }) => {
	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		updatedBy: QAs.updatedBy,
		createdAt: QAs.createdAt,
		updatedAt: QAs.updatedAt,
		projectQnas: QAs.QAsList,
	});

	const onChange = (updatedQnas) => {
		setFormInputs((prevState) => ({
			...prevState,
			projectQnas: updatedQnas,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formInputs);
	};

	const addQna = () => {
		const newQna = {
			id: `${(formInputs.projectQnas.length || 0) + 1}`,
			question: "",
			response: "",
			published: false,
		};

		// Update the form state with the new Qna
		const updatedQnas = [...formInputs.projectQnas, newQna];
		onChange(updatedQnas);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project Q&As information */}
				<QandAs formInputs={formInputs} onChange={onChange} addQna={addQna} />
			</form>
		</>
	);
};
export default FormQandAs;
