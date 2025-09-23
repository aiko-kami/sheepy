import Image from "next/image";
import Link from "next/link";

const ProjectMembers = ({ members }) => {
	return (
		<>
			<div className="lg:mx-4 border rounded-xl p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-xl mb-4 sm:mb-8">
				<h2 className="text-xl font-bold mb-6">Members</h2>
				{members.map((member, index) => (
					<div key={index} className="text-gray-300 text-lg mb-4 last:mb-0 flex items-center">
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
