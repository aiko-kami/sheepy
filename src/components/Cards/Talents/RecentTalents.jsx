import UserCard from "./UserCard";
import RecentUsers from "@/mock/RecentUsers.json";

const RecentTalents = () => {
	return (
		<>
			<div className="my-4 flex flex-wrap justify-center gap-6">
				{RecentUsers.map((user, index) => (
					<UserCard key={index} user={user} animate={true} />
				))}
			</div>
		</>
	);
};

export default RecentTalents;
