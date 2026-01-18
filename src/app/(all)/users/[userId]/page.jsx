import UserCardAboutMe from "@/components/User/UserProfilePublic/UserCardAboutMe";
import UserCardBio from "@/components/User/UserProfilePublic/UserCardBio";
import UserCardTalents from "@/components/User/UserProfilePublic/UserCardTalents";
import UserCardProjects from "@/components/User/UserProfilePublic/UserCardProjects";
import Error from "@/components/Errors/Error";

import user from "@/mock/user.json";

import { ApiGetUserPublicData } from "@/lib/api/userServer";

export const metadata = {
	title: "Talent - Make It",
	description: "User profile public page",
};

const UserDescriptionPage = async ({ params }) => {
	const { userId } = params;

	const result = await ApiGetUserPublicData(userId);
	if (!result.ok) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title="404 - User Not Found" message="Sorry, we couldn’t find the user you are looking for... 😥" extraMessage={result.message} />;
	}

	const user2 = result.data?.user;

	const username = user2?.username;
	const profilePicture = user2?.profilePicture;
	const backgroundPicture = user2?.backgroundPicture;
	const description = user2?.description;
	const projects = user2?.projects;
	const locationCity = user2?.location?.city;
	const locationCountry = user2?.location?.country;
	const company = user2?.company;
	const languages = user2?.languages;
	const website = user2?.website;
	const bio = user2?.bio;
	const talents = user?.talents;

	console.log("🚀 ~ UserDescriptionPage ~ user2:", user);

	return (
		<>
			<div className="grid md:grid-cols-3 gap-8 my-8">
				{/* User card with pictures and about me */}
				<UserCardAboutMe
					username={username}
					profilePicture={profilePicture}
					backgroundPicture={backgroundPicture}
					description={description}
					projects={projects}
					locationCity={locationCity}
					locationCountry={locationCountry}
					company={company}
					languages={languages}
					website={website}
				/>

				{/* User card with bio */}
				<UserCardBio userBio={bio} />

				{/* User card with talents */}
				<UserCardTalents talents={talents} />

				{/* User card with projects */}
				<UserCardProjects projects={user.projects} />
			</div>
		</>
	);
};

export default UserDescriptionPage;
