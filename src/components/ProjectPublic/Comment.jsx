"use client";

import { useState } from "react";
import Link from "next/link";
import { DateTime } from "luxon";
import { IoArrowUndoOutline, IoClose } from "react-icons/io5";

import CommentReplyForm from "@/components/Forms/CommentReplyForm";

const Comment = ({ comment }) => {
	const { username, userId, profilePicture, dateTime, message, isOwner, answers } = comment;
	const relativeDate = DateTime.fromISO(dateTime).toRelative();

	const [displayReply, setDisplayReply] = useState(false);

	const handleReplyClick = () => {
		setDisplayReply((prevDisplayReply) => !prevDisplayReply);
	};

	const handleReportClick = () => {
		console.log("🚀 ~ handleReportClick ~ :", "💥 Comment reported! 💥");
	};

	const handleReplySubmit = () => {
		setDisplayReply(false);
	};
	return (
		<>
			<Link href={`/users/${userId}`} className="min-w-12 h-12 rounded-full">
				<img className={`object-cover w-12 h-12 border-2 ${isOwner ? "border-blue-500" : "border-red-500"} rounded-full `} alt="profile picture" src={profilePicture} />
			</Link>
			<div className="flex-col mt-1">
				<div className="flex flex-wrap items-end px-4 font-bold">
					<Link href={`/users/${userId}`}>
						<span>{username}</span>
					</Link>
					<span className="ml-2 text-sm font-normal text-gray-300">{relativeDate}</span>
					{isOwner && (
						<div className="mt-1 sm:mt-0 sm:ml-2">
							<span className="py-1 px-2.5 text-white font-bold text-xs text-nowrap duration-200 rounded cursor-default bg-blue-500">Project Owner</span>
						</div>
					)}
				</div>
				<p className="ml-2 p-3 text-sm font-medium text-justify">{message}</p>
				<div className="flex items-center justify-between mb-1">
					<div className="flex items-center">
						{displayReply ? (
							<button className="ml-4" title="Close form reply" onClick={handleReplyClick}>
								<IoClose className="w-6 h-6 text-gray-400 hover:text-gray-300" />
							</button>
						) : (
							<button className="ml-4" title="Reply to the comment" onClick={handleReplyClick}>
								<IoArrowUndoOutline className="w-5 h-5 text-gray-400 hover:text-gray-300" />
							</button>
						)}
						<span className="ml-2">{answers?.length ? `${answers.length} ${answers.length === 1 ? "reply" : "replies"}` : null}</span>
					</div>
					<button className="flex items-center text-gray-400 hover:text-gray-300" title="Report comment" onClick={handleReportClick}>
						<span className="sm:mr-4">Report</span>
					</button>
				</div>
				<CommentReplyForm displayReply={displayReply} handleReplySubmit={handleReplySubmit} />
			</div>
		</>
	);
};
export default Comment;
