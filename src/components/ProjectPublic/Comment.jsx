import { DateTime } from "luxon";

import { Badge } from "@/components/Badges/Badges";

const Comment = ({ comment }) => {
	const { username, profilePicture, dateTime, message, isOwner } = comment;
	const relativeDate = DateTime.fromISO(dateTime).toRelative();
	return (
		<>
			<img class="object-cover w-12 h-12 border-2 border-blue-500 rounded-full" alt="profile picture" src={profilePicture} />
			<div class="flex-col mt-1">
				<div class="flex items-end px-4 mb-2 font-bold text-gray-800">
					{username}
					<span class="ml-2 text-sm font-normal text-gray-500">{relativeDate}</span>
					{isOwner && (
						<div class="ml-2">
							<Badge badge={{ name: "Project Owner", size: "xs", bgColor: "bg-base-500", bgColorHover: "bg-gray-800" }} />
						</div>
					)}
				</div>
				<p class="ml-2 mb-3 p-3 text-sm font-medium bg-gray-100 text-gray-600 rounded-md">{message}</p>
				<button class="inline-flex items-center ml-4 flex-column">
					<svg class="w-5 h-5 text-gray-600 cursor-pointer fill-current hover:text-gray-900" viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
							fill-rule="nonzero"
						/>
					</svg>
				</button>
				<button class="inline-flex items-center px-1 ml-1 flex-column">
					<svg class="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
						></path>
					</svg>
				</button>
			</div>
		</>
	);
};
export default Comment;
