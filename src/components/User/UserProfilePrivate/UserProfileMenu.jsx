import { redirect } from "next/navigation";

import UserCardPictureBio from "@/components/User/UserProfilePrivate/UserCardPictureBio";
import UserCardDetails from "@/components/User/UserProfilePrivate/UserCardDetails";
import UserCardEmail from "@/components/User/UserProfilePrivate/UserCardEmail";
import UserCardPassword from "@/components/User/UserProfilePrivate/UserCardPassword";
import { ApiGetUserFromSessionServer } from "@/lib/api/usersServer";
import Error from "@/components/Errors/Error";

const UserProfileMenu = async () => {
	const result = await ApiGetUserFromSessionServer();
	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title="404 - User Not Found" message="Sorry, we couldn’t find the user you are looking for... 😥" extraMessage={result.message} />;
	}

	const user = result.data?.user;
	if (!user) {
		return <Error title="404 - User Not Found" message="Sorry, we couldn’t find the user you are looking for... 😥" />;
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
