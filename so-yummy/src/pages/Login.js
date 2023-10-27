import { Helmet } from "react-helmet";
// import { LoginForm } from "components/LoginForm/LoginForm";
import { AppBar } from "../components/AppBar/AppBar";

export default function Login() {
	return (
		<div>
			<Helmet>
				<title>Login</title>
			</Helmet>
			<AppBar />
			{/* <LoginForm /> */}
		</div>
	);
}
