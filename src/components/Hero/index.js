import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Buttons/Buttons";

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
			<div className="lg:hidden flex h-160 relative bg-gradient-to-b from-custom-blue-dark to-custom-blue-light overflow-x-hidden">
				<div className="bg-white w-1 h-1 rounded-full absolute top-28 left-30"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-28 left-32"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-72 left-80"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-38 left-1/3 -translate-x-48"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-60 left-1/3 -translate-x-22"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-84 left-1/3 -translate-x-20"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-66 left-1/3 -translate-x-14"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-48 left-1/3 -translate-x-28"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-22 left-1/3 translate-x-22"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-12 left-1/3 -translate-x-2"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-28 left-1/3"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-16 left-1/2 translate-x-20"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-38 left-3/5"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-46 left-1/2 translate-x-66"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-56 right-82"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-90 right-32"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-22 right-1/4 translate-x-38"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-14 right-1/4 translate-x-6"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-44 right-1/4 translate-x-2"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-54 right-1/4 -translate-x-20"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-86 right-1/4 -translate-x-26"></div>
				<Image src={spaceship} width={70} alt="spaceship" className="absolute top-22 left-1/2 -translate-x-1/2" />
				<Image src={planetBlue} width={60} alt="planetBlue" className="absolute top-6 left-6" />
				<Image src={sun} width={90} alt="sun" className="absolute top-10 right-6 " />
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
				<Link href="/projects/start-my-project">
					<div className="absolute left-1/2 -translate-x-1/2 bottom-38">
						<Button btnProps={{ btnSize: "xl", type: "button", btnColor: "green", btnRounded: "full" }}>Start my project</Button>
					</div>
				</Link>
			</div>

			{/* Large screen version */}
			<div className="hidden lg:flex h-180 mb-8 relative bg-gradient-to-b from-custom-blue-dark to-custom-blue-light">
				<div className="bg-white w-1 h-1 rounded-full absolute top-28 left-30"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-28 left-32"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-72 left-80"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-38 left-1/3 -translate-x-48"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-60 left-1/3 -translate-x-22"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-84 left-1/3 -translate-x-20"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-66 left-1/3 -translate-x-14"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-48 left-1/3 -translate-x-28"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-22 left-1/3 translate-x-22"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-12 left-1/3 -translate-x-2"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-28 left-1/3"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-16 left-1/2 translate-x-20"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-38 left-3/5"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-46 left-1/2 translate-x-66"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-56 right-82"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute top-90 right-32"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-22 right-1/4 translate-x-38"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-14 right-1/4 translate-x-6"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-44 right-1/4 translate-x-2"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-54 right-1/4 -translate-x-20"></div>
				<div className="bg-white w-1 h-1 rounded-full absolute bottom-86 right-1/4 -translate-x-26"></div>
				<Image src={spaceship} width={75} alt="spaceship" className="absolute top-28 left-1/2 -translate-x-1/2" />
				<Image src={sun} width={120} alt="sun" className="absolute top-30 right-36 " />
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
				<Link href="/projects/start-my-project">
					<div className="absolute left-1/2 -translate-x-1/2 bottom-14 m-4">
						<Button btnProps={{ btnSize: "3xl", type: "button", btnColor: "green", btnRounded: "full" }}>Start my project</Button>
					</div>
				</Link>
			</div>
		</>
	);
};
export default Hero;
