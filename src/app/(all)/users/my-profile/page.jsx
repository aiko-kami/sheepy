import UserCardPictureBio from "@/components/UserProfilePrivate/UserCardPictureBio";
import UserCardDetails from "@/components/UserProfilePrivate/UserCardDetails";
import UserCardAccount from "@/components/UserProfilePrivate/UserCardAccount";

import user from "@/mock/user.json";

export const metadata = {
	title: "My profile - Sheepy",
	description: "User personal profile page",
};

const MyProfilePage = ({ params }) => {
	return (
		<>
			<div className="grid md:grid-cols-2 md:grid-rows-2 gap-8 mb-8">
				{/* User card with pictures and about me */}
				<UserCardPictureBio user={user} />

				{/* User card with my details */}
				<UserCardDetails user={user} />

				{/* User card with account info */}
				<UserCardAccount user={user} />
			</div>
		</>
	);
};

export default MyProfilePage;
