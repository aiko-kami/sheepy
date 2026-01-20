const UserTalentCardModal = ({ talent }) => {
	return (
		<>
			<div className="pb-8">
				<h4 className="text-xl font-semibold text-white mx-auto pb-4">My experience</h4>
				<div className="space-y-4">
					<p className="leading-relaxed text-gray-300 font-semibold italic">{talent.experience}</p>
					<p className="leading-relaxed text-gray-300">{talent.description}</p>
				</div>
			</div>
			<div className="pb-8">
				<h4 className="text-xl font-semibold text-white mx-auto pb-4">My skills</h4>
				<p className="leading-relaxed text-gray-300">{talent.skills}</p>
			</div>
			<div className="pb-8">
				<h4 className="text-xl font-semibold text-white mx-auto pb-4">My portfolio</h4>
				<p className="leading-relaxed text-gray-300">{talent.portfolio}</p>
			</div>
			<div className="pb-8">
				<h4 className="text-xl font-semibold text-white mx-auto pb-4">My certifications</h4>
				<p className="leading-relaxed text-gray-300">{talent.certifications}</p>
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
				</ul>
			</div>
		</>
	);
};

export default UserTalentCardModal;
