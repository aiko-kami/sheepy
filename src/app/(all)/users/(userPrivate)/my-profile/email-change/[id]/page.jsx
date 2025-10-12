import VerifyEmailChangeMenu from "@/components/User/UserProfilePrivate/VerifyEmailChangeMenu";
export const metadata = {
	title: "Email change verification - Make It",
	description: "Email change verification page",
};

const VerifyEmailPage = ({ params }) => {
	const { id } = params;
	return (
		<>
			<VerifyEmailChangeMenu emailChangeValidationId={id} />
		</>
	);
};
export default VerifyEmailPage;
