import Image from "next/image";
import Link from "next/link";
import BadgeTag from "@/components/Badges/BadgeTag";

const UserCard = ({ user }) => {
	const { userId, username, profilePicture, description, talents, tags } = user;

	return (
		<>
			<div className="rounded-lg max-w-66 shadow-2xl bg-blue-900 p-4">
				<div className="flex flex-col items-center mb-2">
					<Link href={`/users/${userId}`}>
						<Image src={profilePicture} className="object-cover rounded-full w-58 h-58" alt="Card" height={0} width={0} sizes="100vw" />
					</Link>
				</div>
				<div className="px-4 text-center">
					<Link href={`/users/${userId}`}>
						<h2 className="font-semibold text-xl pb-1">{username}</h2>
					</Link>
					<div className="flex flex-wrap justify-center">
						<div className="flex flex-wrap justify-center h-8 overflow-hidden">
							{tags.map((tag, index) => (
								<div key={index} className="mx-1 my-1">
									<BadgeTag tag={tag} />
								</div>
							))}
						</div>
					</div>
					<p className="pb-1 line-clamp-4">{description}</p>
				</div>
			</div>
		</>
	);
};

export default UserCard;
