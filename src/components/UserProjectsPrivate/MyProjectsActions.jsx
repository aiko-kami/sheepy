import Link from "next/link";

import { IoConstructOutline, IoDocumentLockOutline, IoDocumentTextOutline, IoChatboxEllipsesOutline } from "react-icons/io5";

const MyProjectsActions = ({ projectId, projectPermissions, iconSize }) => {
	let size;
	switch (iconSize) {
		case "sm":
			size = "text-xl";
			break;
		case "std":
			size = "text-2xl";
			break;
		case "lg":
			size = "text-3xl";
			break;
		default:
			size = "text-2xl";
	}

	return (
		<>
			<Link href={`/projects/${projectId}`}>
				<IoDocumentTextOutline className={`mx-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Go to project page" />
			</Link>
			{projectPermissions.isPrivateAllowed && (
				<Link href={`/projects/${projectId}`}>
					<IoDocumentLockOutline className={`mx-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Go to project private page" />
				</Link>
			)}
			{projectPermissions.isConfigureAllowed && (
				<Link href={`/projects/${projectId}`}>
					<IoConstructOutline className={`mx-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Configure project" />
				</Link>
			)}
			{projectPermissions.isChatAllowed && (
				<Link href={`/projects/${projectId}`}>
					<IoChatboxEllipsesOutline className={`mx-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Go to project discussion" />
				</Link>
			)}
		</>
	);
};

export default MyProjectsActions;
