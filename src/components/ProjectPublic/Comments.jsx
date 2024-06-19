"use client";

import React from "react";

import Comment from "@/components/ProjectPublic/Comment";

const Comments = ({ comments = [] }) => {
	return (
		<>
			{comments.length === 0 ? (
				<p className="py-8 text-center">Currently, no comments have been posted. Be the first to ask!</p>
			) : (
				<div className="container">
					{comments.map((comment, index) => (
						<div key={index} class="flex-col mx-auto w-full bg-white p-4 pr-6 rounded-md shadow-lg mb-1 lg:max-w-7/8">
							<div class="flex flex-row">
								<Comment comment={comment} />
							</div>
							{comment.answers.length !== 0 &&
								comment.answers.map((answer, index) => (
									<React.Fragment key={index}>
										<hr class="my-1 ml-16 border-gray-200" />
										<div class="flex flex-row pt-1 ml-12">
											<Comment comment={answer} />
										</div>
									</React.Fragment>
								))}
						</div>
					))}
				</div>
			)}
		</>
	);
};
export default Comments;
