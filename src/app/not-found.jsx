import "./globals.css";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
	return (
		<>
			<Navbar isHomePage={false} />
			<main className="relative my-auto mx-2 md:mx-10 xl:mx-36">
				<section className="flex-grow">
					<div className="container m-auto py-12">
						<div className="px-6 py-24 mb-4 m-4 md:m-0">
							<div className="flex justify-center">
								<FaExclamationTriangle className="fas fa-exclamation-triangle fa-5x text-8xl text-yellow-400"></FaExclamationTriangle>
							</div>
							<div className="text-center">
								<h1 className="text-3xl font-bold mt-4 mb-2">404 Page Not Found</h1>
								<p className="text-gray-500 text-xl mb-10">Sorry, we couldn&apos;t find the page you are looking for... 😥</p>
								<Link href="/" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-6 rounded">
									Go back to home page
								</Link>
							</div>
						</div>
					</div>
					<div className="flex-grow"></div>
				</section>
			</main>
			<Footer />
		</>
	);
};
export default NotFoundPage;
