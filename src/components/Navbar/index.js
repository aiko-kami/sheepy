import Sandwich from "@/components/Navbar/Sandwich";
import Menu from "@/components/Navbar/Menu";
import Login from "@/components/Navbar/Login";
import { cookies } from "next/headers";

const Header = ({ isHomePage = false, displaySearchButton }) => {
	const token = cookies().get("access_token");

	console.log("🚀 ~ Header ~ token:", token);

	return (
		<header className={`sticky p-2 z-50 flex justify-between ${isHomePage && "bg-custom-gradiant-dark"}`}>
			<div>
				<Sandwich />
			</div>
			<div className="hidden lg:flex">
				<Menu displaySearchButton={displaySearchButton} />
			</div>
			<div>
				<Login isHomePage={isHomePage} isSession={token} />
			</div>
		</header>
	);
};

export default Header;
