import UserProfileMenu from "@/components/User/UserProfilePrivate/UserProfileMenu";

export const metadata = {
	title: "My profile - Make It",
	description: "User personal profile page",
};

const MyProfilePage = async () => {
	return (
		<>
			<UserProfileMenu />
		</>
	);
};

export default MyProfilePage;
