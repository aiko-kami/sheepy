import Image from "next/image";
import Link from "next/link";

const JoinRequestUserCell = ({ request }) => {
	return (
		<>
			<div className="flex items-center">
				<Link href={`/users/${request.sender.userId}`}>
					<Image src={request.sender.profilePicture.link} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-4" />
				</Link>
				<div className="font-semibold text-base lg:whitespace-nowrap">
					<Link href={`/users/${request.sender.userId}`}>
						<span>{request.sender.username}</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default JoinRequestUserCell;
