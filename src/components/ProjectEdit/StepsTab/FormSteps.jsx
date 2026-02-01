"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Steps from "@/components/ProjectEdit/StepsTab/Steps";
import { ApiUpdateProjectSteps } from "@/lib/api/projectEditionServer";
import { SUCCESS, ERRORS } from "@/lib/constants";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

const FormSteps = ({ projectId, steps, statusesList, userPermissions }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		updatedBy: steps.updatedBy,
		createdAt: steps.createdAt,
		updatedAt: steps.updatedAt,
		projectSteps: steps.stepsList.map((step, index) => ({
			id: step.id ?? `step-${index}`,
			title: step.title ?? "",
			details: step.details ?? "",
			published: Boolean(step.published),
			statusId: step.status?.statusId ?? "",
		})),
	});

	const onChange = (updatedSteps) => {
		setFormInputs((prevState) => ({
			...prevState,
			projectSteps: updatedSteps,
		}));
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			if (!userPermissions.canEditSteps) {
				showErrorToast(ERRORS.PROJECT_PERMISSIONS.EDIT_STEPS);
				return;
			}

			const payload = {
				projectId,
				steps: formInputs.projectSteps.map(({ title, details, published, statusId }) => ({
					title,
					details,
					published,
					statusId,
				})),
			};

			const result = await ApiUpdateProjectSteps(projectId, payload);
			if (!result.ok) {
				showErrorToast(result.message || ERRORS.PROJECT_STEPS.UPDATE_FAILED);
				return;
			}

			showSuccessToast(SUCCESS.PROJECT_STEPS.UPDATE);
			router.refresh();
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	const addStep = () => {
		const newStep = {
			id: `${(formInputs.projectSteps.length || 0) + 1}`,
			title: "",
			details: "",
			statusId: statusesList?.[0]?.statusId ?? null,
			published: false,
		};

		// Update the form state with the new step
		const updatedSteps = [...formInputs.projectSteps, newStep];
		onChange(updatedSteps);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* Project steps information */}
				<Steps formInputs={formInputs} onChange={onChange} addStep={addStep} statusesList={statusesList} userPermissions={userPermissions} />
			</form>
		</>
	);
};
export default FormSteps;
