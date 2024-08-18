"use client";

import Link from "next/link";
import { IoEyeOutline, IoCheckmarkCircleOutline, IoCloseCircleOutline, IoMailOutline, IoWarningOutline } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";
import { Badge, Status } from "@/components/Badges/Badges";

const ProjectInvitationDestailsModal = ({ closeModal, invitation }) => {
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
								<Link href={`/projects/${invitation.projectprojectId}`}>{invitation.project.title}</Link>
							</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Category:</h2>
							<div className="mb-6 pl-1">
								<Badge badge={invitation.project.category} size={"sm"} />
							</div>
						</div>
					</div>

					{/* Message received */}
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Invitation message:</h2>
					<p className="mb-6 pl-1">{invitation.message}</p>

					{/* Talent required and invitation status */}
					<div className="sm:grid grid-cols-2 justify-around">
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Talent required:</h2>
							<p className="mb-6 sm:mb-12 pl-1">{invitation.talent}</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Invitation status:</h2>
							<div className="mb-12 pl-1">
								<Status name={invitation.status.name} size={"sm"} bgColor={invitation.status.bgColor} bgColorHover={invitation.status.bgColorHover} />
							</div>
						</div>
					</div>

					{/* Buttons */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
						{invitation.actions.decline && (
							<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
								<Button
									btnProps={{
										type: "button",
										btnColor: "red",
										action: closeModal,
									}}
								>
									Decline invitation
								</Button>
							</div>
						)}
						{invitation.actions.accept && (
							<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
								<Button
									btnProps={{
										type: "button",
										btnColor: "green",
										action: closeModal,
									}}
								>
									Accept invitation
								</Button>
							</div>
						)}
						{invitation.actions.sendMessage && (
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
						{invitation.actions.report && (
							<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
								<Button
									btnProps={{
										type: "button",
										btnColor: "yellow",
										action: closeModal,
									}}
								>
									Report
								</Button>
							</div>
						)}
						<div className="col-span-2 text-center">
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

export default ProjectInvitationDestailsModal;
