"use client";

import Contacts from "@/components/User/UserMessagesPrivate/Contacts";
import Chat from "@/components/User/UserMessagesPrivate/Chat";

const MyMessages = ({ user, messages }) => {
	return (
		<>
			<div className="flex border border-gray-700 mx-auto mt-20 rounded-lg">
				<Contacts contacts={messages.contacts} />
				<Chat conversation={messages.conversation} />
			</div>
		</>
	);
};

export default MyMessages;
