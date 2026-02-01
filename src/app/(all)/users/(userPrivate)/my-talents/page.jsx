import { redirect } from "next/navigation";

import Talents from "@/components/User/UserTalentsPrivate/Talents";
import QuickSkills from "@/components/User/UserTalentsPrivate/QuickSkills";
import Error from "@/components/Errors/Error";

import { ApiGetUserFromSessionServer } from "@/lib/api/userServer";
import { ERRORS } from "@/lib/constants";

export const metadata = {
	title: "My talents - Make It",
	description: "User personal talents page",
};

const MyTalentsPage = async () => {
	const result = await ApiGetUserFromSessionServer();
	if (!result.ok || !result.data || !result.data.user) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.USER_TITLE} message={ERRORS.NOT_FOUND.USER_MESSAGE} extraMessage={result.message} />;
	}

	const user = result.data.user;

	const userId = user?.userId;
	const talents = user?.talents;
	const quickSkills = user?.quickSkills;

	return (
		<>
			<div className="container min-w-full mx-auto px-2 md:px-8">
				<div className="grid md:grid-cols-3 gap-6">
					{/* Quick Skills Section */}
					<div className="md:col-span-1">
						<QuickSkills quickSkills={quickSkills} />
					</div>
					{/* Talents Section */}
					<div className="md:col-span-2">
						<Talents talents={talents} />
					</div>
				</div>
			</div>
		</>
	);
};

export default MyTalentsPage;
