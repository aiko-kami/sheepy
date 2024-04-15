import Image from "next/image";
import Link from "next/link";
import UserCard from "./UserCard";

const RecentTalents = () => {
	return (
		<>
			<div className="my-4 flex flex-wrap justify-center gap-6">
				<UserCard />
				<UserCard />
				<UserCard />
			</div>
		</>
	);
};

export default RecentTalents;
