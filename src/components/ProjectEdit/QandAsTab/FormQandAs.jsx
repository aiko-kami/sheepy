"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import QandAs from "@/components/ProjectEdit/QandAsTab/QandAs";
import { ApiUpdateProjectQAs } from "@/lib/api/projectEditionServer";
import { ERRORS, SUCCESS } from "@/lib/constants";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

const FormQandAs = ({ projectId, QAs, userPermissions }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		updatedBy: QAs.updatedBy,
		createdAt: QAs.createdAt,
		updatedAt: QAs.updatedAt,
		projectQnas: QAs.QAsList.map((QA, index) => ({
			id: QA.id ?? `QA-${index}`,
			question: QA.question ?? "",
			response: QA.response ?? "",
			published: Boolean(QA.published),
		})),
	});

	const onChange = (updatedQnas) => {
		setFormInputs((prevState) => ({
			...prevState,
			projectQnas: updatedQnas,
		}));
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			if (!userPermissions.canEditQAs) {
				showErrorToast(ERRORS.PROJECT_PERMISSIONS.EDIT_QNAS);
				return;
			}

			const payload = {
				projectId,
				QAs: formInputs.projectQnas.map(({ question, response, published }) => ({
					question,
					response,
					published,
				})),
			};

			const result = await ApiUpdateProjectQAs(projectId, payload);
			if (!result.ok) {
				showErrorToast(result.message || ERRORS.PROJECT_PERMISSIONS.EDIT_QNAS_FAILED);
				return;
			}

			showSuccessToast(SUCCESS.PROJECT_EDIT.UPDATE_QNAS_SUCCESS);
			router.refresh();
		} catch (error) {
			showErrorToast(error.message || ERRORS.PROJECT_QNAS.UPDATE_FAILED);
		}
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
				<QandAs formInputs={formInputs} onChange={onChange} addQna={addQna} userPermissions={userPermissions} />
			</form>
		</>
	);
};
export default FormQandAs;
