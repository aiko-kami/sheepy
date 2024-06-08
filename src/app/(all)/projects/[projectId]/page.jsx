import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline, IoHeartOutline, IoFitness } from "react-icons/io5";
import { LuActivity } from "react-icons/lu";

import Badge from "@/components/Badges/Badge";
import BadgeRounded from "@/components/Badges/BadgeRounded";

import moz01 from "../../../../../public/assets/mosaic/moz01.png";

const ProjectDescriptionPage = ({ params }) => {
	const project = {
		title: "My Indie Film Project",
		goal: "Produce an independent film esse cum autem quasi et placeat natus sit earum, id odit aperiam nemo vel. Saepe facere fugit dignissimos nostrum tempore vero.",
		summary:
			"Create a compelling indie film with a unique storyline. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus exercitationem! Dicta corrupti, architecto provident commodi quas ad quo segh aeio ghalir gauhrlg iahr gal eraiu ghalierg.",
		description:
			"This project aims to produce an independent film that explores a thought-provoking storyline and showcases talented actors and crew members. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit ea itaque quo iste aut quibusdam labore cumque ab sequi animi, odit aliquam cum recusandae eveniet culpa aperiam adipisci quasi? Ad ab perferendis veritatis iste libero molestiae exercitationem repudiandae esse cum autem quasi et placeat natus sit earum, id odit aperiam nemo vel. Saepe facere fugit dignissimos nostrum tempore vero, sequi voluptate minima suscipit eum obcaecati quibusdam beatae aut provident repellat blanditiis voluptatum recusandae dolores id laborum adipisci ullam! Magnam nostrum placeat ut illo. Fugiat, unde assumenda veniam dolorem cum esse sapiente nulla atque expedita a consequatur, quasi possimus sed corrupti rerum earum! Atque asperiores fuga repellendus laboriosam porro! Numquam inventore reiciendis minus tempore ipsum dolore veritatis quod velit ducimus eius magnam, maiores similique consequuntur est veniam omnis quidem harum nihil incidunt architecto! Vitae nesciunt nam, laboriosam quibusdam sequi facilis ducimus tempora hic voluptate enim quas esse tempore magni consequuntur culpa atque at. Animi nulla dicta ex cum repellendus facilis? Perspiciatis aliquam optio facere omnis rerum corrupti at laborum ratione! Velit nam impedit consectetur ad quam eos repellendus debitis! Non perferendis excepturi id error mollitia debitis nisi? Asperiores maiores nihil architecto totam, magnam soluta amet reprehenderit fugiat voluptate placeat velit! Lorem ipsum dolor sit amet consectetur adipisicing elitro minus hic ut repellat, repellendus recusandae asperiores voluptas distinctio exercitationem eum consectetur tempora? Vel placeat reprehenderit ullam dignissimos! Est aspernatur vero asperiores, iusto dolores sequi unde cumque iure? Quasi reprehenderit vel ratione ut eaque, pariatur doloribus ipsam. Cupiditate, error voluptatum laboriosam quo voluptate fugit assumenda tenetur eum, aliquid vel consequuntur minima accusantium dolore nobis doloremque eos repellendus ea vitae officiis quis. Officiis, molestias obcaecati beatae distinctio sint non.",
		cover: "https://images.pexels.com/photos/7319068/pexels-photo-7319068.jpeg",
		coverDescription: "https://crypticrock.com/wp-content/uploads/2023/02/brad-anderson-on-set-blood.jpg",
		likes: 147,
		category: {
			name: "Art",
			link: "/categories/art",
			bgColor: "bg-black",
			bgColorHover: "bg-gray-800",
			size: "xs",
		},
		subCategory: "Cinema",
		tags: [
			{
				name: "Indie film",
				link: "/tags/indie_film",
				bgColor: "border-2 border-gray-500 text-white",
				size: "xs",
			},
			{
				name: "Fiction",
				link: "/tags/fiction",
				bgColor: "border-2 border-gray-500 text-white",
				size: "xs",
			},
			{
				name: "Cinematography",
				link: "/tags/cinematography",
				bgColor: "border-2 border-gray-500 text-white",
				size: "xs",
			},
			{
				name: "Sci-Fi",
				link: "/tags/sci-fi",
				bgColor: "border-2 border-gray-500 text-white",
				size: "xs",
			},
			{
				name: "Editing",
				link: "/tags/editing",
				bgColor: "border-2 border-gray-500 text-white",
				size: "xs",
			},
			{
				name: "Time travel",
				link: "/tags/time_travel",
				bgColor: "border-2 border-gray-500 text-white",
				size: "xs",
			},
			{
				name: "Acting",
				link: "/tags/acting",
				bgColor: "border-2 border-gray-500 text-white",
				size: "xs",
			},
			{
				name: "Cyberpunk",
				link: "/tags/cyberpunk",
				bgColor: "border-2 border-gray-500 text-white",
				size: "xs",
			},
			{
				name: "Directing",
				link: "/tags/directing",
				bgColor: "border-2 border-gray-500 text-white",
				size: "xs",
			},
			{
				name: "Visual effects ",
				link: "/tags/visual_effects",
				bgColor: "border-2 border-gray-500 text-white",
				size: "xs",
			},
			{
				name: "screenwriting",
				link: "/tags/screenwriting",
				bgColor: "border-2 border-gray-500 text-white",
				size: "xs",
			},
		],
		location: "San Fransokyo, USA",
		talentsNeeded: [
			{
				role: "Director",
			},
			{
				role: "Screenwriter",
			},
			{
				role: "Cinematographer",
			},
		],
		talentProfilePicture: "https://p7.hiclipart.com/preview/355/848/997/computer-icons-user-profile-google-account-photos-icon-account.jpg",
		qnas: [{ question: "Q1: Lorem ipsum?", answer: "A1: Lorem ipsum dolor sit amet." }],
		status: "Project active",
		creator: "Brad Anderson",
		creatorProfilePicture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6uBna-8pXaBpL3QVYaFdHUoXdqasFujc_Fj44cIKgiFh9F9bU",
		userId: "12345",
		members: [
			{
				userId: "12345",
				username: "Brad Anderson",
				profilePicture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6uBna-8pXaBpL3QVYaFdHUoXdqasFujc_Fj44cIKgiFh9F9bU",
				role: "Director",
			},
			{
				userId: "1745",
				username: "	Scott Kosar",
				profilePicture: "https://static.wikia.nocookie.net/headhuntershorrorhouse/images/2/20/Scott_Kosar.jpg/revision/latest?cb=20101120165807",
				role: "Screenwriter",
			},
			{
				userId: "56468",
				username: "Carlos Fernández",
				profilePicture: "https://media.licdn.com/dms/image/C4D22AQFMBGih4742dw/feedshare-shrink_800/0/1557307992723?e=2147483647&v=beta&t=7cQShBw07SJxBvKtDRzF2Tu659wVKJPgrixxtCK9Mo0",
				role: "Producer",
			},
		],
		comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	};
	return (
		<div className="container mx-auto py-8">
			{/* Title */}
			<h1 className="text-5xl sm:text-7xl font-semibold mb-4 text-center">{project.title}</h1>
			{/* Summary */}
			<p className="mb-2 text-lg mx-1/7 text-justify">{project.summary}</p>
			{/* Creator */}
			<div className="text-gray-300 text-lg mb-12 flex items-center justify-center">
				<span className="">by</span>
				<Link href={`/users/${project.userId}`} className="ml-1 mr-2 font-semibold">
					{project.creator}
				</Link>
				<Link href={`/users/${project.userId}`}>
					<Image src={project.creatorProfilePicture} className="object-cover rounded-full w-10 h-10" alt="creator profile picture" height={0} width={0} sizes="100vw" />
				</Link>
			</div>
			{/* Project cover */}
			<Image src={project.cover} className="w-full h-100 object-cover rounded-3xl mb-3" alt="Card" width={0} height={0} sizes="100vw" />
			{/* Category, location, likes, project status */}
			<ul className="sm:flex mb-12 pl-26">
				<li className="flex">
					<Badge badge={project.category} />
				</li>
				<li className="flex sm:ml-4">
					<IoLocationOutline className="text-gray-400 mr-1 text-2xl" />
					<p>{project.location}</p>
				</li>
				<li className="flex sm:ml-4">
					<IoHeartOutline className="text-pink-600 mr-1 text-2xl" />
					<p>{project.likes} likes</p>
				</li>
				<li className="flex sm:ml-4">
					<IoFitness className="text-green-600 mr-1 text-2xl" />
					<p className="text-green-600 font-semibold">{project.status}</p>
				</li>
			</ul>
			<div className="grid grid-cols-3">
				<div className="col-span-2 px-26">
					{/* About the project */}
					<h2 className="font-semibold text-3xl mb-4">The project in details</h2>
					<p className="mb-2 text-justify">{project.description}</p>
					<Image src={project.coverDescription} className="w-full h-80 object-cover my-4" alt="Card" width={600} height={225} />
					<p className="mb-2 text-justify">{project.description}</p>
					{/* Q&A */}
					<p className="mb-2">
						<span className="font-semibold">Q&As:</span> {project.qnas.map((qna) => `${qna.question} ${qna.answer}`).join(", ")}
					</p>
					{/* Comments */}
					<p className="mb-2">
						<span className="font-semibold">Comments:</span> {project.comments}
					</p>
				</div>
				<div>
					{/* Button join project */}
					{/* Goal */}
					<h2 className="font-semibold text-3xl mb-3">Goal</h2>
					<hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<p className="mb-8 text-justify">{project.goal}</p>
					{/* Sub-category */}
					<h2 className="font-semibold text-3xl mb-3">Sub-category</h2>
					<hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<p className="mb-8 text-justify">{project.subCategory}</p>
					{/* Tags */}
					<h2 className="font-semibold text-3xl mb-3">Tags</h2>
					<hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<div className="flex flex-wrap justify-center mb-8">
						{project.tags.map((tag, index) => (
							<div key={index} className="mx-1 my-2">
								<BadgeRounded badge={tag} />
							</div>
						))}
					</div>
					{/* Members */}
					<h2 className="font-semibold text-3xl mb-3">Members</h2>
					<hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<div className="mt-5 mb-8">
						{project.members.map((member, index) => (
							<div key={index} className="text-gray-300 text-lg mb-4 flex items-center">
								<Link href={`/users/${member.userId}`}>
									<Image src={member.profilePicture} className="object-cover rounded-full w-16 h-16 mr-3" alt="member profile picture" height={0} width={0} sizes="100vw" />
								</Link>
								<Link href={`/users/${member.userId}`} className="font-semibold">
									{member.username}
								</Link>
								<span className="mr-1">, </span>
								<p>{member.role}</p>
							</div>
						))}
					</div>
					{/* Talents needed */}
					<h2 className="font-semibold text-3xl mb-3">Talents needed</h2>
					<hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<div className="mt-5 mb-8">
						{project.talentsNeeded.map((talent, index) => (
							<div key={index} className="text-gray-300 text-lg mb-4 flex items-center">
								<Image src={project.talentProfilePicture} className="object-cover rounded-full w-10 h-10 mr-3" alt="talent profile picture" height={0} width={0} sizes="100vw" />
								<p>{talent.role}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDescriptionPage;
