import { IoLocationOutline, IoBusinessOutline, IoChatbubbleEllipsesOutline, IoLinkOutline } from "react-icons/io5";
import ProfilePicture from "@/components/User/UserProfilePublic/ProfilePicture";
import ProjectCounter from "@/components/Common/ProjectCounter";

const UserCardAboutMe = ({ userId, username, profilePicture, backgroundPicture, description, projectsCount, locationCity, locationCountry, company, languages, website, quickSkills }) => {
	return (
		<div className="md:row-span-2 bg-base-450 shadow-2xl relative pb-8">
			{/* Profile and background pictures */}
			<ProfilePicture userId={userId} profilePicture={profilePicture} backgroundPicture={backgroundPicture} />

			{/* User card text */}
			<div className="px-6">
				{/* Username and description */}
				<div className="text-center my-4">
					<h1 className="text-3xl font-semibold mb-1">{username}</h1>
					<p className="text-gray-300">{description}</p>
				</div>

				{/* Quick skills */}
				{quickSkills && quickSkills.length > 0 && (
					<div className="mb-4">
						<div className="flex flex-wrap justify-center gap-3">
							{quickSkills.map((skill, index) => (
								<span key={index} className="flex items-center px-3 pt-0.5 pb-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-sm shadow-sm">
									{skill}
								</span>
							))}
						</div>
					</div>
				)}

				{/* Projects counters */}
				<div className="my-6">
					<ProjectCounter projectsCount={projectsCount} />
				</div>

				{/* User details */}
				{(locationCity || locationCountry || company || website || (languages && languages.length > 0)) && (
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
							{languages && languages.length > 0 && (
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
				)}
			</div>
		</div>
	);
};
export default UserCardAboutMe;
