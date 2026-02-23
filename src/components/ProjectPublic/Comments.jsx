"use client";

import React from "react";

import Comment from "@/components/ProjectPublic/Comment";
import CommentForm from "@/components/Forms/CommentForm";

import { useAuth } from "@/contexts";

const Comments = ({ comments = [], projectId, members }) => {
	const { user } = useAuth();

	const renderComments = (commentList, isChild = false) => {
		return commentList.map((item, index) => (
			<React.Fragment key={index}>
				{isChild && <hr className="my-5 ml-16 border-gray-500" />}

				<div className={`flex flex-row ${isChild ? "ml-12" : ""}`}>
					<Comment projectId={projectId} comment={item} members={members} />
				</div>

				{/* Recursively render answers */}
				{item.answers?.length > 0 && renderComments(item.answers, true)}
			</React.Fragment>
		));
	};

	return (
		<>
			{comments.length === 0 ? (
				<p className="py-8 mb-6 text-center italic">No comments have been posted. Be the first!</p>
			) : (
				<div className="container w-full mx-auto lg:max-w-7/8 mb-8">{renderComments(comments)}</div>
			)}

			{user && <CommentForm projectId={projectId} />}
		</>
	);
};
export default Comments;
