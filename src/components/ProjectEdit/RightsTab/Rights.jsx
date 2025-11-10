import { Button } from "@/components/Buttons/Buttons";
import { IoLockOpen, IoSettingsSharp, IoPeople, IoDocuments } from "react-icons/io5";

import RightsDetails from "@/components/ProjectEdit/RightsTab/RightsDetails";

const Rights = ({ projectId, membersProjectRights }) => {
	const headersGlobal = {
		type: "project",
		labels: [
			{ label: "status", right: "canEditStatus" },
			{ label: "visibility", right: "canEditVisibility" },
			{ label: "location", right: "canEditLocation" },
			{ label: "steps", right: "canEditSteps" },
			{ label: "Q&As", right: "canEditQAs" },
			{ label: "members rights", right: "canEditRights" },
		],
	};

	const headersGeneral = {
		type: "project",
		labels: [
			{ label: "title", right: "canEditTitle" },
			{ label: "category", right: "canEditCategory" },
			{ label: "sub-category", right: "canEditSubCategory" },
			{ label: "summary", right: "canEditSummary" },
			{ label: "description", right: "canEditDescription" },
			{ label: "goal", right: "canEditGoal" },
			{ label: "cover", right: "canEditCover" },
			{ label: "tags", right: "canEditTags" },
		],
	};

	const headersMembers = {
		type: "members",
		labels: [
			{ label: "edit members", right: "canEditMembers" },
			{ label: "remove members", right: "canRemoveMembers" },
			{ label: "talents needed", right: "canEditTalentsNeeded" },
			{ label: "view requests", right: "canViewJoinProjectRequests" },
			{ label: "edit requests", right: "canEditJoinProjectRequests" },
			{ label: "view invitations", right: "canViewJoinProjectInvitations" },
			{ label: "edit invitations", right: "canEditJoinProjectInvitations" },
		],
	};

	const headersAttachments = {
		type: "attachments",
		labels: [
			{ label: "view document", right: "canViewAttachments" },
			{ label: "add document", right: "canAddAttachments" },
			{ label: "edit document", right: "canEditAttachments" },
			{ label: "remove document", right: "canRemoveAttachments" },
		],
	};

	const headersCopy = {
		type: "project",
		labels: ["start date", "phase", "objectives", "motivation"],
	};

	return (
		<>
			{/* Users project rights */}
			<div className="mb-8 lg:mb-14">
				<RightsDetails projectId={projectId} membersProjectRights={membersProjectRights} headers={headersGlobal}>
					<IoLockOpen className="mr-2 text-2xl" />
					Global users rights
				</RightsDetails>
			</div>
			{/* General rights */}
			<div className="mb-8 lg:mb-14">
				<RightsDetails projectId={projectId} membersProjectRights={membersProjectRights} headers={headersGeneral}>
					<IoSettingsSharp className="mr-2 text-2xl" />
					General users rights
				</RightsDetails>
			</div>
			{/* Members rights */}
			<div className="mb-8 lg:mb-14">
				<RightsDetails projectId={projectId} membersProjectRights={membersProjectRights} headers={headersMembers}>
					<IoPeople className="mr-2 text-2xl" />
					Members Users rights
				</RightsDetails>
			</div>
			{/* Attachments rights */}
			<div className="mb-8 lg:mb-14">
				<RightsDetails projectId={projectId} membersProjectRights={membersProjectRights} headers={headersAttachments}>
					<IoDocuments className="mr-2 text-2xl" />
					Attachments users rights
				</RightsDetails>
			</div>
		</>
	);
};
export default Rights;
