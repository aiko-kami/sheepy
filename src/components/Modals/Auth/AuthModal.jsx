import { useRouter } from "next/navigation";
import { IoEnterOutline, IoPersonAddOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const AuthModal = ({ closeModal }) => {
	const router = useRouter();

	const handleLogin = () => {
		closeModal();
		router.push("/login");
	};

	const handleSignup = () => {
		closeModal();
		router.push("/sign-up");
	};

	return (
		<>
			<div className="text-slate-300 text-base mb-8">You need to be logged in. Create an account or log in to continue.</div>
			{/* Button Send application (submit form) */}
			<div className="grid grid-cols-2 gap-8 justify-center">
				<Button btnProps={{ type: "button", btnColor: "grayOutline", action: handleLogin }}>
					<div className="flex items-center justify-center">
						<IoEnterOutline className="text-2xl mr-2 mt-0.5" /> Login
					</div>
				</Button>
				<Button btnProps={{ type: "button", btnColor: "green", action: handleSignup }}>
					<div className="flex items-center justify-center">
						<IoPersonAddOutline className="text-xl mr-2 mt-0.5" /> Create account
					</div>
				</Button>
			</div>
		</>
	);
};

export default AuthModal;
