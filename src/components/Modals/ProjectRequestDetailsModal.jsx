"use client";

import Link from "next/link";
import { IoCloseCircleOutline, IoMailOutline } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";
import { Badge, Status } from "@/components/Badges/Badges";

const ProjectRequestDetailsModal = ({ closeModal, request }) => {
	return (
		<>
			{/* Modal content */}
			<div className="max-h-110 overflow-y-auto text-base text-white">
				<div className="px-4 md:px-10 pb-8">
					{/* Project title and category */}
					<div className="sm:grid grid-cols-2">
						<div className="">
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Project:</h2>
							<p className="mb-6 font-semibold pl-1">
								<Link href={`/projects/${request.projectprojectId}`}>{request.project.title}</Link>
							</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Category:</h2>
							<div className="mb-6 pl-1">
								<Badge badge={request.project.category} size={"sm"} />
							</div>
						</div>
					</div>

					{/* Message sent */}
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Request message:</h2>
					<p className="mb-6 pl-1">{request.message}</p>

					{/* Talent requested and request status */}
					<div className="sm:grid grid-cols-2 justify-around">
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Talent requested:</h2>
							<p className="mb-6 sm:mb-12 pl-1">{request.talent}</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Request status:</h2>
							<div className="mb-12 pl-1">
								<Status name={request.status.name} size={"sm"} bgColor={request.status.bgColor} bgColorHover={request.status.bgColorHover} />
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
						{request.actions.cancel && (
							<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
								<Button
									btnProps={{
										type: "button",
										btnColor: "red",
										action: closeModal,
									}}
								>
									Cancel request
								</Button>
							</div>
						)}
						{request.actions.sendMessage && (
							<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
								<Button
									btnProps={{
										type: "button",
										action: closeModal,
									}}
								>
									Send a message
								</Button>
							</div>
						)}
						<div className={`${request.actions.cancel && "col-span-2"} text-center`}>
							<Button
								btnProps={{
									type: "button",
									action: closeModal,
								}}
							>
								Close
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectRequestDetailsModal;
