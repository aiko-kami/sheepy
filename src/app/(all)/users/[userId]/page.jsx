import UserCardAboutMe from "@/components/UserProfilePublic/UserCardAboutMe";
import UserCardBio from "@/components/UserProfilePublic/UserCardBio";
import UserCardTalents from "@/components/UserProfilePublic/UserCardTalents";
import UserCardProjects from "@/components/UserProfilePublic/UserCardProjects";

import user from "@/user.json";

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
