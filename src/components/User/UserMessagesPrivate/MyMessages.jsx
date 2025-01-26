"use client";
import { useState } from "react";

import Contacts from "@/components/User/UserMessagesPrivate/Contacts";
import Chat from "@/components/User/UserMessagesPrivate/Chat";

const MyMessages = ({ user, messages }) => {
	console.log("🚀 ~ MyMessages ~ messages:", messages);

	const [selectedConversation, setSelectedConversation] = useState(messages.conversations[1]);

	const handleSelectContact = (userId) => {
		const conversation = messages.conversations.find((conv) => conv.userId === userId);

		console.log("🚀 ~ handleSelectContact ~ conversation:", conversation);

		if (conversation) {
			setSelectedConversation(conversation);
		}
	};

	return (
		<>
			<div className="flex border border-gray-700 mx-auto mt-20 rounded-lg">
				<Contacts contacts={messages.contacts} onSelectContact={handleSelectContact} />
				<Chat conversation={selectedConversation} />
			</div>
		</>
	);
};

export default MyMessages;
