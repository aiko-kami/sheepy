import Sandwich from "@/components/Navbar/Sandwich";
import Menu from "@/components/Navbar/Menu";
import Login from "@/components/Navbar/Login";

const Header = ({ isHomePage = false, displaySearchButton }) => {
	return (
		<header className={`sticky p-2 z-50 flex justify-between ${isHomePage && "bg-custom-gradiant-dark"}`}>
			<div>
				<Sandwich />
			</div>
			<div className="hidden lg:flex">
				<Menu displaySearchButton={displaySearchButton} />
			</div>
			<div>
				<Login isHomePage={isHomePage} />
			</div>
		</header>
	);
};

export default Header;
