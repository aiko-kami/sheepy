"use client";

import { IoBuildOutline } from "react-icons/io5";
import Link from "next/link";
import { Avatar } from "@/components/Badges/Avatar";
import { Background } from "@/components/Badges/Background";

import { useAuth } from "@/contexts/AuthContext";

const ProfilePicture = ({ userId, profilePicture, backgroundPicture }) => {
	const { user: authUser } = useAuth();

	// To determine if the logged-in user is viewing its own profile
	const isCurrentUser = authUser && authUser.userId === userId;

	return (
		<>
			{/* background picture */}
			<div className="h-46 relative">
				<Background img={backgroundPicture?.link} alt={"user background picture"} />
			</div>
			{/* Profile picture */}
			<div className="flex justify-center relative mx-auto -mt-30">
				<div className="rounded-full relative border-5 border-base-500 bg-white">
					<Avatar img={profilePicture?.link} size={"3xl"} alt={"user profile picture"} />
					{/* Edit profile button */}
					{isCurrentUser && (
						<div className="absolute md:right-3 md:bottom-3">
							<Link href="/users/my-profile" title="Edit my profile" className="bg-base-500 hover:bg-base-400 text-white p-2 rounded-full shadow-lg flex justify-center items-center">
								<IoBuildOutline className="w-5 h-5" />
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default ProfilePicture;
