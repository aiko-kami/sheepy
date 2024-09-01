import Link from "next/link";
import { IoImageOutline, IoCameraReverseOutline, IoClose } from "react-icons/io5";

const PopoverContent = () => {
	return (
		<ul className="py-1">
			<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1">
				<div>
					<Link href="#" className="flex">
						<IoCameraReverseOutline className="w-5 h-5 mr-1" />
						Change profile picture
					</Link>
				</div>
			</li>
			<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1">
				<div>
					<Link href="#" className="flex">
						<IoClose className="w-5 h-5 mr-1" />
						Remove profile picture
					</Link>
				</div>
			</li>
			<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1">
				<div>
					<Link href="#" className="flex">
						<IoImageOutline className="w-5 h-5 mr-1" />
						Change background
					</Link>
				</div>
			</li>
			<li className="text-sm hover:bg-gray-200 duration-200 hover:rounded-md active:text-base-450 block p-2 pl-1">
				<div>
					<Link href="#" className="flex">
						<IoClose className="w-5 h-5 mr-1" />
						Remove background
					</Link>
				</div>
			</li>
		</ul>
	);
};
export default PopoverContent;
