import Image from "next/image";
import Link from "next/link";
import BadgeCategory from "@/components/Badges/BadgeCategory";

const TalentHorizontalCard = ({ talent }) => {
	const { userId, username, profilePicture, description, talents, tags } = talent;

	return (
		<>
			<div className="grid grid-cols-4 p-4 items-center shadow-xl rounded-lg bg-blue-900 hover:-translate-y-1 transition ease-in duration-75 min-w-1/2 animate-wiggle">
				<div className="col-span-1">
					<Link href="/users/01">
						<Image src={profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover w-20 h-20 rounded-full shadow-md" />
					</Link>
				</div>
				<div className="px-6 col-span-3 py-8">
					<Link href="/users/01">
						<h3 className="font-semibold text-2xl pb-1 overflow-hidden text-ellipsis">{username}</h3>
					</Link>
					<div className="inline-block"></div>
					<p className="line-clamp-2">{description}</p>
				</div>
			</div>
		</>
	);
};

export default TalentHorizontalCard;
