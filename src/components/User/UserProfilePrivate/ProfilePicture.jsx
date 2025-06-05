"use client";

import Image from "next/image";
import { useState } from "react";
import BackgroundPicture from "@/components/User/UserProfilePrivate/BackgroundPicture";
import { IoColorWandOutline } from "react-icons/io5";
import Popover from "@/components/Popover";
import PopoverContent from "./PopoverContent";

const ProfilePicture = ({ user }) => {
	const [displayPopover, setDisplayPopover] = useState(false);

	return (
		<>
			<BackgroundPicture backgroundPicture={user.backgroundPicture} />
			{/* Profile picture */}
			<div className="h-40 w-40 tn:min-h-60 tn:min-w-60 relative mx-auto -mt-30">
				<Image src={user.profilePicture.link} fill sizes="100vw, (min-width: 768px) 200px" alt="User profile picture" className="rounded-full object-cover border-5 border-base-500 bg-white" />
				{/* Icon update pictures */}
				<div className="absolute right-0 bottom-0 tn:right-1 tn:bottom-1" onClick={() => setDisplayPopover(!displayPopover)} onMouseLeave={() => setDisplayPopover(false)}>
					<div className="relative">
						<IoColorWandOutline className="w-6 h-6 tn:w-7 tn:h-7" />
						<div className="relative">
							<Popover displayPopover={displayPopover} position={"-mx-43 -my-8 sm:mx-7"} style={"text-gray-900 whitespace-nowrap bg-white rounded-sm shadow px-1"}>
								<PopoverContent />
							</Popover>
						</div>
					</div>
				</div>
				{/*<div className="absolute -right-9 top-32">
					<IoColorWandOutline className="w-7 h-7" />
				</div>*/}
			</div>
		</>
	);
};
export default ProfilePicture;
