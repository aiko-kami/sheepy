const UserCardBio = ({ userBio }) => {
	return (
		<div className="md:col-span-2 bg-base-450 shadow-2xl p-6 pb-8">
			<h2 className="text-2xl font-semibold mb-4">My Bio</h2>
			<p className="text-justify">{userBio?.trim() ? userBio : <span className="italic text-gray-400">Bio not available</span>}</p>
		</div>
	);
};
export default UserCardBio;
