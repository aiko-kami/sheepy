import Link from "next/link";
import Image from "next/image";
import { DateTime } from "luxon";

const LastUpdateBy = ({ updatedBy, updatedAt }) => {
	const dt = DateTime.fromISO(updatedAt).toLocal();
	const now = DateTime.local();

	const diffInHours = now.diff(dt, "hours").hours;

	const isToday = dt.hasSame(now, "day");
	const isYesterday = dt.hasSame(now.minus({ days: 1 }), "day");

	const dateTime =
		diffInHours < 1
			? dt.toRelative({ base: now })
			: isToday
			? `Today • ${dt.toFormat("HH:mm")}`
			: isYesterday
			? `Yesterday • ${dt.toFormat("HH:mm")}`
			: `${dt.toFormat("dd LLL yyyy • HH:mm")} (${dt.zoneName})`;

	return (
		<>
			{updatedBy.userId &&
				(dt.isValid ? (
					// Original full layout when date is valid
					<div className="mb-4 flex items-center justify-end italic text-sm">
						<span className="mr-2">Last update by</span>
						<span className="flex items-center mr-1">
							<Link href={`/users/${updatedBy.userId}`}>
								<Image src={updatedBy.profilePicture.link} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-1" />
							</Link>
							<div className="lg:whitespace-nowrap font-semibold">
								<Link href={`/users/${updatedBy.userId}`}>{updatedBy.username}</Link>
							</div>
							,
						</span>

						{dateTime}
					</div>
				) : (
					// Simplified layout when date is invalid — only picture + username
					<div className="mb-4 flex items-center justify-end italic text-sm">
						<span className="mr-2">Last update by</span>
						<span className="flex items-center">
							<Link href={`/users/${updatedBy.userId}`}>
								<Image src={updatedBy.profilePicture.link} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-2" />
							</Link>

							<div className="font-semibold">
								<Link href={`/users/${updatedBy.userId}`}>{updatedBy.username}</Link>
							</div>
						</span>
					</div>
				))}
		</>
	);
};

export default LastUpdateBy;
