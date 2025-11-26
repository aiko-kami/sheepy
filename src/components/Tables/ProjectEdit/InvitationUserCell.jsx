import Image from "next/image";
import Link from "next/link";

const InvitationUserCell = ({ invitation }) => {
	return (
		<>
			<div className="flex items-center">
				<Link href={`/users/${invitation.receiver.userId}`}>
					<Image src={invitation.receiver.profilePicture.link} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-4" />
				</Link>
				<div className="font-semibold text-base lg:whitespace-nowrap">
					<Link href={`/users/${invitation.receiver.userId}`}>
						<span>{invitation.receiver.username}</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default InvitationUserCell;
