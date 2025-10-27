"use client";

import { useState } from "react";
import { Button } from "@/components/Buttons/Buttons";
import QandAs from "@/components/ProjectEdit/QandAsTab/QandAs";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormQandAs = ({ project, projectLink }) => {
	const [formInputs, setFormInputs] = useState({
		projectId: project.projectId,
		updatedBy: project.qnas.updatedBy,
		createdAt: project.qnas.createdAt,
		updatedAt: project.qnas.updatedAt,
		projectQnas: project.qnas.qnasList,
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
				<div className="lg:grid grid-cols-5">
					<div className="p-2 mb-6">
						{/* Project Status and links */}
						<SideMenu project={project} projectLink={projectLink} />
					</div>
					<div className="col-span-4 lg:px-2 lg:pl-10">
						{/* Project Q&As information */}
						<QandAs formInputs={formInputs} onChange={onChange} addQna={addQna} />
						<div className="flex justify-center">
							<Button
								btnProps={{
									type: "submit",
									btnColor: "blue",
								}}
							>
								Save project
							</Button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};
export default FormQandAs;
