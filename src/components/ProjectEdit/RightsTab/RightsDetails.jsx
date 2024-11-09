"use client";

import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";
import RightsTable from "@/components/Tables/ProjectEdit/RightsTable";

const RightsDetails = ({ project, headers, children }) => {
	const [formState, setFormState] = useState(
		project.members.map((member) => ({
			userId: member.userId,
			memberRights: { ...member.memberRights },
		}))
	);

	const handleCheckboxChange = (userId, right) => {
		setFormState((prevState) => {
			const newState = prevState.map((member) => {
				if (member.userId === userId) {
					return {
						...member,
						memberRights: {
							...member.memberRights,
							[right]: !member.memberRights[right],
						},
					};
				}
				return member;
			});
			return newState;
		});
	};

	const handleSelectAll = (userId) => {
		setFormState((prevState) =>
			prevState.map((member) => {
				if (member.userId === userId) {
					const areAllSelected = Object.values(member.memberRights).every(Boolean);
					// Toggle all rights based on current state
					const updatedRights = Object.keys(member.memberRights).reduce((rights, key) => {
						rights[key] = !areAllSelected;
						return rights;
					}, {});

					return { ...member, memberRights: updatedRights };
				}
				return member;
			})
		);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		const formDataToSubmit = {
			projectId: project.projectId,
			members: formState,
		};

		console.log("Updated rights data:", formDataToSubmit);
	};

	return (
		<>
			{/* Project rights */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">{children}</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				<form onSubmit={onSubmit}>
					{/* Project members */}
					<div className="mb-8 flex justify-center">
						{/* General rights members table */}
						{project.members && project.members.length !== 0 ? (
							<>
								<div className="w-full">
									<div className="mb-8 w-full overflow-x-auto shadow-md sm:rounded-lg">
										<RightsTable members={project.members} formState={formState} onChange={handleCheckboxChange} onSelectAll={handleSelectAll} headers={headers} />
									</div>
									{/* Submit Button */}
									<div className="flex justify-center">
										<Button
											btnProps={{
												type: "submit",
												btnColor: "blue",
											}}
										>
											Update rights
										</Button>
									</div>
								</div>
							</>
						) : (
							<p className=" text-xl text-center pt-10">
								<span className="italic">No members found</span>
							</p>
						)}
					</div>
				</form>
			</div>
		</>
	);
};
export default RightsDetails;
