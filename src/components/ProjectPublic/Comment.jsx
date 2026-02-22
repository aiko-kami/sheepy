"use client";

import { useState } from "react";
import Link from "next/link";
import { DateTime } from "luxon";
import { IoArrowUndoOutline, IoArrowUndo, IoClose } from "react-icons/io5";
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai";

import CommentForm from "@/components/Forms/CommentForm";
import { BadgeOwner } from "@/components/Badges/Badges";

const Comment = ({ projectId, comment, members }) => {
	const { author, commentId, content, createdAt, isUserOwnComment, hasUserReported, likesCount, unlikesCount, hasUserliked, hasUserdisliked } = comment.comment;

	const isOwnerComment = members?.some((member) => member.user.userId === author.userId && member.role === "owner");

	const answers = comment.answers || [];

	const relativeDate = DateTime.fromISO(createdAt).toRelative();

	const [displayReply, setDisplayReply] = useState(false);

	const handleReplyClick = () => {
		setDisplayReply((prevDisplayReply) => !prevDisplayReply);
	};

	const likeComment = () => {
		setDisplayReply((prevDisplayReply) => !prevDisplayReply);
	};

	const unlikeComment = () => {
		setDisplayReply((prevDisplayReply) => !prevDisplayReply);
	};

	const dislikeComment = () => {
		setDisplayReply((prevDisplayReply) => !prevDisplayReply);
	};

	const undislikeComment = () => {
		setDisplayReply((prevDisplayReply) => !prevDisplayReply);
	};

	const editComment = () => {
		setDisplayReply((prevDisplayReply) => !prevDisplayReply);
	};

	const deleteComment = () => {
		setDisplayReply((prevDisplayReply) => !prevDisplayReply);
	};

	const handleReportClick = () => {
		console.log("🚀 ~ handleReportClick ~ :", "💥 Comment reported! 💥");
	};

	return (
		<div className="flex w-full">
			<Link href={`/users/${author.userId}`} className="min-w-12 h-12 rounded-full">
				<img className={`object-cover w-12 h-12 border-2 ${isOwnerComment ? "border-yellow-600" : "border-blue-500"} rounded-full `} alt="profile picture" src={author.profilePicture.link} />
			</Link>
			<div className="mt-1 flex-1">
				<div className="flex flex-wrap items-end px-4 font-bold">
					<Link href={`/users/${author.userId}`}>
						<span>{author.username}</span>
					</Link>
					<span className="ml-2 text-sm font-normal text-gray-300">{relativeDate}</span>
					{isOwnerComment && (
						<div className="mt-1 sm:mt-0 sm:ml-2">
							<BadgeOwner size={"xs"} />
						</div>
					)}
				</div>
				<p className="ml-2 p-3 text-sm font-medium text-justify">{content}</p>
				<div className="flex items-center justify-between mb-1">
					<div className="flex items-center">
						<div className="flex items-center gap-4">
							{displayReply ? (
								<button className="ml-4" title="Close form reply" onClick={handleReplyClick}>
									<IoClose className="w-6 h-6 text-gray-300 hover:text-white" />
								</button>
							) : (
								<button className="ml-4 group flex items-center gap-1 text-gray-300 hover:text-white" title="Reply to the comment" onClick={handleReplyClick}>
									<IoArrowUndoOutline className="w-5 h-5 group-hover:hidden" />
									<IoArrowUndo className="w-5 h-5 hidden group-hover:block" />
									Reply
								</button>
							)}

							<div className="flex items-center text-nowrap text-base">
								{hasUserliked ? (
									<button className="flex items-center gap-1 relative group mr-1" title="Unlike this comment" onClick={unlikeComment}>
										<AiFillLike className="text-white" />
										<span>{likesCount}</span>
									</button>
								) : (
									<button className="flex items-center gap-1 relative group mr-1" title="Like this comment" onClick={likeComment}>
										<AiOutlineLike className="text-gray-300 group-hover:hidden" />
										<AiFillLike className="text-white hidden group-hover:block" />
										<span>{likesCount}</span>
									</button>
								)}
							</div>
							<div className="flex items-center text-nowrap text-base">
								{hasUserdisliked ? (
									<button className="flex items-center gap-1 relative group mr-1" title="Unlike this comment" onClick={undislikeComment}>
										<AiFillDislike className="text-white" />
										<span>{unlikesCount}</span>
									</button>
								) : (
									<button className="flex items-center gap-1 relative group mr-1" title="Like this comment" onClick={dislikeComment}>
										<AiOutlineDislike className="text-gray-300 group-hover:hidden" />
										<AiFillDislike className="text-white hidden group-hover:block" />
										<span>{unlikesCount}</span>
									</button>
								)}
							</div>
							{isUserOwnComment && (
								<div className="flex items-center text-nowrap gap-3">
									<button className="group flex items-center gap-1 text-gray-300 hover:text-white" title="Reply to the comment" onClick={editComment}>
										Edit
									</button>
									<button className="group flex items-center gap-1 text-gray-300 hover:text-white" title="Reply to the comment" onClick={deleteComment}>
										Delete
									</button>
								</div>
							)}
						</div>
					</div>
					<div className="flex items-center gap-3">
						<span className="text-gray-400 ml-2">{answers?.length ? `${answers.length} ${answers.length === 1 ? "reply" : "replies"}` : null}</span>
						{hasUserReported ? (
							<button className="sm:mr-4 text-yellow-600 hover:text-yellow-500 hover:underline" title="Unreport comment" onClick={handleReportClick}>
								Unreport
							</button>
						) : (
							<button className="sm:mr-4 text-gray-300 hover:text-white hover:underline" title="Report comment" onClick={handleReportClick}>
								Report
							</button>
						)}
					</div>
				</div>
				{displayReply && <CommentForm projectId={projectId} commentId={commentId} setDisplayReply={setDisplayReply} />}
			</div>
		</div>
	);
};
export default Comment;
