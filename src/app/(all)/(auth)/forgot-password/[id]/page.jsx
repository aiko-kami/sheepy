import ForgotPasswordMenu from "@/components/Auth/ForgotPassword/ForgotPasswordMenu";
export const metadata = {
	title: "Forgot password - Make It",
	description: "Forgot password page",
};

const ForgotPasswordPage = ({ params }) => {
	const { id } = params;
	return (
		<>
			<ForgotPasswordMenu resetToken={id} />
		</>
	);
};
export default ForgotPasswordPage;
