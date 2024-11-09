import { Button } from "@/components/Buttons/Buttons";
import { IoLockOpen, IoSettingsSharp, IoPeople, IoDocuments } from "react-icons/io5";

import RightsDetails from "@/components/ProjectEdit/RightsTab/RightsDetails";

const Rights = ({ project }) => {
	const headersGlobal = [
		{ label: "project status", right: "canUpdateProjectStatus" },
		{ label: "project visibility", right: "canUpdateProjectVisibility" },
		{ label: "project project location", right: "canUpdateProjectLocation" },
		{ label: "project project steps", right: "canUpdateProjectSteps" },
		{ label: "project project Q&As", right: "canUpdateProjectQnAs" },
		{ label: "project members rights", right: "canUpdateMembersRights" },
	];

	const headersGeneral = [
		{ label: "title", right: "canUpdateProjectTitle" },
		{ label: "category", right: "canUpdateProjectCategory" },
		{ label: "sub-category", right: "canUpdateProjectSubCategory" },
		{ label: "summary", right: "canUpdateProjectSummary" },
		{ label: "description", right: "canUpdateProjectDescription" },
		{ label: "goal", right: "canUpdateProjectGoal" },
		{ label: "cover", right: "canUpdateProjectCover" },
		{ label: "tags", right: "canUpdateProjectTags" },
	];

	const headersMembers = [
		{ label: "edit members", right: "canUpdateEditMembers" },
		{ label: "remove members", right: "canRemoveMembers" },
		{ label: "talents needed", right: "canUpdateTalentsNeeded" },
		{ label: "view requests", right: "canViewRequests" },
		{ label: "edit requests", right: "canEditRequests" },
		{ label: "view invitations", right: "canViewInvitations" },
		{ label: "edit invitations", right: "canEditInvitations" },
	];

	const headersAttachments = [
		{ label: "view document", right: "canViewAttachments" },
		{ label: "add document", right: "canUpdateAddAttachments" },
		{ label: "edit document", right: "canUpdateEditAttachments" },
		{ label: "remove document", right: "canUpdateRemoveAttachments" },
	];

	const headersCopy = ["start date", "phase", "objectives", "motivation", "visibility"];

	return (
		<>
			{/* Users project rights */}
			<div className="mb-8 lg:mb-14">
				<RightsDetails project={project} headers={headersGlobal}>
					<IoLockOpen className="mr-2 text-2xl" />
					Global users rights
				</RightsDetails>
			</div>
			{/* General rights */}
			<div className="mb-8 lg:mb-14">
				<RightsDetails project={project} headers={headersGeneral}>
					<IoSettingsSharp className="mr-2 text-2xl" />
					General users rights
				</RightsDetails>
			</div>
			{/* Members rights */}
			<div className="mb-8 lg:mb-14">
				<RightsDetails project={project} headers={headersMembers}>
					<IoPeople className="mr-2 text-2xl" />
					Members Users rights
				</RightsDetails>
			</div>
			{/* Attachments rights */}
			<div className="mb-8 lg:mb-14">
				<RightsDetails project={project} headers={headersAttachments}>
					<IoDocuments className="mr-2 text-2xl" />
					Attachments users rights
				</RightsDetails>
			</div>
		</>
	);
};
export default Rights;
