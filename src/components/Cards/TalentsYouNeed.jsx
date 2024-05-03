import UserCard from "./UserCard";
import UsersYouNeed from "@/UsersYouNeed.json";

const TalentsYouNeed = () => {
	return (
		<>
			<div className="my-4 flex flex-wrap justify-center gap-6">
				{UsersYouNeed.map((user, index) => (
					<UserCard key={index} user={user} />
				))}
			</div>
		</>
	);
};

export default TalentsYouNeed;
