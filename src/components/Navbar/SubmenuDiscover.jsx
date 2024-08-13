import Link from "next/link";

const SubmenuDiscover = () => {
	return (
		<>
			<div className="grid grid-cols-3 w-150 p-2 rounded-lg bg-base-550 bg-opacity-99">
				<div className="flex flex-col items-start whitespace-normal rounded hover:bg-blue-900 transition duration-300">
					<Link href="/projects/join-a-project" className="py-3 px-4">
						<div>
							<h2 className="font-semibold mb-1">The projects</h2>
							<p className="text-gray-500 mb-0 whitespace-normal">Explore a variety of projects waiting for your contribution</p>
						</div>
					</Link>
				</div>
				<div className="flex flex-col items-start whitespace-normal rounded hover:bg-blue-900 transition duration-300">
					<Link href="/talents/meet-talents" className="py-3 px-4">
						<div>
							<h2 className="font-semibold mb-1">The talents</h2>
							<p className="text-gray-500 mb-0 whitespace-normal">Meet talented people ready to bring your ideas to life</p>
						</div>
					</Link>
				</div>
				<div className="flex flex-col items-start whitespace-normal rounded hover:bg-blue-900 transition duration-300">
					<Link href="/categories/all-categories" className="py-3 px-4">
						<div>
							<h2 className="font-semibold mb-1">The categories</h2>
							<p className="text-gray-500 mb-0 whitespace-normal">Uncover categories that align with your interests and skills</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};
export default SubmenuDiscover;
