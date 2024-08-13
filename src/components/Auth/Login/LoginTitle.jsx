import Image from "next/image";

import sheepLogo from "@/public/sheepyLogo.png";

const LoginTitle = () => {
	return (
		<>
			<div className="md:w-2/5 md:mb-0 text-center">
				<h1 className="text-center text-5xl mb-4">Welcome back!</h1>
				<Image src={sheepLogo} alt="Sheepy Logo" width={75} height={75} className="mx-auto" />
			</div>
		</>
	);
};

export default LoginTitle;
