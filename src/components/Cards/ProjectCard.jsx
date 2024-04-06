import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
	return (
		<>
			<div className="rounded-lg max-w-72 shadow-2xl">
				<div className="relative w-full">
					<Link href="/projects/01">
						<Image src="https://superawesomevectors.com/wp-content/uploads/2021/04/yellow-submarine-vector.jpg" className="rounded-t-lg" alt="Card" width={600} height={225} />
					</Link>
					<Link href="/categories/nature">
						<span className="absolute bottom-2 right-2 text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 hover:bg-green-500 duration-200 text-white rounded">
							Nature
						</span>
					</Link>
				</div>
				<div className="p-4 bg-blue-900 rounded-b-lg">
					<Link href="/projects/01">
						<h2 className="font-semibold text-xl py-1">Create a submarine</h2>
						<p className="py-1">Hello! I am looking for people who want to explore the ocean.</p>
					</Link>
					<div className="py-2 flex flex-wrap justify-end">
						<Link href="/tags/ocean">
							<div className="inline-flex items-center bg-blue-300 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Ocean</div>
						</Link>
						<Link href="/tags/mecanics">
							<div className="inline-flex items-center bg-orange-400 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Mecs</div>
						</Link>
						<Link href="/tags/exploration">
							<div className="inline-flex items-center bg-green-400 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Exploration</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
