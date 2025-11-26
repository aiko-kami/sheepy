import Image from "next/image";
import Link from "next/link";

const MemberUserCell = ({ user, role }) => {
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<Link href={`/users/${user.userId}`}>
						<Image src={user.profilePicture.link} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-4" />
					</Link>
					<div className="font-semibold text-base lg:whitespace-nowrap mr-2">
						<Link href={`/users/${user.userId}`}>
							<span>{user.username}</span>
						</Link>
					</div>
				</div>
				{role === "owner" && <span className="py-1 px-2.5 text-white font-bold text-xs text-nowrap rounded cursor-default bg-blue-500">Project Owner</span>}
			</div>
		</>
	);
};

export default MemberUserCell;
