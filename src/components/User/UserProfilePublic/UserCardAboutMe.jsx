import { IoLocationOutline, IoBusinessOutline, IoChatbubbleEllipsesOutline, IoLinkOutline } from "react-icons/io5";
import ProfilePicture from "@/components/User/UserProfilePublic/ProfilePicture";
import ProjectCounter from "@/components/Common/ProjectCounter";

const UserCardAboutMe = ({ userId, username, profilePicture, backgroundPicture, description, projectCount, locationCity, locationCountry, company, languages, website }) => {
	return (
		<div className="md:row-span-2 bg-base-450 shadow-2xl relative pb-8">
			{/* Profile and background pictures */}
			<ProfilePicture userId={userId} profilePicture={profilePicture} backgroundPicture={backgroundPicture} />
			{/* User card text */}
			<div className="px-6">
				{/* Username and description */}
				<div className="text-center my-5">
					<h1 className="text-3xl font-semibold mb-1">{username}</h1>
					<p className="text-gray-300">{description}</p>
				</div>
				{/* Projects counters */}
				<ProjectCounter projectCount={projectCount} />
				{/* User details */}
				<div>
					<h2 className="text-2xl font-semibold mb-4">More about me...</h2>
					<ul>
						{(locationCity || locationCountry) && (
							<li className="flex mt-4">
								<div>
									<IoLocationOutline className="text-gray-400 mr-2 text-2xl" />
								</div>
								<p>
									<span className="font-semibold text-gray-400 mr-1">Location:</span>
									{locationCity && locationCountry ? `${locationCity}, ${locationCountry}` : locationCity || locationCountry}
								</p>
							</li>
						)}
						{company && (
							<li className="flex mt-4">
								<div>
									<IoBusinessOutline className="text-gray-400 mr-2 text-2xl" />
								</div>
								<p>
									<span className="font-semibold text-gray-400 mr-1">Company:</span>
									{company}
								</p>
							</li>
						)}
						{languages && (
							<li className="flex mt-4">
								<div>
									<IoChatbubbleEllipsesOutline className="text-gray-400 mr-2 text-2xl" />
								</div>
								<p>
									<span className="font-semibold text-gray-400 mr-1">Languages:</span>
									{languages?.join(", ")}
								</p>
							</li>
						)}
						{website && (
							<li className="flex mt-4">
								<div>
									<IoLinkOutline className="text-gray-400 mr-2 text-2xl" />
								</div>
								<p>
									<span className="font-semibold text-gray-400 mr-1">Website:</span>
									<a href={website} className="italic hover:underline">
										{website}
									</a>
								</p>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default UserCardAboutMe;
