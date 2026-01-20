import { redirect } from "next/navigation";

import UserCardAboutMe from "@/components/User/UserProfilePublic/UserCardAboutMe";
import UserCardBio from "@/components/User/UserProfilePublic/UserCardBio";
import UserCardTalents from "@/components/User/UserProfilePublic/UserCardTalents";
import UserCardProjects from "@/components/User/UserProfilePublic/UserCardProjects";
import Error from "@/components/Errors/Error";

import { ApiGetUserPublicData } from "@/lib/api/userServer";
import ERRORS from "@/lib/constants/errors";

import user2 from "@/mock/user.json";

const UserDescriptionPage = async ({ params }) => {
	const { userId } = params;

	const result = await ApiGetUserPublicData(userId);
	if (!result.ok || !result.data || !result.data.user) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.USER_TITLE} message={ERRORS.NOT_FOUND.USER_MESSAGE} extraMessage={result.message} />;
	}

	const user = result.data.user;

	const username = user?.username;
	const profilePicture = user?.profilePicture;
	const backgroundPicture = user?.backgroundPicture;
	const description = user?.description;
	const projects = user?.projects;
	const projectCount = user2?.projects?.projectCount;
	const locationCity = user?.location?.city;
	const locationCountry = user?.location?.country;
	const company = user?.company;
	const languages = user?.languages;
	const website = user?.website;
	const bio = user?.bio;
	const talents = user?.talents;

	console.log("🚀 ~ UserDescriptionPage ~ talents:", user?.talents);
	console.log("🚀 ~ UserDescriptionPage ~ talents2:", user2?.talents);

	return (
		<>
			<div className="grid md:grid-cols-3 gap-8 my-8">
				{/* User card with pictures and about me */}
				<UserCardAboutMe
					userId={userId}
					username={username}
					profilePicture={profilePicture}
					backgroundPicture={backgroundPicture}
					description={description}
					projectCount={projectCount}
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
				<UserCardProjects projects={user2.projects} />
			</div>
		</>
	);
};

export default UserDescriptionPage;
