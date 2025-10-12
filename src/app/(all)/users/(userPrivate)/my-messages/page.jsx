import MyMessages from "@/components/User/UserMessagesPrivate/MyMessages";

import user from "@/mock/user.json";
import messages from "@/mock/messages.json";

export const metadata = {
	title: "My messages - Make It",
	description: "User personal messages page",
};

const MyMessagesPage = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projectsExtended/crushProjects`, {
		cache: "no-store",
		credentials: "include",
	});
	const data = await response.json();

	return (
		<>
			<div className="container min-w-full mx-auto px-2 md:px-8">
				<ul>
					{data.data.projects.map((project, index) => (
						<li key={index}>{project.title}</li>
					))}
				</ul>
				<MyMessages user={user} messages={messages} />
			</div>
		</>
	);
};

export default MyMessagesPage;
