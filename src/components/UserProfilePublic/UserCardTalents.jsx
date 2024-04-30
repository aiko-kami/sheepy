import UserTalentCard from "@/components/Cards/UserTalentCard/UserTalentCard";

const UserCardTalents = () => {
	return (
		<div className="md:col-span-2 bg-base-450 shadow-2xl p-6">
			<h2 className="text-2xl font-semibold mb-4">My talents</h2>
			<ul className="grid tn:grid-cols-2 md:grid-cols-3 gap-4">
				<li>
					<UserTalentCard />
				</li>
				<li>
					<UserTalentCard />
				</li>
				<li>
					<UserTalentCard />
				</li>
				<li>
					<UserTalentCard />
				</li>
				<li>
					<UserTalentCard />
				</li>
				<li>
					<UserTalentCard />
				</li>
			</ul>
		</div>
	);
};
export default UserCardTalents;
