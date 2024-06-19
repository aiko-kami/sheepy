"use client";
import React from "react";

const QAs = ({ qnas = [] }) => {
	return (
		<>
			{qnas.length === 0 ? (
				<p className="py-8 text-center">Currently, no questions have been posted. Be the first to ask!</p>
			) : (
				<ul className="">
					{qnas.map((qna, index) => (
						<React.Fragment key={index}>
							<div className="grid sm:grid-cols-3 gap-10 mb-10">
								<li className="text-justify font-bold text-xl">{qna.question}</li>
								<li className="sm:col-span-2 text-justify">{qna.response}</li>
							</div>
							<hr className="h-px mx-1/7 bg-gray-200 border-0 dark:bg-gray-700 mb-10 last:mb-0" />
						</React.Fragment>
					))}
				</ul>
			)}
		</>
	);
};
export default QAs;
