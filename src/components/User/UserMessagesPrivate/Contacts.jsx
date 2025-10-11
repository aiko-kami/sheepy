"use client";

import { FaSearch } from "react-icons/fa";

const Contacts = ({ contacts, onSelectContact }) => {
	return (
		<>
			<div className="w-1/4 bg-gray-800 text-white rounded-l-lg overflow-auto">
				<div className="flex items-center bg-gray-700 p-2 w-11/12 mx-auto mt-4 mb-3 rounded-md">
					<FaSearch />
					<input className="bg-transparent p-2 w-full text-white focus:outline-none focus:ring-0" placeholder="Search contacts…" />
				</div>
				{contacts.map((contact) => (
					<div key={contact.userId} className="flex items-center p-3 hover:bg-gray-700 cursor-pointer" onClick={() => onSelectContact(contact.userId)}>
						<img className="h-10 w-10 rounded-full object-cover" src={contact.avatar} alt={`Profile picture of ${contact.name}`} />
						<div className="ml-4">
							<p>{contact.name}</p>
							<p className="text-gray-400 text-sm">
								{contact.senderYou && "You: "}
								{contact.lastMessage}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Contacts;
