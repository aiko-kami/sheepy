"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { IoColorWandOutline } from "react-icons/io5";
import Popover from "@/components/Popover";
import ButtonBlue from "@/components/Buttons/ButtonBlue";
import PopoverContent from "./PopoverContent";
import ProjectCounter from "@/components/Common/ProjectCounter";

const UserCardPictureBio = ({ user }) => {
	const [displayPopover, setDisplayPopover] = useState(false);
	const onSubmit = () => {};
	const onChange = () => {};

	return (
		<div className="row-span-2 bg-base-450 shadow-2xl relative pb-8">
			{/* background picture */}
			<div className="h-46 relative">
				<Image
					src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/cerisier-japon-fuji-min.jpeg"
					fill
					sizes="100vw, (min-width: 768px) 200px"
					alt="Background profile picture"
					className="object-cover"
				/>
			</div>
			{/* Profile picture */}
			<div className="h-40 w-40 tn:min-h-60 tn:min-w-60 relative mx-auto -mt-30">
				<Image src={user.profilePicture} fill sizes="100vw, (min-width: 768px) 200px" alt="User profile picture" className="rounded-full object-cover border-5 border-base-500" />
				{/* Icon update pictures */}
				<div className="absolute right-0 bottom-0 tn:right-1 tn:bottom-1" onClick={() => setDisplayPopover(!displayPopover)} onMouseLeave={() => setDisplayPopover(false)}>
					<div className="relative">
						<IoColorWandOutline className="w-6 h-6 tn:w-7 tn:h-7" />
						<div className="relative">
							<Popover displayPopover={displayPopover} position={"-mx-43 -my-8 sm:mx-7"}>
								<PopoverContent />
							</Popover>
						</div>
					</div>
				</div>
				{/*<div className="absolute -right-9 top-32">
					<IoColorWandOutline className="w-7 h-7" />
				</div>*/}
			</div>
			{/* User card text */}
			<div className="px-6">
				{/* Username and description */}
				<div className="text-center my-5">
					<h1 className="text-3xl font-semibold">{user.username}</h1>
				</div>
				{/* Projects counters */}
				<ProjectCounter projectCount={user.projects.projectCount} />
				{/* User details */}
				<div>
					<h2 className="text-2xl font-semibold mb-4">About me</h2>
					{/* Profile introduction section */}
					<div>
						<form onSubmit={onSubmit}>
							{/* Description */}
							<div className="relative z-0 mb-6 w-full">
								<label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-400">
									Description
								</label>
								<textarea
									name="description"
									id="description"
									className="block p-2 w-full text-sm bg-gray-700 rounded-lg border border-gray-600 placeholder-gray-400"
									placeholder="Say few words about yourself with 100 characters maximum..."
									maxLength={100}
									rows="2"
									value={user.description}
									onChange={onChange}
								></textarea>
							</div>

							{/* Bio */}
							<div className="relative z-0 mb-10 w-full">
								<label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-400">
									Bio
								</label>
								<textarea
									name="bio"
									id="bio"
									className="block p-2 w-full text-sm bg-gray-700 rounded-lg border border-gray-600 placeholder-gray-400"
									placeholder="Add your bio or resumé..."
									maxLength={700}
									rows="8"
									value={user.bio}
									onChange={onChange}
								></textarea>
							</div>
							{/* Button Update profile (submit form) */}
							<div className="text-center">
								<ButtonBlue btnSize={"std"}>Update my introduction</ButtonBlue>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default UserCardPictureBio;
