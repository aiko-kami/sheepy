import Image from "next/image";
import Link from "next/link";

const UserTalentCard = () => {
	return (
		<>
			<div className="rounded-lg min-w-full shadow-2xl bg-blue-900">
				<div className="p-4 text-center">
					<h2 className="font-semibold text-xl py-1">UX/UI Designer</h2>
					<p className="py-1">Builder of intuitive digital experiences</p>
					<div className="py-2 flex flex-wrap justify-center">
						<Link href="/tags/ocean">
							<div className="inline-flex items-center bg-blue-300 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">User research</div>
						</Link>
						<Link href="/tags/mecanics">
							<div className="inline-flex items-center bg-orange-400 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Wireframing</div>
						</Link>
						<Link href="/tags/exploration">
							<div className="inline-flex items-center bg-green-400 text-blue-800 text-xs font-medium mx-1 my-2 px-2.5 py-0.5 rounded-full">Prototyping</div>
						</Link>
					</div>
					<button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className="italic hover:underline">
						Read more...
					</button>
				</div>
			</div>
			<div
				id="default-modal"
				tabindex="-1"
				aria-hidden="true"
				className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
			>
				<div className="relative p-4 w-full md:max-w-2/3 max-h-full">
					<div className="relative rounded-lg shadow bg-gray-700">
						<div className="flex items-center p-3 md:p-4 rounded-t">
							<h3 className="text-2xl font-semibold text-white mx-auto">UX/UI Designer</h3>
							<button
								type="button"
								className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute right-3 top-3 inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
								data-modal-hide="default-modal"
							>
								<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
						</div>
						<div className="p-4 md:p-5 space-y-4">
							<h4 className="text-xl font-semibold text-white mx-auto">My experience</h4>
							<p className="text-base leading-relaxed text-gray-400">
								With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to
								comply.
							</p>
							<p className="text-base leading-relaxed text-gray-400">
								The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires
								organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserTalentCard;
