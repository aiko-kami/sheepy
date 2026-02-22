"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { DateTime } from "luxon";
import { IoArrowUndoOutline, IoArrowUndo, IoClose } from "react-icons/io5";
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai";

import CommentForm from "@/components/Forms/CommentForm";
import { BadgeOwner } from "@/components/Badges/Badges";
import { Avatar } from "@/components/Badges/Avatar";

import { ApiEditComment, ApiReportComment, ApiUnreportComment, ApiLikeComment, ApiUnlikeComment, ApiDislikeComment, ApiUndislikeComment, ApiDeleteComment } from "@/lib/api/projectsExtended";

import { showErrorToast } from "@/utils/toast";
import { ERRORS } from "@/lib/constants";

import { useAuth } from "@/contexts";

const Comment = ({ projectId, comment, members }) => {
	console.log("🚀 ~ Comment ~ comment:", comment);

	const router = useRouter();
	const { user } = useAuth();

	const { author, commentId, content, createdAt, isUserOwnComment, hasUserReported, likesCount, dislikesCount, hasUserLiked, hasUserDisliked } = comment.comment;

	const isOwnerComment = members?.some((member) => member.user.userId === author.userId && member.role === "owner");

	const answers = comment.answers || [];

	const relativeDate = DateTime.fromISO(createdAt).toRelative();

	const [displayReply, setDisplayReply] = useState(false);

	const handleReplyClick = () => {
		setDisplayReply((prevDisplayReply) => !prevDisplayReply);
	};

	const likeComment = async () => {
		if (!user) {
			showErrorToast(ERRORS.GENERIC.NOT_CONNECTED);
			return;
		}

		const payload = {
			projectId,
			commentId: commentId,
		};

		const result = await ApiLikeComment(payload);
		if (!result.ok) {
			showErrorToast(result.message || ERRORS.PROJECT_COMMENTS.LIKE_FAILED);
			return;
		}

		router.refresh();
	};

	const unlikeComment = async () => {
		if (!user) {
			showErrorToast(ERRORS.GENERIC.NOT_CONNECTED);
			return;
		}

		const payload = {
			projectId,
			commentId: commentId,
		};

		const result = await ApiUnlikeComment(payload);
		if (!result.ok) {
			showErrorToast(result.message || ERRORS.PROJECT_COMMENTS.UNLIKE_FAILED);
			return;
		}

		router.refresh();
	};

	const dislikeComment = async () => {
		if (!user) {
			showErrorToast(ERRORS.GENERIC.NOT_CONNECTED);
			return;
		}

		const payload = {
			projectId,
			commentId: commentId,
		};

		const result = await ApiDislikeComment(payload);
		if (!result.ok) {
			showErrorToast(result.message || ERRORS.PROJECT_COMMENTS.DISLIKE_FAILED);
			return;
		}

		router.refresh();
	};

	const undislikeComment = async () => {
		if (!user) {
			showErrorToast(ERRORS.GENERIC.NOT_CONNECTED);
			return;
		}

		const payload = {
			projectId,
			commentId: commentId,
		};

		const result = await ApiUndislikeComment(payload);
		if (!result.ok) {
			showErrorToast(result.message || ERRORS.PROJECT_COMMENTS.UNDISLIKE_FAILED);
			return;
		}

		router.refresh();
	};

	const reportComment = async () => {
		if (!user) {
			showErrorToast(ERRORS.GENERIC.NOT_CONNECTED);
			return;
		}

		const payload = {
			projectId,
			commentId: commentId,
		};

		const result = await ApiReportComment(payload);
		if (!result.ok) {
			showErrorToast(result.message || ERRORS.PROJECT_COMMENTS.REPORT_FAILED);
			return;
		}

		router.refresh();
	};

	const unreportComment = async () => {
		if (!user) {
			showErrorToast(ERRORS.GENERIC.NOT_CONNECTED);
			return;
		}

		const payload = {
			projectId,
			commentId: commentId,
		};

		const result = await ApiUnreportComment(payload);
		if (!result.ok) {
			showErrorToast(result.message || ERRORS.PROJECT_COMMENTS.UNREPORT_FAILED);
			return;
		}

		router.refresh();
	};

	const editComment = async () => {
		setDisplayReply((prevDisplayReply) => !prevDisplayReply);
	};

	const deleteComment = async () => {
		if (!user) {
			showErrorToast(ERRORS.GENERIC.NOT_CONNECTED);
			return;
		}

		const payload = {
			projectId,
			commentId: commentId,
		};

		const result = await ApiDeleteComment(payload);
		if (!result.ok) {
			showErrorToast(result.message || ERRORS.PROJECT_COMMENTS.REMOVE_FAILED);
			return;
		}

		router.refresh();
	};

	const handleReportClick = () => {
		console.log("🚀 ~ handleReportClick ~ :", "💥 Comment reported! 💥");
	};

	return (
		<div className="flex w-full">
			<Link href={`/users/${author.userId}`} className="w-12 h-12 rounded-full">
				<Avatar img={author.profilePicture?.link} size={"lg"} alt={"user profile picture"} />
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
							{user &&
								(displayReply ? (
									<button className="ml-4" title="Close form reply" onClick={handleReplyClick}>
										<IoClose className="w-6 h-6 text-gray-300 hover:text-white" />
									</button>
								) : (
									<button className="ml-4 group flex items-center gap-1 text-gray-300 hover:text-white" title="Reply to the comment" onClick={handleReplyClick}>
										<IoArrowUndoOutline className="w-5 h-5 group-hover:hidden" />
										<IoArrowUndo className="w-5 h-5 hidden group-hover:block" />
										Reply
									</button>
								))}

							<div className="flex items-center text-nowrap text-base">
								{hasUserLiked ? (
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
								{hasUserDisliked ? (
									<button className="flex items-center gap-1 relative group mr-1" title="Unlike this comment" onClick={undislikeComment}>
										<AiFillDislike className="text-white" />
										<span>{dislikesCount}</span>
									</button>
								) : (
									<button className="flex items-center gap-1 relative group mr-1" title="Like this comment" onClick={dislikeComment}>
										<AiOutlineDislike className="text-gray-300 group-hover:hidden" />
										<AiFillDislike className="text-white hidden group-hover:block" />
										<span>{dislikesCount}</span>
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
						{user &&
							(hasUserReported ? (
								<button className="sm:mr-4 text-yellow-600 hover:text-yellow-500 hover:underline" title="Unreport comment" onClick={unreportComment}>
									Unreport
								</button>
							) : (
								<button className="sm:mr-4 text-gray-300 hover:text-white hover:underline" title="Report comment" onClick={reportComment}>
									Report
								</button>
							))}
					</div>
				</div>
				{displayReply && <CommentForm projectId={projectId} commentId={commentId} setDisplayReply={setDisplayReply} />}
			</div>
		</div>
	);
};
export default Comment;
