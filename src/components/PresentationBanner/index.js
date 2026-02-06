import Image from "next/image";

import explore from "@/public/assets/svg/features/explore.svg";
import award from "@/public/assets/svg/features/award.svg";
import conversation from "@/public/assets/svg/features/conversation.svg";
import heart from "@/public/assets/svg/features/heart.svg";

const FEATURES = [
	{
		icon: explore,
		alt: "Materialize your ideas",
		title: "Materialize your ideas",
		description: "Let us help you build up your next idea.",
	},
	{
		icon: award,
		alt: "Put your skills into practice",
		title: "Put your skills into practice",
		description: "Help people looking for your talent and improve your skills by joining a project.",
	},
	{
		icon: conversation,
		alt: "Work as a team",
		title: "Work as a team",
		description: "You cannot achieve it alone? Find help from our community.",
	},
	{
		icon: heart,
		alt: "Have fun",
		title: "Have fun",
		description: "The most important thing is to do what you like!",
	},
];

const PresentationBanner = () => {
	return (
		<div className="text-center">
			<h2 className="text-3xl md:text-4xl font-semibold text-primary mb-8 text-balance">
				What makes Make It the best for your ideas?
			</h2>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
				{FEATURES.map((feature) => (
					<div key={feature.title} className="flex flex-col items-center p-4 rounded-lg transition-colors">
						<Image src={feature.icon} alt={feature.alt} className="mb-3" />
						<h3 className="text-lg font-medium text-primary mb-2 text-center">{feature.title}</h3>
						<p className="text-center text-secondary text-sm max-w-56 leading-relaxed">{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default PresentationBanner;
