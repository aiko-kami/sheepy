"use client";

import { FiSend } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Chat = ({ conversation }) => {
	return (
		<>
			<div className="flex-1 flex flex-col">
				<div className="p-4 flex items-center border-b border-gray-700">
					<img className="h-10 w-10 rounded-full object-cover" src={"https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg"} alt="Profile picture" />

					<span className="ml-4">Chat with Josh</span>
					<BsThreeDotsVertical className="ml-auto" />
				</div>
				<div className="flex-1 p-4 overflow-auto">
					{conversation.map((chat) => (
						<div key={chat.id} className={`flex items-end ${chat.type === "sent" ? "justify-end" : "justify-start"}`}>
							{chat.type === "received" && (
								<img className="h-6 w-6 rounded-full object-cover mr-2 mb-2" src={"https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg"} alt="Profile picture" />
							)}
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
						<FiSend className="text-xl" />
					</button>
				</div>
			</div>
		</>
	);
};

export default Chat;
