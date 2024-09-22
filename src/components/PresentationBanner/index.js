import Image from "next/image";

import explore from "@/public/assets/svg/features/explore.svg";
import award from "@/public/assets/svg/features/award.svg";
import conversation from "@/public/assets/svg/features/conversation.svg";
import heart from "@/public/assets/svg/features/heart.svg";

const PresentationBanner = () => {
	return (
		<>
			<h2 className="text-center text-4xl">What makes Sheepy the best for your ideas?</h2>
			<div className="grid grid-cols-2 lg:grid-cols-4 mx-auto">
				<div className="mt-6 mx-2 flex flex-col items-center">
					<Image src={explore} alt="explore-badge" />
					<h3 className="text-lg text-center">Materialize your ideas</h3>
					<p className="text-center text-indigo-500 max-w-44">Let us help you build up your next idea.</p>
				</div>

				<div className="mt-6 mx-2 flex flex-col items-center">
					<Image src={award} alt="award-badge" />
					<h3 className="text-lg text-center ">Put your skills into practice</h3>
					<p className="text-center text-indigo-500 max-w-52">Help people looking for your talent and improve your skills by joining a project.</p>
				</div>

				<div className="mt-6 mx-2 flex flex-col items-center">
					<Image src={conversation} alt="conversation-badge" />
					<h3 className="text-lg text-center">Work as a team</h3>
					<p className="text-center text-indigo-500 max-w-56">
						You cannot achieve it alone?
						<br />
						Find help from our community.
					</p>
				</div>

				<div className="mt-6 mx-2 flex flex-col items-center">
					<Image src={heart} alt="heart-badge" />
					<h3 className="text-lg text-center">Have fun</h3>
					<p className="text-center text-indigo-500 max-w-48">The most important thing is to do what you like!</p>
				</div>
			</div>
		</>
	);
};
export default PresentationBanner;
