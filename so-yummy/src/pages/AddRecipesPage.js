import { Helmet } from "react-helmet";
// import "./Categories.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AddRecipes from "../components/AddRecipes/AddRecipes.jsx";
import leaves from "../images/leaves.png";
import leaves2 from "../images/leaves2.png";

export default function AddRecipesPage() {
	window.scrollTo(0, 0);
	return (
		<div>
			<Helmet>
				<title>Add recipes</title>
			</Helmet>
			<div className="overlay"></div>
			<Header />
			<AddRecipes />
			<Footer />
		</div>
	);
}
