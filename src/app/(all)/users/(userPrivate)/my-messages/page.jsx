import MyMessages from "@/components/User/UserMessagesPrivate/MyMessages";

import user from "@/mock/user.json";
import messages from "@/mock/messages.json";

export const metadata = {
	title: "My messages - Sheepy",
	description: "User personal messages page",
};

const MyMessagesPage = async () => {
	const res = await fetch("https://panda-server-37m0.onrender.com/projectsExtended/crushProjects", {
		cache: "no-store",
	});
	const data = await res.json();

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
