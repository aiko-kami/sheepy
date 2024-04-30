import UserCardAboutMe from "@/components/UserProfilePublic/UserCardAboutMe";
import UserCardBio from "@/components/UserProfilePublic/UserCardBio";
import UserCardTalents from "@/components/UserProfilePublic/UserCardTalents";
import UserCardProjects from "@/components/UserProfilePublic/UserCardProjects";

const UserDescriptionPage = ({ params }) => {
	const user = {
		username: "Captain_Picard",
		description: "Seasoned Starfleet Captain, Diplomat, and Explorer",
		profilePicture: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Jean-Luc_Picard_2.jpg",
		locationCity: "USS Enterprise",
		locationCountry: "United Federation of Planets",
		company: "Starfleet",
		languages: ["Federation Standard", "Klingon", "Vulcan"],
		website: "https://memory-alpha.fandom.com/wiki/Jean-Luc_Picard",
		talents: ["Strategic Leadership", "Diplomacy", "Tactical Command", "Archaeology"],
		bio: "I am Captain Jean-Luc Picard of the USS Enterprise. As a dedicated Starfleet officer, I have spent my career boldly going where no one has gone before, exploring the far reaches of space, seeking out new life and civilizations, and upholding the principles of peace, diplomacy, and justice.",
	};
	return (
		<>
			<div className="grid md:grid-cols-3 gap-8 my-8">
				{/* User card with picture */}
				<UserCardAboutMe user={user} />

				{/* User card with bio */}
				<UserCardBio userBio={user.bio} />

				{/* User card with talents */}
				<UserCardTalents />

				{/* User card with projects */}
				<UserCardProjects />
			</div>
		</>
	);
};

export default UserDescriptionPage;
