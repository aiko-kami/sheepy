import { IoImageOutline, IoCameraReverseOutline, IoClose } from "react-icons/io5";

const PopoverContent = ({ onSelectPicture, onRemovePicture, onSelectBackground, onRemoveBackground }) => {
	return (
		<ul className="py-1">
			<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1 cursor-pointer" onClick={onSelectPicture}>
				<div className="flex items-center">
					<IoCameraReverseOutline className="w-5 h-5 mr-1" />
					Change profile picture
				</div>
			</li>
			<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1 cursor-pointer" onClick={onRemovePicture}>
				<div className="flex items-center">
					<IoClose className="w-5 h-5 mr-1" />
					Remove profile picture
				</div>
			</li>
			<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1 cursor-pointer" onClick={onSelectBackground}>
				<div className="flex items-center">
					<IoImageOutline className="w-5 h-5 mr-1" />
					Change background
				</div>
			</li>
			<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1 cursor-pointer" onClick={onRemoveBackground}>
				<div className="flex items-center">
					<IoClose className="w-5 h-5 mr-1" />
					Remove background
				</div>
			</li>
		</ul>
	);
};

export default PopoverContent;
