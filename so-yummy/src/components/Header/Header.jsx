import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import background from "../../images/welcomePageBg.jpg";
import culteryIcon from "../../icons/cultery.svg";
import logo from "../../icons/cultery.svg";
import UserPanel from "../UserPanel/UserPanel.jsx";

export const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="header">
			<img
				src={logo}
				className="logo"
				onClick={() => {
					navigate("/home");
				}}
			/>
			<Navigation />
			<UserPanel />
		</div>
	);
};

export default Header;
