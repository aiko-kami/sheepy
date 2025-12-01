"use client";

import { useState } from "react";

import { IoArrowUpCircle, IoAddOutline } from "react-icons/io5";
import InvitationsTable from "@/components/Tables/ProjectEdit/InvitationsTable";
import { Button } from "@/components/Buttons/Buttons";
import Modal from "@/components/Modals/Modal";
import ProjectNewInvitationModal from "@/components/Modals/ProjectEdit/ProjectNewInvitationModal";
import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import ERRORS from "@/lib/constants/errors";

const JoinInvitations = ({ talentsNeeded, projectId, joinProjectInvitations, user, userPermissions }) => {
	const [modalDisplayNewInvitation, setModalDisplayNewInvitation] = useState(false);

	const showModalNewInvitation = () => {
		setModalDisplayNewInvitation(true);
	};
	const closeModalNewInvitation = () => {
		setModalDisplayNewInvitation(false);
	};

	return (
		<>
			{/* Join invitations */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoArrowUpCircle className="mr-2 text-2xl" />
				Invitations to join the project
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Join invitations */}
				<div className="mb-8">
					{userPermissions.canViewJoinProjectInvitations ? (
						<>
							{userPermissions.canEditJoinProjectInvitations && (
								<div className="pl-2 mb-6">
									<Button
										btnProps={{
											type: "button",
											btnColor: "blue",
											action: showModalNewInvitation,
										}}
									>
										<div className="flex items-center">
											New invitation <IoAddOutline className="text-2xl ml-2 mt-0.5" />
										</div>
									</Button>
									<Modal modalDisplay={modalDisplayNewInvitation} closeModal={closeModalNewInvitation} modalSize={"std"} modalTitle={"New invitation"}>
										<ProjectNewInvitationModal closeModal={closeModalNewInvitation} />
									</Modal>
								</div>
							)}

							{joinProjectInvitations && joinProjectInvitations.length !== 0 ? (
								<div className="w-full overflow-x-auto shadow-md sm:rounded-lg mb-6">
									<InvitationsTable joinProjectInvitations={joinProjectInvitations} talentsNeeded={talentsNeeded} projectId={projectId} userPermissions={userPermissions} />
								</div>
							) : (
								<p className=" text-xl text-center pt-10">
									<span className="italic">No invitations found</span>
								</p>
							)}
						</>
					) : (
						<div className="w-full">
							<PermissionsErrorPane message={ERRORS.PROJECT_EDIT.VIEW_INVITATIONS} />
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default JoinInvitations;
