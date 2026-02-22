"use client";
import React from "react";

const QAs = ({ qnas = [] }) => {
	return (
		<>
			{qnas.length === 0 ? (
				<p className="py-8 text-center italic">No questions have been posted yet</p>
			) : (
				<ul>
					{qnas.map((qna, index) => (
						<React.Fragment key={index}>
							<div className="grid sm:grid-cols-3 gap-10 mb-10">
								<li className="text-justify my-auto font-bold text-xl">{qna.question}</li>
								<li className="sm:col-span-2 text-justify">{qna.response}</li>
							</div>
							<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-10 last:mb-0" />
						</React.Fragment>
					))}
				</ul>
			)}
		</>
	);
};
export default QAs;
