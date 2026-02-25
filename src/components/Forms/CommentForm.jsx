"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { IoHappy } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
import { Button } from "@/components/Buttons/Buttons";
import { TextAreaCommentField } from "@/components/Forms/TextAreaField";
import { showSuccessToast, showErrorToast } from "@/utils/toast";

import { ApiPostAddComment, ApiPostAnswerComment, ApiEditComment } from "@/lib/api/projectsExtended";
import { ERRORS, SUCCESS } from "@/lib/constants";

const CommentForm = ({ projectId, content = "", commentId, setDisplayReply, setDisplayEdit, action = "" }) => {
	const router = useRouter();

	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const [commentInput, setCommentInput] = useState(content);

	let emojiPickerRef = useRef();

	const onEmojiClick = (event) => {
		setCommentInput((prevComment) => prevComment + event.emoji);
	};

	useEffect(() => {
		const handler = (event) => {
			if (showEmojiPicker && emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
				setShowEmojiPicker(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [showEmojiPicker]);

	const onChange = (e) => {
		setCommentInput(e.target.value);
	};

	const onSubmit = async (event) => {
		event.preventDefault();

		const comment = (commentInput || "").trim();

		// Basic validations with early returns
		if (!comment) return showErrorToast(ERRORS.PROJECT_COMMENTS.EMPTY_INPUT);
		if (comment.length > 1000) return showErrorToast(ERRORS.PROJECT_COMMENTS.MAX_LENGTH);

		let result;

		if (commentId) {
			// If commentId exists and action is "edit", it's an edit to an existing comment
			if (action === "edit") {
				const payload = {
					projectId,
					commentId,
					commentContent: comment,
				};
				result = await ApiEditComment(payload);
				if (!result.ok) {
					showErrorToast(result.message || ERRORS.PROJECT_COMMENTS.UPDATE_FAILED);
					return;
				}

				router.refresh();
				showSuccessToast(SUCCESS.PROJECT_COMMENTS.UPDATE);
				setCommentInput("");
				if (setDisplayEdit) setDisplayEdit(false); // Close the edit form after submitting
				return;
			} else {
				// If commentId exists, it's a reply to an existing comment
				const payload = {
					projectId,
					commentIdtoAnswer: commentId,
					commentContent: comment,
				};

				result = await ApiPostAnswerComment(payload);
				if (!result.ok) {
					showErrorToast(result.message || ERRORS.PROJECT_COMMENTS.REPLY_FAILED);
					return;
				}

				router.refresh();
				showSuccessToast(SUCCESS.PROJECT_COMMENTS.REPLY);
				setCommentInput(""); // Clear the comment after submitting
				if (setDisplayReply) setDisplayReply(false); // Close the reply form after submitting
				return;
			}
		} else {
			// Otherwise, it's a new comment on the project
			const payload = {
				projectId,
				commentContent: comment,
			};

			result = await ApiPostAddComment(payload);
			if (!result.ok) {
				showErrorToast(result.message || ERRORS.PROJECT_COMMENTS.ADD_FAILED);
				return;
			}

			router.refresh();
			showSuccessToast(SUCCESS.PROJECT_COMMENTS.ADD);
			setCommentInput(""); // Clear the comment after submitting
		}
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className="w-full border rounded-lg bg-gray-700 border-gray-600">
					<div className="bg-gray-800 rounded-t-lg ">
						<TextAreaCommentField
							label="Your comment"
							labelStyle="sr-only"
							inputName="commentInput"
							inputValue={commentInput}
							onChange={onChange}
							placeholder="Write a comment..."
							maxLength={1000}
							rows="4"
							required={true}
						/>
					</div>
					<div className="flex items-center justify-end sm:justify-between px-2 py-2 border-t border-gray-600 relative gap-2">
						<div className="hidden sm:flex" ref={emojiPickerRef}>
							<button
								type="button"
								className="inline-flex justify-center items-center p-2 text-gray-400 rounded hover:text-white hover:bg-gray-600"
								onClick={() => setShowEmojiPicker(!showEmojiPicker)}
							>
								<IoHappy className="w-5 h-5 text-gray-400" />
								<span className="sr-only">Add emoji</span>
							</button>
							{showEmojiPicker && (
								<div className="absolute z-10 top-12 left-0">
									<EmojiPicker onEmojiClick={onEmojiClick} Theme={"auto"} emojiStyle={"native"} lazyLoadEmojis={true} skinTonesDisabled={true} previewConfig={{ showPreview: false }} />
								</div>
							)}
						</div>
						<div className="flex gap-2">
							{/* Post comment (submit form) */}
							{action === "edit" && <Button btnProps={{ btnSize: "xs", type: "button", btnColor: "gray", action: () => setDisplayEdit(false) }}>Cancel</Button>}
							{action === "reply" && <Button btnProps={{ btnSize: "xs", type: "button", btnColor: "gray", action: () => setDisplayReply(false) }}>Cancel</Button>}
							<Button btnProps={{ btnSize: "xs", type: "submit", btnColor: "blue" }}> {action === "edit" ? "Edit comment" : "Post comment"}</Button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};
export default CommentForm;
