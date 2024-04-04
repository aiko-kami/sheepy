import Link from "next/link";

const SubmenuStart = () => {
	return (
		<>
			<div className="flex flex-row p-2 rounded-lg bg-base-550 bg-opacity-99">
				<div className="w-56 flex flex-col items-start whitespace-normal rounded hover:bg-blue-900 transition duration-300">
					<Link href="/start/start-my-project" className="p-3">
						<div>
							<h2 className="font-semibold mb-1">Start my project</h2>
							<p className="text-gray-500 mb-0 whitespace-normal">Create your dream project in a minute and find the talents you need</p>
						</div>
					</Link>
				</div>
				<div className="w-48 flex flex-col items-start whitespace-normal rounded hover:bg-blue-900 transition duration-300">
					<Link href="/start/join-a-project" className="p-3">
						<div>
							<h2 className="font-semibold mb-1">Join a project</h2>
							<p className="text-gray-500 mb-0 whitespace-normal">Find the project that inspires you and start contributing</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};
export default SubmenuStart;
