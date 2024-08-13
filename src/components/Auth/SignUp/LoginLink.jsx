import Link from "next/link";

const LoginLink = () => {
	return (
		<>
			{/* Login link */}
			<div className="mt-10 text-center text-sm">
				Already have an account?&nbsp;
				<Link href="/login" className="underline">
					Log in
				</Link>
			</div>
		</>
	);
};

export default LoginLink;
