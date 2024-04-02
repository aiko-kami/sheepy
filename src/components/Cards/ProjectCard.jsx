import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
	return (
		<>
			<div className="rounded-lg max-w-72 shadow-2xl">
				<div className="relative w-full">
					<Image src="https://superawesomevectors.com/wp-content/uploads/2021/04/yellow-submarine-vector.jpg" className="rounded-t-lg" alt="Card" width={600} height={225} />
					<Link href="/login">
						<span className="absolute bottom-2 right-2 text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-teal-500 hover:bg-blue-500 text-white rounded">
							Adventure
						</span>
					</Link>
				</div>
				<div className="p-4 bg-blue-900 rounded-b-lg">
					<h2 className="font-semibold text-xl py-1">Create a submarine</h2>
					<p className="py-1">Hello! I am looking for people who want to explore the ocean.</p>
					<div className="py-2 flex flex-wrap justify-end">
						<div className="inline-flex items-center bg-blue-300 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Ocean</div>
						<div className="inline-flex items-center bg-orange-400 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Mecs</div>
						<div className="inline-flex items-center bg-green-400 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Exploration</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
