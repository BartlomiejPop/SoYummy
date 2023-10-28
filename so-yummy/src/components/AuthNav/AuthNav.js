import { NavLink } from "react-router-dom";
import "./AuthNav.css";
import background from "../../images/welcomePageBg.jpg";
import culteryIcon from "../../icons/cultery.svg";

export const AuthNav = () => {
	return (
		<div className="authNavWrapper">
			<img className="background" src={background} />
			<div className="contentWrapper">
				<img src={culteryIcon} />
				<h2>Welcome to the app!</h2>
				<p className="appDescription">
					This app offers more than just a collection of recipes - it is
					designed to be your very own digital cookbook. You can easily save and
					retrieve your own recipes at any time.
				</p>
				<div className="buttonsWrapper">
					<button className="buttonGreen">
						<NavLink className="link" to="/register">
							Register
						</NavLink>
					</button>
					<button className="buttonTransparent">
						<NavLink className="link" to="/login">
							Log In
						</NavLink>
					</button>
				</div>
			</div>
		</div>
	);
};
