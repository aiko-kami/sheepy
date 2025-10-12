import UserCardAboutMe from "@/components/User/UserProfilePublic/UserCardAboutMe";
import UserCardBio from "@/components/User/UserProfilePublic/UserCardBio";
import UserCardTalents from "@/components/User/UserProfilePublic/UserCardTalents";
import UserCardProjects from "@/components/User/UserProfilePublic/UserCardProjects";

import user from "@/mock/user.json";

export const metadata = {
	title: "Talent - Make It",
	description: "User profile public page",
};

const UserDescriptionPage = ({ params }) => {
	return (
		<>
			<div className="grid md:grid-cols-3 gap-8 my-8">
				{/* User card with pictures and about me */}
				<UserCardAboutMe user={user} />

				{/* User card with bio */}
				<UserCardBio userBio={user.bio} />

				{/* User card with talents */}
				<UserCardTalents talents={user.talents} />

				{/* User card with projects */}
				<UserCardProjects projects={user.projects} />
			</div>
		</>
	);
};

export default UserDescriptionPage;
