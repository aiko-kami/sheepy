import UserProfileMenu from "@/components/User/UserProfilePrivate/UserProfileMenu";

export const metadata = {
	title: "My profile - Sheepy",
	description: "User personal profile page",
};

const MyProfilePage = async () => {
	return (
		<>
			<div className="grid md:grid-cols-2 md:grid-rows-2 gap-8 mb-8">
				{/* User card with pictures and about me */}
				<UserProfileMenu />
			</div>
		</>
	);
};

export default MyProfilePage;
