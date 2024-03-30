import Link from "next/link";

const SubmenuHowItWorks = () => {
	return (
		<>
			<div className="grid grid-cols-2 w-96 p-2 rounded-lg bg-base-550 bg-opacity-99">
				<div className="col-span-full rounded hover:bg-blue-900 transition duration-300">
					<Link href="/login" className="pb-0 items-center block pt-3 px-4">
						<div className="flex flex-col pb-3 items-center border-solid border-b-2 border-gray-800 dark:border-neutral-400 box-content">
							<h2 className="font-semibold mb-1">Take a tour</h2>
							<p className="text-gray-500 mb-0 whitespace-normal">Learn about what we can do for your projects</p>
						</div>
					</Link>
				</div>
				<div className="flex flex-col items-start whitespace-normal rounded hover:bg-blue-900 transition duration-300">
					<Link href="/sign-up" className="h-[7.75rem] py-3 px-4">
						<div>
							<h2 className="font-semibold mb-1">Initiate a project</h2>
							<p className="text-gray-500 mb-0 whitespace-normal">You have a great project idea ?</p>
						</div>
					</Link>
				</div>
				<div className="flex flex-col items-start whitespace-normal rounded hover:bg-blue-900 transition duration-300">
					<Link href="/login" className="h-[7.75rem] py-3 px-4">
						<div>
							<h2 className="font-semibold mb-1">Join a project</h2>
							<p className="text-gray-500 mb-0 whitespace-normal">You are a talent and want to help on a project ?</p>
						</div>
					</Link>
				</div>
				<div className="flex flex-col items-start whitespace-normal rounded hover:bg-blue-900 transition duration-300">
					<Link href="/sign-up" className="h-[7.75rem] py-3 px-4">
						<div>
							<h2 className="font-semibold mb-1">Why us ?</h2>
							<p className="text-gray-500 mb-0 whitespace-normal">We are here to help you realize your most awesome projects</p>
						</div>
					</Link>
				</div>
				<div className="flex flex-col items-start whitespace-normal rounded hover:bg-blue-900 transition duration-300">
					<Link href="/login" className="h-[7.75rem] py-3 px-4">
						<div>
							<h2 className="font-semibold mb-1">Pricing and fees</h2>
							<p className="text-gray-500 mb-0 whitespace-normal">Learn about our pricing models</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};
export default SubmenuHowItWorks;
