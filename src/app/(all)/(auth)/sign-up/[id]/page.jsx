import VerifyEmailMenu from "@/components/Auth/SignUp/VerifyEmailMenu";
export const metadata = {
	title: "Email verification - Make It",
	description: "Email verification page",
};

const VerifyEmailPage = ({ params }) => {
	const { id } = params;
	return (
		<>
			<VerifyEmailMenu emailValidationId={id} />
		</>
	);
};
export default VerifyEmailPage;
