import Sandwich from "@/components/Navbar/Sandwich";
import Menu from "@/components/Navbar/Menu";
import Login from "@/components/Navbar/Login";

const Header = () => {
	return (
		<header className="sticky p-2 z-50 flex justify-between bg-custom-blue-dark">
			<div className="">
				<Sandwich />
			</div>
			<div className="hidden lg:flex">
				<Menu />
			</div>
			<div className="">
				<Login />
			</div>
		</header>
	);
};

export default Header;
