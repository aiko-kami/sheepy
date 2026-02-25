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
import Modal from "@/components/Modals/Modal";
import RemoveCommentModal from "@/components/Modals/ProjectPublic/RemoveCommentModal";

import { ApiReportComment, ApiUnreportComment, ApiLikeComment, ApiUnlikeComment, ApiDislikeComment, ApiUndislikeComment, ApiDeleteComment } from "@/lib/api/projectsExtended";

import { showErrorToast } from "@/utils/toast";
import { ERRORS } from "@/lib/constants";

import { useAuth } from "@/contexts";

const Comment = ({ projectId, comment, members }) => {
	const router = useRouter();
	const { user } = useAuth();

	const { author, commentId, content, createdAt, isUserOwnComment, hasUserReported, likesCount, dislikesCount, hasUserLiked, hasUserDisliked } = comment.comment;

	const isOwnerComment = members?.some((member) => member.user.userId === author.userId && member.role === "owner");

	const answers = comment.answers || [];

	const relativeDate = DateTime.fromISO(createdAt).toRelative();

	const [displayReply, setDisplayReply] = useState(false);
	const [displayEdit, setDisplayEdit] = useState(false);
	const [modalDisplayRemove, setModalDisplayRemove] = useState(false);

	const handleReplyClick = () => {
		setDisplayReply((prevDisplayReply) => !prevDisplayReply);
	};

	const handleEditClick = () => {
		setDisplayEdit((prevDisplayEdit) => !prevDisplayEdit);
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

	const closeModalRemove = () => {
		setModalDisplayRemove(false);
	};

	const removeComment = async () => {
		setModalDisplayRemove(true);
	};

	const confirmRemoveComment = async () => {
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
		setModalDisplayRemove(false);
	};

	return (
		<div className="w-full">
			<div className="flex mb-6">
				<Link href={`/users/${author.userId}`} className="w-12 h-12 rounded-full">
					<Avatar img={author.profilePicture?.link} size={"lg"} alt={"user profile picture"} />
				</Link>
				<div className="flex flex-wrap items-end px-4 font-bold">
					<Link href={`/users/${author.userId}`}>
						<span>{author.username}</span>
					</Link>
					<span className="ml-2 text-sm font-normal text-gray-300">{relativeDate}</span>
					{isOwnerComment && (
						<div className="w-full sm:w-auto mt-1.5 sm:mt-0 sm:ml-2">
							<BadgeOwner size={"xs"} />
						</div>
					)}
				</div>
			</div>
			<div className="flex-1 mb-5">
				{displayEdit ? (
					<div className="relative">
						<button className="absolute -top-7 right-0 ml-4" title="Close form reply" onClick={handleEditClick}>
							<IoClose className="w-6 h-6 text-gray-300 hover:text-white" />
						</button>

						<CommentForm projectId={projectId} content={content} commentId={commentId} setDisplayEdit={setDisplayEdit} action="edit" />
					</div>
				) : (
					<p className="ml-10 text-sm font-medium text-justify">{content}</p>
				)}
			</div>
			<div className="w-full px-1">
				<div className="flex items-end justify-between mb-1 text-sm sm:text-base">
					<div className="flex items-center">
						<div className="sm:flex items-center gap-3">
							<div className="flex items-center gap-3 mb-1 sm:mb-0 sm:order-2">
								<div className="flex items-center text-nowrap">
									{hasUserLiked ? (
										<button className="flex items-center gap-1 relative group" title="Unlike this comment" onClick={unlikeComment}>
											<AiFillLike className="text-white text-lg sm:text-xl" />
											<span>{likesCount}</span>
										</button>
									) : (
										<button className="flex items-center gap-1 relative group" title="Like this comment" onClick={likeComment}>
											<AiOutlineLike className="text-gray-300 group-hover:hidden text-lg sm:text-xl" />
											<AiFillLike className="text-white hidden group-hover:block text-lg sm:text-xl" />
											<span>{likesCount}00</span>
										</button>
									)}
								</div>
								<div className="flex items-center text-nowrap">
									{hasUserDisliked ? (
										<button className="flex items-center gap-1 relative group" title="Unlike this comment" onClick={undislikeComment}>
											<AiFillDislike className="text-white text-lg sm:text-xl" />
											<span>{dislikesCount}</span>
										</button>
									) : (
										<button className="flex items-center gap-1 relative group" title="Like this comment" onClick={dislikeComment}>
											<AiOutlineDislike className="text-gray-300 group-hover:hidden text-lg sm:text-xl" />
											<AiFillDislike className="text-white hidden group-hover:block text-lg sm:text-xl" />
											<span>{dislikesCount}</span>
										</button>
									)}
								</div>
							</div>
							<div className="flex items-center gap-3 sm:order-1">
								{user &&
									(displayReply ? (
										<button className="" title="Close form reply" onClick={handleReplyClick}>
											<IoClose className="w-6 h-6 text-gray-300 hover:text-white" />
										</button>
									) : (
										<button className="group flex items-center gap-1 text-gray-300 hover:text-white" title="Reply to the comment" onClick={handleReplyClick}>
											<IoArrowUndoOutline className="group-hover:hidden text-xl sm:text-2xl hidden sm:block" />
											<IoArrowUndo className="hidden sm:group-hover:block text-xl sm:text-2xl" />
											Reply
										</button>
									))}

								{isUserOwnComment && (
									<div className="flex items-center text-nowrap gap-3">
										<button className="group flex items-center gap-1 text-gray-300 hover:text-white" title="Edit comment" onClick={handleEditClick}>
											Edit
										</button>
										<button className="group flex items-center gap-1 text-gray-300 hover:text-white" title="Reply to the comment" onClick={removeComment}>
											Delete
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<span className="text-gray-400 ml-2 hidden xs:inline">{answers?.length ? `${answers.length} ${answers.length === 1 ? "reply" : "replies"}` : null}</span>
						{user &&
							(hasUserReported ? (
								<button className="text-yellow-600 hover:text-yellow-500 hover:underline" title="Unreport comment" onClick={unreportComment}>
									Unreport
								</button>
							) : (
								<button className="text-gray-300 hover:text-white hover:underline" title="Report comment" onClick={reportComment}>
									Report
								</button>
							))}
					</div>
				</div>
				{displayReply && (
					<div className="mb-1">
						<CommentForm projectId={projectId} commentId={commentId} setDisplayReply={setDisplayReply} action="reply" />
					</div>
				)}
			</div>
			<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} closeModalWithBackground={closeModalRemove} modalSize={"sm"} modalTitle={"Remove comment"}>
				<RemoveCommentModal onConfirm={confirmRemoveComment} closeModalRemove={closeModalRemove} />
			</Modal>
		</div>
	);
};
export default Comment;
