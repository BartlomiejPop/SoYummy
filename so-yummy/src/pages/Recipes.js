import { Helmet } from "react-helmet";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { AppBar } from "components/AppBar/AppBar";

export default function Register() {
	return (
		<div>
			<Helmet>
				<title>Registration</title>
			</Helmet>
			<AppBar />
			<RegisterForm />
		</div>
	);
}
