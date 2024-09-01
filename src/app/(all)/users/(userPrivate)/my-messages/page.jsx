import MyMessages from "@/components/User/UserMessagesPrivate/MyMessages";

import user from "@/mock/user.json";

export const metadata = {
	title: "My messages - Sheepy",
	description: "User personal messages page",
};

const MyMessagesPage = () => {
	return (
		<>
			<div className="container min-w-full mx-auto px-2 md:px-8">
				<MyMessages user={user} />
			</div>
		</>
	);
};

export default MyMessagesPage;
