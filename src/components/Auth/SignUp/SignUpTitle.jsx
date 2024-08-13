import Image from "next/image";

import sheepLogo from "@/public/sheepyLogo.png";

const SignUpTitle = () => {
	return (
		<>
			<div className="md:w-2/5 md:mb-0 text-center">
				<h1 className="text-center text-5xl mb-4">
					Join the&nbsp;
					<br className="lg:hidden" />
					community!
				</h1>

				<Image src={sheepLogo} width={75} height={75} alt="Sheepy Logo" className="mx-auto" />
			</div>
		</>
	);
};

export default SignUpTitle;
