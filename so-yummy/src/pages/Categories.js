import { Helmet } from "react-helmet";
import "./Categories.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CategoriesNavigation from "../components/CategoriesNavigation/CategoriesNavigation.jsx";
import CategoriesResults from "../components/CategoriesResults/CategoriesResults.jsx";

export default function Register() {
	return (
		<div>
			<Helmet>
				<title>Categories</title>
			</Helmet>
			<Header />
			<h1 className="CategoriesTitle">Categories</h1>
			<CategoriesNavigation />
			<CategoriesResults />
			<Footer />
		</div>
	);
}
