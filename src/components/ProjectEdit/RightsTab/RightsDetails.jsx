"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import { Button } from "@/components/Buttons/Buttons";
import RightsTable from "@/components/Tables/ProjectEdit/RightsTable";

import { ApiUpdateProjectMembersRights } from "@/lib/api/projectEditionServer";
import ERRORS from "@/lib/constants/errors";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { filterPermissions } from "@/utils/formHandlers";

const RightsDetails = ({ projectId, membersProjectRights, headers, userPermissions, children }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState(
		membersProjectRights.map((member) => ({
			userId: member.user.userId,
			role: member.role,
			permissions: { ...member.permissions },
		}))
	);

	const handleCheckboxChange = (userId, right) => {
		setFormInputs((prevState) => {
			const newState = prevState.map((member) => {
				if (member.userId === userId && member.role !== "owner") {
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
		setFormInputs((prevState) =>
			prevState.map((member) => {
				if (member.userId === userId && member.role !== "owner") {
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

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			if (!userPermissions.canEditRights) {
				showErrorToast(ERRORS.PROJECT_EDIT.EDIT_RIGHTS);
				return;
			}

			const allowedRights = headers.labels.map((l) => l.right);

			const payload = {
				projectId,
				members: formInputs
					.filter((member) => member.role !== "owner")
					.map((member) => ({
						userId: member.userId,
						permissions: filterPermissions(member.permissions, allowedRights),
					})),
			};
			const result = await ApiUpdateProjectMembersRights(projectId, payload);
			if (!result.ok) {
				showErrorToast(result.message || "Failed to update project rights.");
				return;
			}

			showSuccessToast("Project rights have been updated.");
			router.refresh();
		} catch (error) {
			showErrorToast(error.message);
		}
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
									{!userPermissions.canEditRights && (
										<div className="mb-4">
											<PermissionsErrorPane message={ERRORS.PROJECT_EDIT.EDIT_RIGHTS} />
										</div>
									)}
									<div className="w-full mb-8 overflow-x-auto shadow-md sm:rounded-lg">
										{/* Rights Table */}

										<RightsTable
											members={membersProjectRights}
											formInputs={formInputs}
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
