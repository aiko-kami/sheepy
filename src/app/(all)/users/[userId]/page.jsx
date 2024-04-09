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
		<div className="container py-8 mx-auto min-w-full">
			<div className="h-40 tn:h-70 relative">
				<Image
					src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/cerisier-japon-fuji-min.jpeg"
					fill
					alt="Background profile picture"
					className="object-cover"
				/>
			</div>
			<div className="h-40 w-40 tn:min-h-70 tn:min-w-70 relative mx-auto -mt-10 tn:-mt-26 rounded-full">
				<Image src={user.profilePicture} fill alt="User profile picture" className="rounded-full object-cover border-8 border-base-500" />
			</div>
			<div className="text-center mt-2">
				<h1 className="text-3xl font-semibold mb-4">{user.username}</h1>
				<p className="text-lg mb-2">{user.description}</p>
			</div>

			<div className="p-6">
				<div class="inline-flex text-gray-600 items-center">
					<svg class="h-5 w-5 text-gray-400 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
						<path
							class=""
							d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
						/>
					</svg>
					{user.locationCity}, {user.locationCountry}
				</div>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">company:</span> {user.company}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">bio:</span> {user.bio}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">languages:</span> {user.languages.join(", ")}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">website:</span> {user.website}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">talents:</span> {user.talents.join(", ")}
				</p>
			</div>
		</div>
	);
};

export default UserDescriptionPage;
