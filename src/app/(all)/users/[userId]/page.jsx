import Image from "next/image";
import Link from "next/link";

import UserTalentCard from "@/components/Cards/UserTalentCard/UserTalentCard";
import ProjectsList from "@/components/UserProfilePublic/ProjectsList";

import { IoLocationOutline, IoBusinessOutline, IoChatbubbleEllipsesOutline, IoLinkOutline } from "react-icons/io5";

const UserDescriptionPage = ({ params }) => {
	const user = {
		username: "Captain_Picard",
		description: "Seasoned Starfleet Captain, Diplomat, and Explorer",
		profilePicture: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Jean-Luc_Picard_2.jpg",
		locationCity: "USS Enterprise",
		locationCountry: "United Federation of Planets",
		company: "Starfleet",
		languages: ["Federation Standard", "Klingon", "Vulcan"],
		website: "https://memory-alpha.fandom.com/wiki/Jean-Luc_Picard",
		talents: ["Strategic Leadership", "Diplomacy", "Tactical Command", "Archaeology"],
		bio: "I am Captain Jean-Luc Picard of the USS Enterprise. As a dedicated Starfleet officer, I have spent my career boldly going where no one has gone before, exploring the far reaches of space, seeking out new life and civilizations, and upholding the principles of peace, diplomacy, and justice.",
	};
	return (
		<>
			<div className="grid md:grid-cols-3 gap-8 my-8">
				{/* User card with picture */}
				<div className="md:row-span-2 bg-base-450 shadow-2xl relative">
					{/* background picture */}
					<div className="h-46 relative">
						<Image
							src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/cerisier-japon-fuji-min.jpeg"
							fill
							alt="Background profile picture"
							className="object-cover"
						/>
					</div>
					{/* Profile picture */}
					<div className="h-40 w-40 tn:min-h-60 tn:min-w-60 relative mx-auto -mt-30 rounded-full">
						<Image src={user.profilePicture} fill alt="User profile picture" className="rounded-full object-cover border-8 border-base-500" />
					</div>
					{/* Username and description */}
					<div className="text-center my-4">
						<h1 className="text-3xl font-semibold mb-2">{user.username}</h1>
						<p className="text-gray-300">{user.description}</p>
					</div>
					{/* Projects counters */}
					<div className="flex justify-evenly my-8 text-gray-300">
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
					<div className="px-4">
						<p className="text-2xl font-semibold">More about me...</p>
						<ul className="px-1">
							<li className="flex my-4">
								<div>
									<IoLocationOutline className="text-gray-400 mr-2 text-2xl" />
								</div>
								<p className="">
									<span className="font-semibold text-gray-400">Location:</span> {user.locationCity}, {user.locationCountry}
								</p>
							</li>
							<li className="flex my-4">
								<div>
									<IoBusinessOutline className="text-gray-400 mr-2 text-2xl" />
								</div>
								<p className="">
									<span className="font-semibold text-gray-400">Company:</span> {user.company}
								</p>
							</li>
							<li className="flex my-4">
								<div>
									<IoChatbubbleEllipsesOutline className="text-gray-400 mr-2 text-2xl" />
								</div>
								<p className="">
									<span className="font-semibold text-gray-400">Languages:</span> {user.languages.join(", ")}
								</p>
							</li>
							<li className="flex my-4">
								<div>
									<IoLinkOutline className="text-gray-400 mr-2 text-2xl" />
								</div>
								<p className="">
									<span className="font-semibold text-gray-400">Website:</span>{" "}
									<a href={user.website} className="italic hover:underline">
										{user.website}
									</a>
								</p>
							</li>
						</ul>
					</div>
				</div>

				{/* User card with bio */}
				<div className="md:col-span-2 bg-base-450 shadow-2xl p-6">
					<h2 className="text-2xl font-semibold mb-2">My Bio</h2>
					<p className="p-1 text-justify">
						{user.bio}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore vitae enim aut, quam quas consectetur voluptatum provident quisquam maiores repudiandae amet, omnis, atque
						voluptatem aliquam similique voluptas quibusdam culpa aspernatur quod. Tempora fuga nobis hic? Nemo architecto placeat culpa tempora ipsa alias. Distinctio est provident inventore labore?
						Iure accusantium omnis sed dolorum laudantium in consectetur laboriosam illum. Doloremque et alias ipsam sunt. Facilis ullam, nihil qui dignissimos corporis obcaecati? Labore, blanditiis
						placeat cum reprehenderit libero eveniet non rerum quaerat cupiditate expedita possimus nemo nihil minus neque omnis error aspernatur praesentium ipsum, ipsam delectus provident quis
						deserunt mollitia reiciendis. Nam!
					</p>
				</div>

				{/* User card with talents */}
				<div className="md:col-span-2 bg-base-450 shadow-2xl p-6">
					<h2 className="text-2xl font-semibold mb-2">My talents</h2>
					<ul className="py-2 grid md:grid-cols-3 gap-4">
						<li>
							<UserTalentCard />
						</li>
						<li>
							<UserTalentCard />
						</li>
						<li>
							<UserTalentCard />
						</li>
						<li>
							<UserTalentCard />
						</li>
					</ul>
				</div>

				{/* User card with projects */}
				<ProjectsList />
			</div>
		</>
	);
};

export default UserDescriptionPage;
