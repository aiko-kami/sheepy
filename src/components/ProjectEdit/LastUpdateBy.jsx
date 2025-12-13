import Link from "next/link";
import Image from "next/image";
import { Avatar } from "@/components/Badges/Avatar";
import { formatIsoTimestamp } from "@/utils/dateHandlers";

const LastUpdateBy = ({ updatedBy, updatedAt }) => {
	const dateTime = formatIsoTimestamp(updatedAt);

	return (
		<>
			{updatedBy.userId && (
				<div className="mt-6 flex justify-end items-center italic text-xs md:text-sm">
					<span className="mr-2">Last update by</span>
					{dateTime.isValid ? (
						<>
							{/* // Original full layout when date is valid */}
							<span className="flex items-center mr-1">
								<Link href={`/users/${updatedBy.userId}`}>
									<div className="mr-1">
										<Avatar img={updatedBy.profilePicture.link} size={"sm"} alt={"user profile picture"} />
									</div>
								</Link>
								<div className="lg:whitespace-nowrap font-semibold">
									<Link href={`/users/${updatedBy.userId}`}>{updatedBy.username}</Link>
								</div>
								,
							</span>
							{dateTime.formatted}
						</>
					) : (
						<>
							{/* Simplified layout when date is invalid — only picture + username */}
							<span className="flex items-center">
								<Link href={`/users/${updatedBy.userId}`}>
									<div className="mr-1">
										<Avatar img={updatedBy.profilePicture.link} size={"sm"} alt={"user profile picture"} />
									</div>
								</Link>
								<div className="font-semibold">
									<Link href={`/users/${updatedBy.userId}`}>{updatedBy.username}</Link>
								</div>
							</span>
						</>
					)}
				</div>
			)}
		</>
	);
};

export default LastUpdateBy;
