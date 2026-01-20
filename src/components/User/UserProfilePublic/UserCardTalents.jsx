import UserTalentCard from "@/components/Cards/Talents/UserTalentCard/UserTalentCard";

const UserCardTalents = ({ talents = [] }) => {
	return (
		<div className="md:col-span-2 bg-base-450 shadow-2xl p-6 pb-8">
			<h2 className="text-2xl font-semibold mb-4">My talents</h2>

			{talents && talents.length > 0 ? (
				<ul className="grid tn:grid-cols-2 md:grid-cols-3 gap-4">
					{talents.map((talent, index) => (
						<li key={index}>
							<UserTalentCard talent={talent} />
						</li>
					))}
				</ul>
			) : (
				<p className="italic text-gray-400">No talents found</p>
			)}
		</div>
	);
};
export default UserCardTalents;
