"use client";

import React from "react";

import Comment from "@/components/ProjectPublic/Comment";

const Comments = ({ comments = [] }) => {
	return (
		<>
			{comments.length === 0 ? (
				<p className="py-8 text-center">Currently, no comments have been posted. Be the first to ask!</p>
			) : (
				<div className="container w-full mx-auto lg:max-w-7/8">
					{comments.map((comment, index) => (
						<div key={index} className="flex-col">
							<div className="flex flex-row">
								<Comment comment={comment} />
							</div>
							{comment.answers.length !== 0 &&
								comment.answers.map((answer, index) => (
									<React.Fragment key={index}>
										<hr className="my-5 ml-16 border-gray-500" />
										<div className="flex flex-row ml-12">
											<Comment comment={answer} />
										</div>
									</React.Fragment>
								))}
							{index !== comments.length - 1 && <hr className="my-5 ml-4 border-gray-500" />}
						</div>
					))}
				</div>
			)}
		</>
	);
};
export default Comments;
