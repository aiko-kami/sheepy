import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const ProjectNotFound = () => {
	return (
		<>
			<main className="relative my-auto mx-2 md:mx-10 lg:mx-36">
				<section className="flex-grow">
					<div className="container m-auto py-12">
						<div className="px-6 py-24 mb-4 m-4 md:m-0">
							<div className="flex justify-center">
								<FaExclamationTriangle className="fas fa-exclamation-triangle fa-5x text-8xl text-yellow-400"></FaExclamationTriangle>
							</div>
							<div className="text-center">
								<h1 className="text-3xl font-bold mt-4 mb-2">404 - Project Not Found</h1>
								<p className="text-gray-500 text-xl mb-10">Sorry, we couldn&apos;t find the project you are looking for... 😥</p>

								<div className="flex justify-center gap-6">
									<Link href="/" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-6 rounded">
										Go back to home page
									</Link>
									<Link href="/projects/join-a-project" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-6 rounded">
										Browse projects
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-grow"></div>
				</section>
			</main>
		</>
	);
};
export default ProjectNotFound;
