import Link from "next/link";

import { BadgeOwner } from "@/components/Badges/Badges";
import { Avatar } from "@/components/Badges/Avatar";

const ProjectMembers = ({ members = [] }) => {
	return (
		<>
			<div className="border rounded-xl p-6 bg-slate-800/50 border-slate-700 shadow-xl overflow-auto">
				<h2 className="text-xl font-bold mb-6">Members</h2>
				{members.map((member, index) => (
					<div key={index} className="text-gray-300 text-lg mb-5 last:mb-0 flex items-center">
						<Link href={`/users/${member.user.userId}`}>
							<div className="mr-3">
								<Avatar img={member.user.profilePicture?.link} size={"std"} alt={"member profile picture"} />
							</div>
						</Link>
						<Link href={`/users/${member.user.userId}`} className="font-semibold text-white">
							{member.user.username}
						</Link>
						{member.role === "owner" && (
							<div className="ml-2">
								<BadgeOwner size={"sm"} />
							</div>
						)}
					</div>
				))}
			</div>
		</>
	);
};
export default ProjectMembers;
