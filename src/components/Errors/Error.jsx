import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = ({ title, message, extraMessage }) => {
	return (
		<main className="relative my-auto mx-2 md:mx-10 lg:mx-36">
			<section className="flex-grow">
				<div className="container m-auto py-12">
					<div className="px-6 py-24 mb-4 m-4 md:m-0">
						{/* Icon */}
						<div className="flex justify-center mb-4">
							<FaExclamationTriangle className="text-8xl text-yellow-400" />
						</div>

						{/* Text */}
						<div className="text-center">
							<h1 className="text-3xl font-bold mt-4 mb-2">{title}</h1>
							<p className="text-gray-500 text-xl mb-6">{message}</p>

							{extraMessage && <p className="text-gray-500 text-lg mb-10">{extraMessage}</p>}

							{/* Action Links */}
							<div className="flex flex-col sm:flex-row justify-center gap-6 flex-nowrap">
								<Link href="/" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-2 sm:px-6 rounded whitespace-nowrap">
									Go back to home page
								</Link>
								<Link href="/projects/join-a-project" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-2 sm:px-6 rounded whitespace-nowrap">
									Browse projects
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-grow"></div>
			</section>
		</main>
	);
};

export default Error;
