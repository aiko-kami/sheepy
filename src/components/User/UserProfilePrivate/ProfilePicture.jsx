"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { IoColorWandOutline } from "react-icons/io5";

import BackgroundPicture from "@/components/User/UserProfilePrivate/BackgroundPicture";
import Popover from "@/components/Popover";
import PopoverContent from "./PopoverContent";
import { Avatar } from "@/components/Badges/Avatar";

import { useAuth } from "@/contexts/AuthContext";
import defaultPicture from "@/public/images/default-profile-picture.png";
import { ApiUpdateUserPicture, ApiUpdateUserBackgroundPicture, ApiRemoveUserPicture, ApiRemoveUserBackgroundPicture } from "@/lib/api/usersClient";
import { showSuccessToast, showErrorToast } from "@/utils/toast";

const ProfilePicture = ({ user }) => {
	const router = useRouter();
	const { refreshUser } = useAuth();

	const [displayPopover, setDisplayPopover] = useState(false);
	const [profileImage, setProfileImage] = useState(user.profilePicture?.link || defaultPicture.src);
	const [backgroundImage, setBackgroundImage] = useState(user.backgroundPicture?.link || "");
	const fileInputProfileRef = useRef(null);
	const fileInputBackgroundRef = useRef(null);

	// Profile Picture
	const handleProfilePictureChange = async (file) => {
		try {
			const localImageURL = URL.createObjectURL(file);

			await ApiUpdateUserPicture(file);
			await refreshUser();

			showSuccessToast("Profile picture updated successfully!");
			setProfileImage(localImageURL);
			router.push("/users/my-profile");
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	// Background Picture
	const handleBackgroundPictureChange = async (file) => {
		try {
			const localImageURL = URL.createObjectURL(file);

			await ApiUpdateUserBackgroundPicture(file);
			await refreshUser();

			showSuccessToast("Background picture updated successfully!");
			setBackgroundImage(localImageURL);
			router.push("/users/my-profile");
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	const onProfileInputChange = (e) => {
		const file = e.target.files?.[0];
		if (file) handleProfilePictureChange(file);
	};

	const onBackgroundInputChange = (e) => {
		const file = e.target.files?.[0];
		if (file) handleBackgroundPictureChange(file);
	};

	const triggerProfileInput = () => fileInputProfileRef.current?.click();
	const triggerBackgroundInput = () => fileInputBackgroundRef.current?.click();

	const handleRemoveProfilePicture = async () => {
		try {
			await ApiRemoveUserPicture();
			setProfileImage(defaultPicture.src);
			await refreshUser();
			showSuccessToast("Profile picture removed successfully!");
			router.push("/users/my-profile");
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	const handleRemoveBackgroundPicture = async () => {
		try {
			await ApiRemoveUserBackgroundPicture();
			setBackgroundImage("");
			await refreshUser();
			showSuccessToast("Background picture removed successfully!");
			router.push("/users/my-profile");
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	return (
		<>
			<BackgroundPicture backgroundPicture={backgroundImage} />

			<div className="flex justify-center relative mx-auto -mt-30">
				<div className="rounded-full border-5 border-base-500 bg-white">
					<Avatar img={profileImage} size={"3xl"} alt={"user profile picture"} />
				</div>
				{/* Trigger Icon */}
				<div className="absolute right-0 bottom-0 tn:right-1 tn:bottom-1" onClick={() => setDisplayPopover(!displayPopover)} onMouseLeave={() => setDisplayPopover(false)}>
					<IoColorWandOutline className="w-6 h-6 tn:w-7 tn:h-7" />

					<Popover displayPopover={displayPopover} position="-mx-43 -my-8 sm:mx-7" style="text-gray-900 whitespace-nowrap bg-white rounded-sm shadow px-1">
						<PopoverContent
							onSelectPicture={triggerProfileInput}
							onRemovePicture={handleRemoveProfilePicture}
							onSelectBackground={triggerBackgroundInput}
							onRemoveBackground={handleRemoveBackgroundPicture}
							profileImage={profileImage}
							backgroundImage={backgroundImage}
						/>
					</Popover>
				</div>
				{/* Hidden File Input */}
				<input type="file" accept="image/*" ref={fileInputProfileRef} className="hidden" onChange={onProfileInputChange} />
				<input type="file" accept="image/*" ref={fileInputBackgroundRef} className="hidden" onChange={onBackgroundInputChange} />
			</div>
		</>
	);
};

export default ProfilePicture;
