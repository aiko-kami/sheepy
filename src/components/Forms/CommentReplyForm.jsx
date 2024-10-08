"use client";

import { useState, useEffect, useRef } from "react";

import { IoHappy } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
import { Button } from "@/components/Buttons/Buttons";
import { TextAreaCommentField } from "@/components/Forms/TextAreaField";

const CommentReplyForm = ({ displayReply, handleReplySubmit }) => {
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const [comment, setComment] = useState("");

	let emojiPickerRef = useRef();

	const onEmojiClick = (event) => {
		setComment((prevComment) => prevComment + event.emoji);
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
		setComment(e.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log("🚀 ~ onSubmit ~ comment data:", comment);
		handleReplySubmit(comment); // Pass the comment to the handler function
		setComment(""); // Clear the comment after submitting
	};

	return (
		<>
			{displayReply && (
				<div className="px-4">
					<form onSubmit={onSubmit}>
						<div className="w-full mb-4 border rounded-lg bg-gray-700 border-gray-600">
							<div className="bg-gray-800 rounded-t-lg ">
								<TextAreaCommentField
									label="Your comment"
									labelStyle="sr-only"
									inputName="comment"
									inputValue={comment}
									onChange={onChange}
									placeholder="Write a comment..."
									maxLength={1000}
									rows="4"
									required={true}
								/>
							</div>
							<div className="flex items-center justify-end sm:justify-between px-2 py-2 border-t border-gray-600 relative">
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
								{/* Post comment (submit form) */}
								<Button btnProps={{ btnSize: "sm", type: "submit", btnColor: "blue" }}>Post comment</Button>
							</div>
						</div>
					</form>
				</div>
			)}
		</>
	);
};
export default CommentReplyForm;
