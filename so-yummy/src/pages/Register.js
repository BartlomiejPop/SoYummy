import { Helmet } from "react-helmet";
// import { RegisterForm } from "components/RegisterForm/RegisterForm";
import image from "../images/registerImage.png";
import bg from "../images/registerBg.png";
import "./register.css";
import userIcon from "../icons/user.svg";
import emailIcon from "../icons/email.svg";
import passwordIcon from "../icons/password.svg";

export default function Register() {
	return (
		<div>
			<Helmet>
				<title>Registration</title>
			</Helmet>
			<img className="bg" src={bg} />
			<div className="wrapper">
				<img className="image" src={image} />
				<div className="formWrapper">
					<p className="formText">Registration</p>
					<div className="form">
						<div className="field">
							<img src={userIcon} className="icon" />
							<input className="input" placeholder="Name" type="text" />
						</div>
						<div className="field">
							<img src={emailIcon} className="icon" />
							<input className="input" placeholder="Email" type="text" />
						</div>
						<div className="field">
							<img src={passwordIcon} className="icon" />
							<input className="input" placeholder="Password" type="text" />
						</div>
						<button className="button">Sign up</button>
					</div>
				</div>
			</div>
		</div>
	);
}
