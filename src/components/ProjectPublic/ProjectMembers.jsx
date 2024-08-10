import Image from "next/image";
import Link from "next/link";

const ProjectMembers = ({ members }) => {
	return (
		<>
			<h2 className="font-semibold text-3xl mb-3">Members</h2>
			<hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
			<div className="mt-5 mb-8">
				{members.map((member, index) => (
					<div key={index} className="text-gray-300 text-lg mb-4 flex items-center">
						<Link href={`/users/${member.userId}`}>
							<Image src={member.profilePicture} className="object-cover rounded-full w-16 h-16 mr-3" alt="member profile picture" height={0} width={0} sizes="100vw" />
						</Link>
						<Link href={`/users/${member.userId}`} className="font-semibold">
							{member.username}
						</Link>
						<span className="mr-1">, </span>
						<p>{member.role}</p>
					</div>
				))}
			</div>
		</>
	);
};
export default ProjectMembers;
