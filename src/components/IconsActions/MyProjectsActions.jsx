import Link from "next/link";

import { IoConstructOutline, IoDocumentLockOutline, IoDocumentTextOutline, IoChatboxEllipsesOutline } from "react-icons/io5";

const MyProjectsActions = ({ projectLink, isMember, iconSize }) => {
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
			<Link href={`/projects/${projectLink}`}>
				<IoDocumentTextOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Go to project page" />
			</Link>
			{isMember && (
				<>
					<Link href={`/projects/${projectLink}/edit/general`}>
						<IoDocumentLockOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Go to project private page" />
					</Link>
					<Link href={`/projects/${projectLink}/edit/general`}>
						<IoConstructOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Configure project" />
					</Link>
					<Link href={`/projects/${projectLink}/edit/general`}>
						<IoChatboxEllipsesOutline className={`m-1 hover:text-blue-400 duration-100 transition ease-in-out ${size}`} title="Go to project discussion" />
					</Link>
				</>
			)}
		</>
	);
};

export default MyProjectsActions;
