import Image from "next/image";
import Link from "next/link";
import moz01 from "../../../../../public/assets/mosaic/moz01.png";

const UserDescriptionPage = ({ params }) => {
	const user = {
		username: "Captain_Picard",
		description: "Seasoned Starfleet Captain, Diplomat, and Explorer",
		profilePicture: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Jean-Luc_Picard_2.jpg",
		locationCity: "USS Enterprise",
		locationCountry: "United Federation of Planets",
		company: "Starfleet",
		bio: "I am Captain Jean-Luc Picard of the USS Enterprise. As a dedicated Starfleet officer, I have spent my career boldly going where no one has gone before, exploring the far reaches of space, seeking out new life and civilizations, and upholding the principles of peace, diplomacy, and justice.",
		languages: ["Federation Standard", "Klingon", "Vulcan"],
		website: "https://memory-alpha.fandom.com/wiki/Jean-Luc_Picard",
		talents: ["Strategic Leadership", "Diplomacy", "Tactical Command", "Archaeology"],
	};
	return (
		<div className="container my-8 mx-auto min-w-full bg-base-450 shadow-2xl">
			<div className="h-40 tn:h-70 relative">
				<Image
					src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/cerisier-japon-fuji-min.jpeg"
					fill
					alt="Background profile picture"
					className="object-cover"
				/>
			</div>
			<div className="hidden lg:block absolute lg:w-4/12 px-4 lg:order-1 right-0">
				<div className="flex justify-center py-4 lg:pt-4 pt-8">
					<div className="mr-4 p-3 text-center">
						<span className="text-4xl font-bold block uppercase tracking-wide text-blueGray-600">3</span>
						<div className="text-sm text-blueGray-400">projects</div>
						<div className="text-sm text-blueGray-400">on-going</div>
					</div>
					<div className="mr-4 p-3 text-center">
						<span className="text-4xl font-bold block uppercase tracking-wide text-blueGray-600">6</span>
						<div className="text-sm text-blueGray-400">projects</div>
						<div className="text-sm text-blueGray-400">completed</div>
					</div>
					<div className="mr-4 p-3 text-center">
						<span className="text-4xl font-bold block uppercase tracking-wide text-blueGray-600">4</span>
						<div className="text-sm text-blueGray-400">projects</div>
						<div className="text-sm text-blueGray-400">created</div>
					</div>
				</div>
			</div>

			<div className="h-40 w-40 tn:min-h-60 tn:min-w-60 relative mx-auto -mt-10 tn:-mt-26 rounded-full">
				<Image src={user.profilePicture} fill alt="User profile picture" className="rounded-full object-cover border-8 border-base-500" />
			</div>
			<div className="text-center mt-2">
				<h1 className="text-3xl font-semibold mb-4">{user.username}</h1>
				<p className="text-lg mb-2">{user.description}</p>
			</div>

			<ul className="p-6">
				<li className="flex text-gray-600 items-center">
					<svg className="h-5 w-5 text-gray-400 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
						<path
							className=""
							d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
						/>
					</svg>
					<p className="text-gray-600 my-1">
						<span className="font-semibold">Location:</span> {user.locationCity}, {user.locationCountry}
					</p>
				</li>
				<li className="flex text-gray-600 items-center">
					<svg aria-hidden="true" className="h-5 w-5 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
						/>
					</svg>
					<p className="text-gray-600 my-1">
						<span className="font-semibold">Company:</span> {user.company}
					</p>
				</li>
				<li className="flex text-gray-600 items-center">
					<svg aria-hidden="true" className="h-5 w-5 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
						/>
					</svg>
					<p className="text-gray-600 my-1">
						<span className="font-semibold">Languages:</span> {user.languages.join(", ")}
					</p>
				</li>
				<li className="flex text-gray-600 items-center">
					<svg aria-hidden="true" className="h-4 w-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
						/>
					</svg>
					<p className="text-gray-600 my-1/">
						<span className="font-semibold">Website:</span> {user.website}
					</p>
				</li>
				<li className="flex text-gray-600 items-center">
					<svg className="h-5 w-5 text-gray-400 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
						<path
							className=""
							d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
						/>
					</svg>
					<p className="text-gray-600 my-1">
						<span className="font-semibold">Talents:</span> {user.talents.join(", ")}
					</p>
				</li>
				<div className="flex text-gray-600 items-center">
					<svg className="h-5 w-5 text-gray-400 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
						<path
							className=""
							d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
						/>
					</svg>

					<p className="text-gray-600 my-1">
						<span className="font-semibold">Bio:</span> {user.bio}
					</p>
				</div>
			</ul>
		</div>
	);
};

export default UserDescriptionPage;
