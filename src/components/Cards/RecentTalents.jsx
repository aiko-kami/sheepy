import Image from "next/image";
import Link from "next/link";
import UserCard from "./UserCard";

const RecentTalents = () => {
	const user = {
		userId: "463",
		username: "Marine",
		profilePicture: "https://picsum.photos/id/64/300/300",
		description: "Hello! I am web designer ready to help you with your project ideas.",
		talents: ["Dev", "Web", "Frontend"],
		tags: [
			{
				name: "Dev",
				link: "/tags/dev",
				bgColor: "bg-pink-400",
				size: "xs",
			},
			{
				name: "Web",
				link: "/tags/web",
				bgColor: "bg-pink-400",
				size: "xs",
			},
			{
				name: "Frontend",
				link: "/tags/frontend",
				bgColor: "bg-pink-400",
				size: "xs",
			},
		],
	};

	return (
		<>
			<div className="my-4 flex flex-wrap justify-center gap-6">
				<UserCard user={user} />
				<UserCard user={user} />
				<UserCard user={user} />
				<UserCard user={user} />
			</div>
		</>
	);
};

export default RecentTalents;
