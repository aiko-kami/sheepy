import { IoCameraReverseOutline, IoImageOutline, IoClose } from "react-icons/io5";

const PopoverContent = ({ onSelectPicture, onRemovePicture, onSelectBackground, onRemoveBackground, profileImage, backgroundImage }) => {
	const hasProfileImage = profileImage && profileImage !== "" && !profileImage.includes("default-profile.jpg");
	const hasBackgroundImage = backgroundImage && backgroundImage !== "" && !backgroundImage.includes("default-background.jpg");

	return (
		<ul className="py-1">
			<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1 cursor-pointer" onClick={onSelectPicture}>
				<div className="flex items-center">
					<IoCameraReverseOutline className="w-5 h-5 mr-1" />
					{hasProfileImage ? "Change profile picture" : "Add profile picture"}
				</div>
			</li>

			{hasProfileImage && (
				<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1 cursor-pointer" onClick={onRemovePicture}>
					<div className="flex items-center">
						<IoClose className="w-5 h-5 mr-1" />
						Remove profile picture
					</div>
				</li>
			)}

			<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1 cursor-pointer" onClick={onSelectBackground}>
				<div className="flex items-center">
					<IoImageOutline className="w-5 h-5 mr-1" />
					{hasBackgroundImage ? "Change background" : "Add background"}
				</div>
			</li>

			{hasBackgroundImage && (
				<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1 cursor-pointer" onClick={onRemoveBackground}>
					<div className="flex items-center">
						<IoClose className="w-5 h-5 mr-1" />
						Remove background
					</div>
				</li>
			)}
		</ul>
	);
};

export default PopoverContent;
