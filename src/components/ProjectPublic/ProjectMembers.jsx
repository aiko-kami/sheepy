import Image from "next/image";
import Link from "next/link";
import talentNeededProfilePicture from "@/public/images/userTalentNeeded.jpg";

const ProjectMembers = ({ members }) => {
	return (
		<>
			<div className="lg:mx-4 border rounded-xl p-6 bg-slate-800/50 border-slate-700 shadow-xl mb-4 sm:mb-8">
				<h2 className="text-xl font-bold mb-6">Members</h2>
				{members.map((member, index) => (
					<div key={index} className="text-gray-300 text-lg mb-5 last:mb-0 flex items-center">
						<Link href={`/users/${member.user.userId}`}>
							<Image
								src={member.user.profilePicture?.link || talentNeededProfilePicture}
								className="object-cover rounded-full w-16 h-16 mr-3"
								alt="member profile picture"
								height={0}
								width={0}
								sizes="100vw"
							/>
						</Link>
						<Link href={`/users/${member.user.userId}`} className="font-semibold text-white">
							{member.user.username}
						</Link>
						{member.role === "owner" && (
							<div className="sm:ml-3">
								<span className="py-1 px-2.5 text-sm text-white font-bold text-nowrap rounded cursor-default bg-blue-500">Project Owner</span>
							</div>
						)}
					</div>
				))}
			</div>
		</>
	);
};
export default ProjectMembers;
