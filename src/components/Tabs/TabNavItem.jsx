const TabNavItem = ({ id, title, activeTab, setActiveTab, activeClass }) => {
	const handleClick = () => {
		setActiveTab(id);
	};

	return (
		<div onClick={handleClick} className={`px-4 ${activeTab === id ? activeClass : ""}`}>
			{title}
		</div>
	);
};
export default TabNavItem;
