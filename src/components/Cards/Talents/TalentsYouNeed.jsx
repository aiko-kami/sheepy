import UserCard from "./UserCard";
import UsersYouNeed from "@/mock/UsersYouNeed.json";

const TalentsYouNeed = () => {
	return (
		<>
			<div className="my-4 flex flex-wrap justify-center gap-6">
				{UsersYouNeed.map((user, index) => (
					<UserCard key={index} user={user} animate={true} />
				))}
			</div>
		</>
	);
};

export default TalentsYouNeed;
