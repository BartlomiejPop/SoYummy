import { Helmet } from "react-helmet";
import Recipes from "../pages/Recipes.js";

export default function Register() {
	return (
		<div>
			<Helmet>
				<title>Recipes</title>
			</Helmet>

			<Recipes />
		</div>
	);
}
