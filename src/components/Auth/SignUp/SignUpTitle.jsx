import Image from "next/image";

import MakeItLogo from "@/public/MakeItLogo.png";

const SignUpTitle = () => {
	return (
		<>
			<div className="md:w-2/5 md:mb-0 text-center">
				<h1 className="text-center text-5xl mb-4">
					Join the&nbsp;
					<br className="lg:hidden" />
					community!
				</h1>

				<Image src={MakeItLogo} alt="Make It Logo" width={200} height={200} className="mx-auto" />
			</div>
		</>
	);
};

export default SignUpTitle;
