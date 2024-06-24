import Link from "next/link";
import { DateTime } from "luxon";
import { IoArrowUndoOutline, IoAlertOutline } from "react-icons/io5";

import { Badge } from "@/components/Badges/Badges";

const Comment = ({ comment }) => {
	const { username, userId, profilePicture, dateTime, message, isOwner, answers } = comment;
	const relativeDate = DateTime.fromISO(dateTime).toRelative();
	return (
		<>
			<Link href={`/users/${userId}`} className="min-w-12 h-12 rounded-full">
				<img className={`object-cover w-12 h-12 border-2 ${isOwner ? "border-blue-500" : "border-red-500"} rounded-full `} alt="profile picture" src={profilePicture} />
			</Link>
			<div className="flex-col mt-1">
				<div className="flex items-end px-4 font-bold">
					<Link href={`/users/${userId}`}>
						<span>{username}</span>
					</Link>
					<span className="ml-2 text-sm font-normal text-gray-300">{relativeDate}</span>
					{isOwner && (
						<div className="ml-2">
							<Badge badge={{ name: "Project Owner", size: "xs", bgColor: "bg-blue-500", bgColorHover: "bg-gray-800", link: `/users/${userId}` }} />
						</div>
					)}
				</div>
				<p className="ml-2 p-3 text-sm font-medium">{message}</p>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<button className="ml-4" title="Reply">
							<IoArrowUndoOutline className="w-5 h-5 text-gray-400 hover:text-gray-300" />
						</button>
						<span className="ml-2">{answers?.length ? `${answers.length} ${answers.length === 1 ? "reply" : "replies"}` : null}</span>
					</div>
					<button className="flex items-center text-gray-400 hover:text-gray-300" title="Report comment">
						<span className="sm:mr-4">Report</span>
					</button>
				</div>
			</div>
		</>
	);
};
export default Comment;
