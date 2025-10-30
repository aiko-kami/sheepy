import Link from "next/link";
import Image from "next/image";
import { IoChatbubblesSharp, IoAddOutline } from "react-icons/io5";
import { DateTime } from "luxon";

import DraggableQnasList from "@/components/ProjectEdit/QandAsTab/DraggableQnasList";
import { Button } from "@/components/Buttons/Buttons";

const QandAsDetails = ({ formInputs, onChange, addQna }) => {
	const dt = DateTime.fromISO(formInputs.updatedAt).toLocal();
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
			{/* Project Q&As */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoChatbubblesSharp className="mr-2 text-2xl" />
				Project Q&As
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="pl-4">
				{/* Project Q&As*/}
				<div className="mb-8">
					{formInputs.updatedBy.userId && (
						<>
							<div className="mb-4 flex items-center justify-end italic text-sm">
								<span className="mr-2">Last update by</span>
								<span className="flex items-center mr-1">
									<Link href={`/users/${formInputs.updatedBy.userId}`}>
										<Image
											src={formInputs.updatedBy.profilePicture.link}
											height={0}
											width={0}
											sizes="100vw"
											alt="User profile picture"
											className="object-cover min-w-9 h-9 rounded-full shadow-md mr-1"
										/>
									</Link>
									<div className="lg:whitespace-nowrap font-semibold">
										<Link href={`/users/${formInputs.updatedBy.userId}`}>{formInputs.updatedBy.username}</Link>
									</div>
									,
								</span>
								{dateTime}
							</div>
						</>
					)}
					{formInputs.projectQnas && formInputs.projectQnas.length !== 0 ? (
						<DraggableQnasList formInputs={formInputs} onChange={onChange} />
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">Your project does not have any Q&A yet</span>
						</p>
					)}
				</div>
				<div className="mb-6">
					<Button
						btnProps={{
							type: "button",
							btnColor: "blue",
							action: addQna,
						}}
					>
						<div className="flex items-center">
							New Q&A <IoAddOutline className="text-2xl ml-2 mt-0.5" />
						</div>
					</Button>
				</div>
			</div>
		</>
	);
};
export default QandAsDetails;
