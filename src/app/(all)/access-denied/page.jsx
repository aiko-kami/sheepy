import Error from "@/components/Errors/Error";
import ERRORS from "@/lib/constants/errors";

const AccessDeniedPage = () => {
	return <Error title={ERRORS.ACCESS_DENIED.UNAUTHORIZED_TITLE} message={ERRORS.ACCESS_DENIED.UNAUTHORIZED_MESSAGE} />;
};

export default AccessDeniedPage;
