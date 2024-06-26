import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<footer className="bg-base-600 sticky top-[100vh] mt-12">
				<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
					<div className="md:flex md:justify-between">
						<div className="mb-6 md:mb-0">
							<Link href="/" className="flex items-center">
								<span className="self-center text-2xl font-semibold whitespace-nowrap">Sheepy</span>
							</Link>
						</div>
						<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:w-1/2">
							<div>
								<h2 className="mb-6 text-sm font-bold uppercase">Sheepy</h2>
								<ul className="text-gray-400 font-medium">
									<li className="mb-4">
										<Link href="/about-us" className="hover:underline">
											About us
										</Link>
									</li>
									<li className="mb-4">
										<Link href="/our-chart" className="hover:underline">
											Our Chart
										</Link>
									</li>
									<li className="mb-4">
										<Link href="/diversity-and-integration" className="hover:underline">
											Diversity and Integration
										</Link>
									</li>
									<li className="mb-4">
										<Link href="/confidence-and-security" className="hover:underline">
											Confidence and Security
										</Link>
									</li>
									<li>
										<Link href="/statistics" className="hover:underline">
											Statistics
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h2 className="mb-6 text-sm font-bold uppercase">Services</h2>
								<ul className="text-gray-400 font-medium">
									<li className="mb-4">
										<Link href="/help-center" className="hover:underline ">
											Help Center
										</Link>
									</li>
									<li className="mb-4">
										<Link href="/guidelines" className="hover:underline ">
											Guidelines
										</Link>
									</li>
									<li className="mb-4">
										<Link href="/creator-guidebook" className="hover:underline ">
											Creator Guidebook
										</Link>
									</li>
									<li className="mb-4">
										<Link href="/talent-guidebook" className="hover:underline ">
											Talent Guidebook
										</Link>
									</li>
									<li>
										<Link href="/rules" className="hover:underline">
											Rules
										</Link>
									</li>
								</ul>
							</div>
							<div>
								<h2 className="mb-6 text-sm font-bold uppercase">More</h2>
								<ul className="text-gray-400 font-medium">
									<li className="mb-4">
										<Link href="/campus" className="hover:underline">
											Campus
										</Link>
									</li>
									<li>
										<Link href="/blog" className="hover:underline">
											Blog
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
					<div className="sm:flex sm:items-center sm:justify-between">
						<span className="text-sm sm:text-center text-gray-400">
							{/* {" "} to be kept */}© {currentYear}{" "}
							<Link href="#" className="hover:underline">
								HELIOS Industries Ltd. ©
							</Link>
						</span>
						<div className="flex mt-4 sm:justify-center sm:mt-0">
							<Link href="#" className="text-gray-500 hover:text-white">
								<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
									<path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
								</svg>
								<span className="sr-only">Facebook page</span>
							</Link>
							<Link href="#" className="text-gray-500 hover:text-white ms-5">
								<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
									<path
										fillRule="evenodd"
										d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
									/>
								</svg>
								<span className="sr-only">Youtube channel</span>
							</Link>
							<Link href="#" className="text-gray-500 hover:text-white ms-5">
								<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
									<path
										fillRule="evenodd"
										d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="sr-only">Twitter page</span>
							</Link>
							<Link href="#" className="text-gray-500 hover:text-white ms-5">
								<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="sr-only">GitHub account</span>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
