const UserTalentCardModal = () => {
	return (
		<>
			<div className="pb-8">
				<h4 className="text-xl font-semibold text-white mx-auto pb-4">My experience</h4>
				<div className="space-y-4">
					<div>
						<p className="leading-relaxed text-gray-300 font-semibold italic">Freelance UX Consultant | 2 years | 2022-2024</p>
						<p className="leading-relaxed text-gray-300">
							Collaborated with senior UX designers to create wireframes, mockups, and prototypes for a new mobile app aimed at enhancing user engagement. Conducted user research, including surveys
							and usability testing, to gather feedback and iterate on design solutions. Contributed to the development of user personas and user journey maps to inform design decisions. Assisted in
							the creation of design documentation and presentations for stakeholders. Learned and applied UX best practices in a fast-paced, collaborative environment.
						</p>
					</div>
					<div>
						<p className="leading-relaxed text-gray-300 font-semibold italic">UX Design Intern | 6 months | 2020</p>
						<p className="leading-relaxed text-gray-300">
							Provided UX consulting services to small businesses and startups, offering expertise in user research, usability testing, and interface design. Led workshops and training sessions to
							educate clients on UX principles and methodologies. Developed user personas, user flows, and wireframes to guide product development processes. Conducted heuristic evaluations and
							accessibility audits to identify areas for improvement. Collaborated with development teams to implement design solutions and ensure a seamless user experience across web and mobile
							platforms. Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi, ut quia illum molestias esse! Eaque odio sunt corporis molestiae consequuntur sequi sint non quam eius.
							Reprehenderit sit voluptates ea assumenda deserunt deleniti amet eum, alias expedita vel, consequuntur a accusantium exercitationem? Magni optio facilis incidunt tenetur saepe,
							architecto nemo?
						</p>
					</div>
				</div>
			</div>
			<div className="pb-8">
				<h4 className="text-xl font-semibold text-white mx-auto pb-4">My portfolio</h4>
				<p className="leading-relaxed text-gray-300">
					{/* {" "} to be kept */}
					Visit my{" "}
					<span className="underline">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.flickr.com/photos/holgers-bilderwelt/39554529485/in/photolist-23giiyi-2oEyVN7-2jPz9jv-23Fe9FR-2kR5P7X-JGbXvM-2kdzFhq-qAUWsZ-aLLzNr-ftzDA-dXxdU1-ke8GKC-bCbuY1-2nnHTeE-QuZ7Nm-PG847j-zFA4r1-2adFDoL-7pmaYC-SWPHW-wTtLG-KnKah-J2SooZ-7GG7uy-gGzKM-fgnpX-8N1Ysx-qjgzoE-9BuRha-AUnXX6-2giLcFn-KjjBpP-r1cx6k-5RbFnH-H3St2Q-oFgB6-5XcveB-wTtLE-22fWjru-2kyCCiJ-8u5iYp-CQcEv9-Dpbztu-2jaFEZp-Lh45mV-3xLJR-yztfX-hMAkK1-5Bz4op-duVf6W"
						>
							website
						</a>
						{/* {" "} to be kept */}
					</span>{" "}
					for more details about me
				</p>
			</div>
			<div className="pb-8">
				<h4 className="text-xl font-semibold text-white mx-auto pb-4">My certifications</h4>
				<ul className="space-y-1 text-gray-300">
					<li className="flex items-center space-x-3 rtl:space-x-reverse pl-4">
						<svg className="flex-shrink-0 w-3.5 h-3.5 text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
						</svg>
						<span>Certified Usability Analyst (CUA)</span>
					</li>
					<li className="flex items-center space-x-3 rtl:space-x-reverse pl-4">
						<svg className="flex-shrink-0 w-3.5 h-3.5 text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
						</svg>
						<span>Certified User Experience Professional (CUXP)</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default UserTalentCardModal;
