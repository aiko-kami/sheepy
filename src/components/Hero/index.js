import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Buttons/Buttons";
import StarField from "./StarField";

import spaceship from "@/public/assets/hero/spaceship.png";
import sun from "@/public/assets/hero/sun.png";
import galaxy from "@/public/assets/hero/galaxy.png";
import comet from "@/public/assets/hero/comet.png";
import planetRed from "@/public/assets/hero/planetRed.png";
import planetBlue from "@/public/assets/hero/planetBlue.png";
import saturn from "@/public/assets/hero/saturn.png";
import spaceman from "@/public/assets/hero/spaceman.png";
import satellite from "@/public/assets/hero/satellite.png";

const Hero = () => {
	return (
		<>
			{/* Mobile version */}
			<div className="lg:hidden flex h-160 relative bg-gradient-to-b from-custom-gradiant-dark to-custom-gradiant-light overflow-x-hidden">
				<StarField />
				<Image src={spaceship} width={70} alt="spaceship" className="absolute top-22 left-1/2 -translate-x-1/2" />
				<Image src={planetBlue} width={60} alt="planetBlue" className="absolute top-6 left-6" />
				<Image src={sun} width={90} alt="sun" className="absolute top-10 right-6" />
				<Image src={galaxy} width={40} alt="galaxy" className="absolute top-8 right-34" />
				<Image src={comet} width={45} alt="comet" className="absolute top-32 left-14" />
				<Image src={planetRed} width={60} alt="planetRed" className="absolute bottom-18 right-8" />
				<Image src={saturn} width={50} alt="saturn" className="absolute bottom-10 left-8" />
				<Image src={spaceman} width={60} alt="spaceman" className="absolute bottom-49 left-1/2" />
				<Image src={satellite} width={45} alt="satellite" className="absolute bottom-56 left-8" />
				<div className="absolute left-1/2 top-58 -translate-x-1/2 w-full">
					<h2 className="text-center text-2xl font-oldenburg mb-6">Bring your ideas to life</h2>
					<h2 className="text-center text-2xl font-oldenburg">by finding the best talents</h2>
				</div>
				<Link href="/start-my-project">
					<div className="absolute left-1/2 -translate-x-1/2 bottom-38">
						<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "green", btnRounded: "full" }}>Start my project</Button>
					</div>
				</Link>
			</div>

			{/* Large screen version */}
			<div className="hidden lg:flex h-180 mb-8 relative bg-gradient-to-b from-custom-gradiant-dark to-custom-gradiant-light">
				<StarField />
				<Image src={spaceship} width={75} alt="spaceship" className="absolute top-28 left-1/2 -translate-x-1/2" />
				<Image src={sun} width={120} alt="sun" className="absolute top-30 right-36" />
				<Image src={galaxy} width={70} alt="galaxy" className="absolute top-24 right-96" />
				<Image src={comet} width={75} alt="comet" className="absolute bottom-72 right-52" />
				<Image src={planetRed} width={100} alt="planetRed" className="absolute bottom-24 right-24" />
				<Image src={planetBlue} width={90} alt="planetBlue" className="absolute top-48 left-28" />
				<Image src={saturn} width={75} alt="saturn" className="absolute bottom-12 left-52" />
				<Image src={spaceman} width={75} alt="spaceman" className="absolute bottom-40 left-1/2 translate-x-8" />
				<Image src={satellite} width={50} alt="satellite" className="absolute bottom-60 left-28" />
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<h2 className="text-center text-4xl font-oldenburg mb-10">Bring your ideas to life</h2>
					<h2 className="text-center text-4xl font-oldenburg">by finding the best talents</h2>
				</div>
				<Link href="/start-my-project">
					<div className="absolute left-1/2 -translate-x-1/2 bottom-14 m-4">
						<Button btnProps={{ btnSize: "3xl", type: "button", btnColor: "green", btnRounded: "full" }}>Start my project</Button>
					</div>
				</Link>
			</div>
		</>
	);
};
export default Hero;
