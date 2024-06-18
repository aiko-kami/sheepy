"use client";
import React from "react";

const Steps = ({ steps = [] }) => {
	const getStatusBorderColor = (status) => {
		switch (status) {
			case "completed":
				return "border-green-600";
			case "on-going":
				return "border-blue-500";
			case "not started":
				return "border-gray-700";
			default:
				return "border-gray-700"; // Default border color
		}
	};

	const getStatusBGColor = (status) => {
		switch (status) {
			case "completed":
				return "bg-green-600";
			case "on-going":
				return "bg-blue-500";
			case "not started":
				return "bg-gray-700";
			default:
				return "bg-gray-700"; // Default border color
		}
	};

	return (
		<>
			{steps.length === 0 ? (
				<p className="py-8 text-center">Currently, no step have been published.</p>
			) : (
				<>
					<ol className="px-2">
						{steps.map(({ title, details, status }, index) => (
							<li key={index} className={`pb-10 ps-10 relative border-s-2 ${getStatusBorderColor(status)}`}>
								<span className={`absolute -start-[13px] flex h-6 w-6 mt-1 items-center justify-center rounded-full ring-6 ${getStatusBGColor(status)} ring-base-500`}>
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
