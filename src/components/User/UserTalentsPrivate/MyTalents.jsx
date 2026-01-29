import Talents from "@/components/User/UserTalentsPrivate/Talents";
import QuickSkills from "@/components/User/UserTalentsPrivate/QuickSkills";

const MyTalents = ({ userId, talents, quickSkills }) => {
	return (
		<>
			<div className="grid md:grid-cols-3 gap-6">
				{/* Quick Skills Section */}
				<div className="md:col-span-1">
					<QuickSkills userId={userId} quickSkills={quickSkills} />
				</div>
				{/* Talents Section */}
				<div className="md:col-span-2">
					<Talents userId={userId} talents={talents} />
				</div>
			</div>
		</>
	);
};

export default MyTalents;
