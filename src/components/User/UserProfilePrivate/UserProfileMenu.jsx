import UserCardPictureBio from "@/components/User/UserProfilePrivate/UserCardPictureBio";
import UserCardDetails from "@/components/User/UserProfilePrivate/UserCardDetails";
import UserCardEmail from "@/components/User/UserProfilePrivate/UserCardEmail";
import UserCardPassword from "@/components/User/UserProfilePrivate/UserCardPassword";
import { ApiGetUserFromSessionServer } from "@/lib/api/usersServer";

const UserProfileMenu = async () => {
	const userResponse = await ApiGetUserFromSessionServer();
	if (!userResponse.ok) {
		return <p>Error loading user: {userResponse.message}</p>;
	}

	const user = userResponse.data;

	if (!user) {
		return <div>You must be logged in to view your profile.</div>;
	}

	return (
		<>
			<div className="grid md:grid-cols-2 gap-8 mb-8">
				{/* User card with pictures and about me */}
				<UserCardPictureBio user={user} />

				{/* User card with my details */}
				<UserCardDetails user={user} />

				{/* User card with email */}
				<UserCardEmail user={user} />

				{/* User card with password */}
				<UserCardPassword user={user} />
			</div>
		</>
	);
};

export default UserProfileMenu;
