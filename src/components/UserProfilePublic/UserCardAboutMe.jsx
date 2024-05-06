import Image from "next/image";

import { IoLocationOutline, IoBusinessOutline, IoChatbubbleEllipsesOutline, IoLinkOutline } from "react-icons/io5";

const UserCardAboutMe = ({ user }) => {
	return (
		<div className="md:row-span-2 bg-base-450 shadow-2xl relative">
			{/* background picture */}
			<div className="h-46 relative">
				<Image
					src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/cerisier-japon-fuji-min.jpeg"
					fill
					sizes="100vw, (min-width: 768px) 200px"
					alt="Background profile picture"
					className="object-cover"
				/>
			</div>
			{/* Profile picture */}
			<div className="h-40 w-40 tn:min-h-60 tn:min-w-60 relative mx-auto -mt-30 rounded-full">
				<Image src={user.profilePicture} fill sizes="100vw, (min-width: 768px) 200px" alt="User profile picture" className="rounded-full object-cover border-8 border-base-500" />
			</div>
			{/* User card text */}
			<div className="p-6">
				{/* Username and description */}
				<div className="text-center">
					<h1 className="text-3xl font-semibold mb-1">{user.username}</h1>
					<p className="text-gray-300">{user.description}</p>
				</div>
				{/* Projects counters */}
				<div className="flex justify-evenly my-5 text-gray-300">
					<div className="text-center">
						<span className="text-4xl font-bold block uppercase tracking-wide text-white">3</span>
						<div className="text-sm ">projects</div>
						<div className="text-sm">on-going</div>
					</div>
					<div className="text-center">
						<span className="text-4xl font-bold block uppercase tracking-wide text-white">5</span>
						<div className="text-sm">projects</div>
						<div className="text-sm">created</div>
					</div>
					<div className="text-center">
						<span className="text-4xl font-bold block uppercase tracking-wide text-white">8</span>
						<div className="text-sm">projects</div>
						<div className="text-sm">completed</div>
					</div>
				</div>
				{/* User details */}
				<div>
					<p className="text-2xl font-semibold mb-4">More about me...</p>
					<ul>
						<li className="flex mt-4">
							<div>
								<IoLocationOutline className="text-gray-400 mr-2 text-2xl" />
							</div>
							<p>
								<span className="font-semibold text-gray-400">Location:</span> {user.locationCity}, {user.locationCountry}
							</p>
						</li>
						<li className="flex mt-4">
							<div>
								<IoBusinessOutline className="text-gray-400 mr-2 text-2xl" />
							</div>
							<p>
								<span className="font-semibold text-gray-400">Company:</span> {user.company}
							</p>
						</li>
						<li className="flex mt-4">
							<div>
								<IoChatbubbleEllipsesOutline className="text-gray-400 mr-2 text-2xl" />
							</div>
							<p>
								<span className="font-semibold text-gray-400">Languages:</span> {user.languages.join(", ")}
							</p>
						</li>
						<li className="flex mt-4">
							<div>
								<IoLinkOutline className="text-gray-400 mr-2 text-2xl" />
							</div>
							<p>
								<span className="font-semibold text-gray-400">Website:</span>{" "}
								<a href={user.website} className="italic hover:underline">
									{user.website}
								</a>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default UserCardAboutMe;
