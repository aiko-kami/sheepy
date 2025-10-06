"use client";
import React from "react";

const Steps = ({ steps = [] }) => {
	return (
		<>
			{steps.length === 0 ? (
				<p className="py-8 text-center italic">No steps have been published yet</p>
			) : (
				<>
					<ol className="px-2">
						{steps.map(({ title, details, status }, index) => (
							<li key={index} className={`pb-10 ps-10 relative border-s-2 border-${status.colors.colorBase || "gray-700"}`}>
								<span className={`absolute -start-[13px] flex h-6 w-6 mt-1 items-center justify-center rounded-full ring-6 ${status.colors.bgColor || "bg-gray-700"} ring-base-500`}>
									<svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5" />
									</svg>
								</span>
								<h3 className="mb-2 text-xl font-bold">{title}</h3>
								<p className="text-justify ms-6">{details}</p>
							</li>
						))}
					</ol>
				</>
			)}
		</>
	);
};
export default Steps;
