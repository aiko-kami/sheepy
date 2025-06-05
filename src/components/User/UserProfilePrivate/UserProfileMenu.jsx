import UserCardPictureBio from "@/components/User/UserProfilePrivate/UserCardPictureBio";
import UserCardDetails from "@/components/User/UserProfilePrivate/UserCardDetails";
import UserCardAccount from "@/components/User/UserProfilePrivate/UserCardAccount";
import { ApiGetUserFromSessionServer } from "@/lib/api/usersServer";

const UserProfileMenu = async () => {
	const user = await ApiGetUserFromSessionServer();

	if (!user) {
		return <div>You must be logged in to view your profile.</div>;
	}

	return (
		<>
			{/* User card with pictures and about me */}
			<UserCardPictureBio user={user} />

			{/* User card with my details */}

			{/* User card with account info */}
			<UserCardAccount user={user} />
		</>
	);
};

export default UserProfileMenu;
