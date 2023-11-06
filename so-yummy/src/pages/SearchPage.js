import { Helmet } from "react-helmet";
import "./Categories.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CategoriesNavigation from "../components/CategoriesNavigation/CategoriesNavigation.jsx";
import CategoriesResults from "../components/CategoriesResults/CategoriesResults.jsx";
import Search from "../components/Search/Search.jsx";
import SearchedRecipes from "../components/SearchedRecipes/SearchedRecipes.jsx";

export default function SearchPage() {
	window.scrollTo(0, 0);
	return (
		<div className="categoriesBackground">
			<Helmet>
				<title>Search</title>
			</Helmet>
			<Header />
			<Search />
			<SearchedRecipes />
			<Footer />
		</div>
	);
}
