import Image from "next/image";
import Link from "next/link";
import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";

import { ButtonCircle } from "@/components/Buttons/Buttons";

const Cover = ({ title, coverLink, ownerUserId, ownerUsername, ownerProfilePicture }) => {
	return (
		<>
			<div className="relative mb-3">
				{/* Project cover */}
				<Image src={coverLink} className="w-full h-60 md:h-110 object-cover rounded-xl" alt="Project cover" width={0} height={0} sizes="100vw" />

				{/* Transparent veil on the cover */}
				<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent rounded-xl" />

				<div className="absolute bottom-4 left-4 flex flex-col">
					{/* Title */}
					<h1 className="text-4xl md:text-6xl font-semibold mb-5">{title}</h1>

					{/* Creator */}
					<div className="text-lg flex items-center ml-2">
						<span className="">by</span>
						<div className="flex items-center justify-center hover:text-blue-400 duration-100 transition ease-in-out mr-14">
							<Link href={`/users/${ownerUserId}`} className="ml-1 mr-2 font-semibold">
								{ownerUsername}
							</Link>
							<Link href={`/users/${ownerUserId}`}>
								<Image src={ownerProfilePicture} className="object-cover rounded-full w-10 h-10" alt="creator profile picture" height={0} width={0} sizes="100vw" />
							</Link>
						</div>

						{/* Buttons Like and Share */}
						<div className="flex justify-center gap-4">
							<ButtonCircle btnProps={{ btnSize: "xl", type: "button", btnColor: "grayBorder" }}>
								<IoBookmarkOutline />
							</ButtonCircle>

							<ButtonCircle btnProps={{ btnSize: "xl", type: "button", btnColor: "grayBorder" }}>
								<IoShareSocialOutline />
							</ButtonCircle>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Cover;
