"use client";

import React from "react";
import { IoCheckmarkSharp, IoArrowForwardSharp, IoEllipsisVertical } from "react-icons/io5";

const Steps = ({ steps = [] }) => {
	return (
		<>
			{steps.length === 0 ? (
				<p className="py-8 text-center italic">No steps have been published yet</p>
			) : (
				<>
					<ol className="px-2">
						{steps.map(({ title, details, status }, index) => {
							let IconComponent;
							switch (status.status) {
								case "completed":
									IconComponent = IoCheckmarkSharp;
									break;
								case "in progress":
									IconComponent = IoArrowForwardSharp;
									break;
								case "not started":
								default:
									IconComponent = IoEllipsisVertical;
									break;
							}
							return (
								<li key={index} className={`pb-10 ps-10 relative border-s-2 border-${status.colors.colorBase || "gray-700"}`}>
									<span className={`absolute -start-[13px] flex h-6 w-6 mt-1 items-center justify-center rounded-full ring-6 ${status.colors.bgColor || "bg-gray-700"} ring-base-500`}>
										<IconComponent className="text-lg" />
									</span>
									<h3 className="mb-2 text-xl font-bold">{title}</h3>
									<p className="text-justify ms-6">{details}</p>
								</li>
							);
						})}
					</ol>
				</>
			)}
		</>
	);
};
export default Steps;
