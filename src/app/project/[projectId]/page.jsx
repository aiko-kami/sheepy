import Image from "next/image";
import Link from "next/link";
import moz01 from "../../../../public/assets/mosaic/moz01.png";

const ProjectDescriptionPage = ({ params }) => {
	const project = {
		title: "My Indie Film Project",
		goal: "Produce an independent film",
		summary: "Create a compelling indie film with a unique storyline.",
		description: "This project aims to produce an independent film that explores a thought-provoking storyline and showcases talented actors and crew members.",
		cover: "/project-cover.jpg",
		likes: 147,
		category: "Art",
		subCategory: "Cinema",
		location: "San Fransokyo, USA",
		tags: ["indie_film", "cinematography", "screenwriting"],
		talentNeeded: ["Director", "Screenwriter", "Cinematographer"],
		qnas: [{ question: "Q1: Lorem ipsum?", answer: "A1: Lorem ipsum dolor sit amet." }],
		status: "Active",
		members: ["John Doe", "Jane Doe"],
		comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	};
	return (
		<div className="container mx-auto py-8">
			<Image src={moz01} className="w-full h-64 object-cover" alt="Card" width={600} height={225} />
			<div className="p-6">
				<h1 className="text-3xl font-semibold mb-4">{project.title}</h1>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Goal:</span> {project.goal}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Summary:</span> {project.summary}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Description:</span> {project.description}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Likes:</span> {project.likes}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Category:</span> {project.category}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Sub-category:</span> {project.subCategory}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Location:</span> {project.location}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Tags:</span> {project.tags.join(", ")}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Steps:</span> {project.talentNeeded.join(", ")}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Q&As:</span> {project.qnas.map((qna) => `${qna.question} ${qna.answer}`).join(", ")}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Status:</span> {project.status}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Members:</span> {project.members.join(", ")}
				</p>
				<p className="text-gray-600 mb-2">
					<span className="font-semibold">Comments:</span> {project.comments}
				</p>
			</div>
		</div>
	);
};

export default ProjectDescriptionPage;
