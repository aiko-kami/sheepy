"use client";

import { useRouter } from "next/navigation";
import { IoEyeOutline } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";

const SeeMyPublicProfileButton = ({ userId }) => {
	const router = useRouter();

	return (
		<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "gradientPurplePink", action: () => router.push(`/users/${userId}`) }}>
			<div className="flex justify-center items-center">
				<IoEyeOutline className="mr-2 text-xl" />
				See my public profile
			</div>
		</Button>
	);
};
export default SeeMyPublicProfileButton;
