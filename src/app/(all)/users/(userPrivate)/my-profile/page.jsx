import { redirect } from "next/navigation";

import SeeMyPublicProfileButton from "@/components/User/UserProfilePrivate/SeeMyPublicProfileButton";
import UserCardPictureBio from "@/components/User/UserProfilePrivate/UserCardPictureBio";
import UserCardDetails from "@/components/User/UserProfilePrivate/UserCardDetails";
import UserCardEmail from "@/components/User/UserProfilePrivate/UserCardEmail";
import UserCardPassword from "@/components/User/UserProfilePrivate/UserCardPassword";
import Error from "@/components/Errors/Error";

import { ApiGetUserFromSessionServer } from "@/lib/api/userServer";
import { ERRORS } from "@/lib/constants";

export const metadata = {
	title: "My profile - Make It",
	description: "User personal profile page",
};

const MyProfilePage = async () => {
	const result = await ApiGetUserFromSessionServer();
	if (!result.ok || !result.data || !result.data.user) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.USER_TITLE} message={ERRORS.NOT_FOUND.USER_MESSAGE} extraMessage={result.message} />;
	}

	const user = result.data.user;

	const username = user?.username;
	const userId = user?.userId;
	const profilePicture = user?.profilePicture;
	const backgroundPicture = user?.backgroundPicture;
	const description = user?.description;
	const bio = user?.bio;
	const locationCity = user?.location?.city;
	const locationCountry = user?.location?.country;
	const company = user?.company;
	const languages = user?.languages;
	const website = user?.website;
	const email = user?.email;

	return (
		<>
			<div className="flex justify-end mb-6">
				<SeeMyPublicProfileButton userId={userId} />
			</div>
			<div className="grid md:grid-cols-2 gap-8 mb-8">
				{/* User card with pictures and about me */}
				<UserCardPictureBio username={username} profilePicture={profilePicture} backgroundPicture={backgroundPicture} description={description} bio={bio} />

				{/* User card with my details */}
				<UserCardDetails locationCity={locationCity} locationCountry={locationCountry} languages={languages} company={company} website={website} />

				{/* User card with email */}
				<UserCardEmail email={email} />

				{/* User card with password */}
				<UserCardPassword />
			</div>
		</>
	);
};

export default MyProfilePage;
