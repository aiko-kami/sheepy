"use client";

import { useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";

const Chat = ({ conversation }) => {
	const chatContainerRef = useRef(null); // Reference for chat messages container

	// Auto-scroll when conversation changes
	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
		}
	}, [conversation?.userId]); // Dependency: Trigger when conversation.userId changes

	if (!conversation) return <div className="flex-1 p-4">Select a contact to start chatting</div>;

	return (
		<>
			<div className="flex-1 flex flex-col">
				<div className="p-4 flex items-center border-b border-gray-700">
					<img className="h-10 w-10 rounded-full object-cover" src={conversation.avatar} alt="Profile picture" />
					<span className="ml-4">Chat with {conversation.name}</span>
				</div>
				{/* Chat Messages Container */}
				<div ref={chatContainerRef} className="flex-1 p-4 overflow-auto">
					{conversation.messages.map((chat) => (
						<div key={chat.id} className={`flex items-end ${chat.type === "sent" ? "justify-end" : "justify-start"}`}>
							{chat.type === "received" && <img className="h-6 w-6 rounded-full object-cover mr-2 mb-2" src={conversation.avatar} alt="Profile picture" />}
							<div className={`rounded-lg px-6 py-2 ${chat.type === "sent" ? "bg-blue-600 text-white" : "bg-green-600"} my-1`}>
								<p>{chat.message}</p>
								<span className="text-[12px]"> {chat.timestamp}</span>
							</div>
						</div>
					))}
				</div>
				<div className="p-4 flex">
					<input className="flex-1 p-2 pb-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-0" type="text" placeholder="Type a message..." />
					<button className="ml-2 bg-blue-600 px-3 rounded-lg text-white">
						<div className="flex">
							Send <FiSend className="ml-2 mt-1 text-xl" />
						</div>
					</button>
				</div>
			</div>
		</>
	);
};

export default Chat;
