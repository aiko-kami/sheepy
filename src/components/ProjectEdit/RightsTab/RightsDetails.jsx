"use client";

import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";
import RightsTable from "@/components/Tables/ProjectEdit/RightsTable";

const RightsDetails = ({ projectId, membersProjectRights, headers, userPermissions, children }) => {
	const [formState, setFormState] = useState(
		membersProjectRights.map((member) => ({
			userId: member.user.userId,
			permissions: { ...member.permissions },
		}))
	);

	const handleCheckboxChange = (userId, right) => {
		setFormState((prevState) => {
			const newState = prevState.map((member) => {
				if (member.userId === userId) {
					return {
						...member,
						permissions: {
							...member.permissions,
							[right]: !member.permissions[right],
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
					const areAllSelected = Object.values(member.permissions).every(Boolean);
					// Toggle all rights based on current state
					const updatedRights = Object.keys(member.permissions).reduce((rights, key) => {
						rights[key] = !areAllSelected;
						return rights;
					}, {});

					return { ...member, permissions: updatedRights };
				}
				return member;
			})
		);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		const formDataToSubmit = {
			projectId: projectId,
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
						{membersProjectRights && membersProjectRights.length !== 0 ? (
							<>
								<div className="w-full">
									{!userPermissions.canEditRights && <p className="text-xs text-right italic text-pink-700 mb-2 mr-2">You do not have permission to edit user rights</p>}
									<div className="w-full mb-8 overflow-x-auto shadow-md sm:rounded-lg">
										{/* Rights Table */}

										<RightsTable
											members={membersProjectRights}
											formState={formState}
											onChange={handleCheckboxChange}
											onSelectAll={handleSelectAll}
											headers={headers}
											userPermissions={userPermissions}
										/>
									</div>
									{/* Submit Button */}
									{userPermissions.canEditRights && (
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
									)}
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
