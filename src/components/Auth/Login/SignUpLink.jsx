import Link from "next/link";

const SignUpLink = () => {
	return (
		<>
			{/* Sign up link */}
			<div className="mt-10 text-center text-sm">
				New here?&nbsp;
				<Link href="/sign-up" className="underline">
					Sign-up
				</Link>
			</div>
		</>
	);
};

export default SignUpLink;
