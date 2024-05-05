import UserCardPictureBio from "@/components/UserProfilePrivate/UserCardPictureBio";
import UserCardDetails from "@/components/UserProfilePrivate/UserCardDetails";

import user from "@/user.json";

const MyProfilePage = ({ params }) => {
	return (
		<>
			<div className="grid md:grid-cols-2 gap-8 my-8">
				{/* User card with pictures and about me */}
				<UserCardPictureBio user={user} />

				{/* User card with bio */}
				<UserCardDetails user={user} />
			</div>
		</>
	);
};

export default MyProfilePage;
