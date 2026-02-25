"use client";

import { useState } from "react";

import ProjectsActionsTable from "@/components/Tables/ProjectsActionsTable";
import JoinProjectTable from "@/components/Tables/JoinProjectTable";
import MyProjectsFilter from "@/components/User/UserProjectsPrivate/MyProjectsFilter";
import MyProjectsCards from "@/components/User/UserProjectsPrivate/MyProjectsCards";
import MyJoinProjectsCards from "@/components/User/UserProjectsPrivate/MyJoinProjectsCards";
import Notification from "@/components/Badges/Notification";
import DisplaySwitch from "@/components/Buttons/DisplaySwitch-V1";

import { ApiUpdateUserSettingsDisplayMode } from "@/lib/api/userServer";

import { showErrorToast } from "@/utils/toast";
import { ERRORS } from "@/lib/constants";

const MyProjects = ({ user, projects, projectsCount, joinProjectInvitations, joinProjectRequests }) => {
	const [displayMode, setDisplayMode] = useState(user.settings.displayMode);
	const [selectedProjectType, setSelectedProjectType] = useState("all");

	const notifications = user.notifications;

	// Handle change display mode
	const handleDisplayMode = async (mode) => {
		if (mode === displayMode) return;

		try {
			setDisplayMode(mode);

			const payload = {
				userNewData: {
					displayMode: mode,
				},
			};

			const result = await ApiUpdateUserSettingsDisplayMode(payload);
			if (!result.ok) {
				showErrorToast(result.message || ERRORS.USER_SETTINGS.DISPLAY_MODE);
				return;
			}
		} catch (error) {
			showErrorToast(error.message || ERRORS.USER_SETTINGS.DISPLAY_MODE);
		}
	};

	// Filter projects based on the selected project type
	const filterProjects = (projects, status) => {
		if (status === "drafts") {
			return projects.filter((project) => project.statusInfo?.currentStatus?.status.toLowerCase() === "draft");
		} else if (status === "submitted") {
			return projects.filter((project) => project.statusInfo?.currentStatus?.status.toLowerCase() === "submitted");
		} else {
			return projects;
		}
	};

	const filteredProjectsCreated = filterProjects(projects.created, selectedProjectType);

	return (
		<>
			<div className="flex justify-between items-start mb-4 sm:mb-8">
				{/* Filter projects */}
				<MyProjectsFilter selectedProjectType={selectedProjectType} setSelectedProjectType={setSelectedProjectType} onProjectTypeChange={setSelectedProjectType} />

				{/* Change display buttons */}
				{(projectsCount.onGoing > 0 || projectsCount.created > 0 || projectsCount.completed > 0 || projectsCount.like > 0) && (
					<DisplaySwitch displayMode={displayMode} handleDisplayMode={handleDisplayMode} />
				)}
			</div>

			{/* Projects I created */}
			{(selectedProjectType === "all" || selectedProjectType === "drafts" || selectedProjectType === "submitted" || selectedProjectType === "drafts") && (
				<>
					<h2 className="text-xl mb-2 sm:ml-4">Projects I created</h2>
					<p className="mb-6 sm:ml-4">The projects you created or for which you are the owner</p>
					{projects.created && projects.created.length !== 0 ? (
						<div className="mb-12 w-full overflow-x-auto">
							{displayMode === "table" && <ProjectsActionsTable projects={filteredProjectsCreated} />}
							{displayMode === "cards" && <MyProjectsCards projects={filteredProjectsCreated} />}
						</div>
					) : (
						<p className=" text-xl text-center mb-12 italic">No projects found</p>
					)}
					<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				</>
			)}

			{/* Projects I work on */}
			{selectedProjectType === "all" && (
				<>
					<h2 className="text-xl mb-2 sm:ml-4">Projects I work on</h2>
					<p className="mb-6 sm:ml-4">The projects for which you are a team member</p>
					{projects.onGoing && projects.onGoing.length !== 0 ? (
						<div className="mb-12 w-full overflow-x-auto">
							{displayMode === "table" && <ProjectsActionsTable projects={projects.onGoing} />}
							{displayMode === "cards" && <MyProjectsCards projects={projects.onGoing} />}
						</div>
					) : (
						<p className=" text-xl text-center mb-12 italic">No projects found</p>
					)}
					<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				</>
			)}

			{/* Projects I like */}
			{(selectedProjectType === "all" || selectedProjectType === "likes") && (
				<>
					<h2 className="text-xl mb-2 sm:ml-4">Projects I like</h2>
					<p className="mb-6 sm:ml-4">The projects you've shown appreciation for by giving a like</p>
					{projects.like && projects.like.length !== 0 ? (
						<div className="mb-12 w-full overflow-x-auto">
							{displayMode === "table" && <ProjectsActionsTable projects={projects.like} />}
							{displayMode === "cards" && <MyProjectsCards projects={projects.like} />}
						</div>
					) : (
						<p className=" text-xl text-center mb-12 italic">No projects found</p>
					)}
					<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				</>
			)}

			{/* Projects invitations */}
			{(selectedProjectType === "all" || selectedProjectType === "invitations") && (
				<>
					<h2 className="text-xl mb-2 sm:ml-4 inline-flex items-center justify-center">
						Projects invitations
						{notifications.invitationsNotif > 0 && (
							<div className="inline-flex items-center justify-center ml-2 mt-1">
								<Notification value={notifications.invitationsNotif} size={"sm"} notifColor={"pink"} />
							</div>
						)}
					</h2>
					<p className="mb-6 sm:ml-4">The invitations you received to join a project</p>
					{joinProjectInvitations && joinProjectInvitations.length !== 0 ? (
						<div className="mb-12 w-full overflow-x-auto">
							{displayMode === "table" && <JoinProjectTable joinProjects={joinProjectInvitations} type={"invitation"} />}
							{displayMode === "cards" && <MyJoinProjectsCards joinProjects={joinProjectInvitations} type={"invitation"} />}
						</div>
					) : (
						<p className=" text-xl text-center mb-12 italic">No invitations found</p>
					)}
					<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				</>
			)}

			{/* Projects requests */}
			{(selectedProjectType === "all" || selectedProjectType === "requests") && (
				<>
					<h2 className="text-xl mb-2 sm:ml-4 inline-flex items-center justify-center">
						Projects requests
						{notifications.requestsNotif > 0 && (
							<div className="inline-flex items-center justify-center ml-2 mt-1">
								<Notification value={notifications.requestsNotif} size={"sm"} notifColor={"pink"} />
							</div>
						)}
					</h2>
					<p className="mb-6 sm:ml-4">The requests you sent to join a project</p>
					{joinProjectRequests && joinProjectRequests.length !== 0 ? (
						<div className="mb-12 w-full overflow-x-auto">
							{displayMode === "table" && <JoinProjectTable joinProjects={joinProjectRequests} type={"request"} />}
							{displayMode === "cards" && <MyJoinProjectsCards joinProjects={joinProjectRequests} type={"request"} />}
						</div>
					) : (
						<p className=" text-xl text-center mb-12 italic">No requests found</p>
					)}
				</>
			)}
		</>
	);
};

export default MyProjects;
