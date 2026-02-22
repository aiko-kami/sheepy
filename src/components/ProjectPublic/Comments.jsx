"use client";

import React from "react";

import Comment from "@/components/ProjectPublic/Comment";
import CommentForm from "@/components/Forms/CommentForm";

import { useAuth } from "@/contexts";

const Comments = ({ comments = [], projectId, members }) => {
	const { user } = useAuth();

	return (
		<>
			{comments.length === 0 ? (
				<p className="py-8 mb-6 text-center italic">No comments have been posted. Be the first!</p>
			) : (
				<div className="container w-full mx-auto lg:max-w-7/8 mb-8">
					{comments.map((comment, index) => {
						return (
							<div key={index} className="flex-col">
								<div className="flex flex-row">
									<Comment projectId={projectId} comment={comment} members={members} />
								</div>
								{comment.answers.length !== 0 &&
									comment.answers.map((answer, index) => (
										<React.Fragment key={index}>
											<hr className="my-5 ml-16 border-gray-500" />
											<div className="flex flex-row ml-12">
												<Comment projectId={projectId} comment={answer} members={members} />
											</div>
										</React.Fragment>
									))}
								{index !== comments.length - 1 && <hr className="my-5 ml-4 border-gray-500" />}
							</div>
						);
					})}
				</div>
			)}
			{user && <CommentForm projectId={projectId} />}
		</>
	);
};
export default Comments;
