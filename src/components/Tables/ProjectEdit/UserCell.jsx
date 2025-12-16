import Link from "next/link";
import { Avatar } from "@/components/Badges/Avatar";
import { BadgeOwner } from "@/components/Badges/Badges";

const UserCell = ({ userId, profilePicture, username, owner = false }) => {
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<Link href={`/users/${userId}`}>
						<div className="mr-2">
							<Avatar img={profilePicture?.link} size="std" alt="User profile picture" />
						</div>
					</Link>
					<div className="font-semibold text-base lg:whitespace-nowrap">
						<Link href={`/users/${userId}`}>
							<span>{username}</span>
						</Link>
					</div>
				</div>
				{owner && (
					<div className="ml-2">
						<BadgeOwner size={"xs"} />
					</div>
				)}
			</div>
		</>
	);
};

export default UserCell;
