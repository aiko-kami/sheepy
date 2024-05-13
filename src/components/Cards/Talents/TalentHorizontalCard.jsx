import Image from "next/image";
import Link from "next/link";
import BadgeRounded from "@/components/Badges/BadgeRounded";
import { IoLocationOutline } from "react-icons/io5";

const TalentHorizontalCard = ({ user }) => {
	const { userId, username, profilePicture, description, talents } = user;

	return (
		<>
			<div className="grid grid-cols-4 p-2 items-center shadow-xl rounded-lg bg-blue-900 hover:-translate-y-1 transition ease-in duration-75 w-full sm:w-200">
				{/* Profile picture */}
				<div className="hidden sm:flex col-span-1 justify-center">
					<Link href="/users/01" className="">
						<Image src={profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover w-34 h-34 rounded-full shadow-md" />
					</Link>
				</div>
				{/* Username, location, description and talents */}
				<div className="tn:px-5 col-span-4 sm:col-span-3">
					{/* Username */}
					<Link href="/users/01">
						<h3 className="font-semibold text-center tn:text-left text-xl tn:text-3xl mb-1 tn:mb-2 overflow-hidden text-ellipsis">{username}</h3>
					</Link>
					{/* Location */}
					<div className="flex mb-1 tn:mb-2">
						<div>
							<IoLocationOutline className="text-lg tn:text-xl" />
						</div>
						<p className="text-xs tn:text-sm">
							{user.locationCity}, <span className="uppercase">{user.locationCountry}</span>
						</p>
					</div>
					{/* Description */}
					<p className="pb-1 text-sm tn:text-base line-clamp-4 mb-1 tn:mb-2">{description}</p>
					{/* Talents */}
					<div className="flex flex-wrap h-8 overflow-hidden mb-1 tn:mb-2">
						{talents.map((talent, index) => (
							<div key={index} className="mx-1 my-1">
								<BadgeRounded badge={talent} />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default TalentHorizontalCard;
