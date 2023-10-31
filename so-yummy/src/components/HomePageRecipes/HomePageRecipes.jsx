import "./HomePageRecipes.css";
import arrowRight from "../../icons/arrow-right.svg";
import { useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors.js";
import { selectBreakfast } from "../../redux/recipes/selectors.js";
import HomePageBreakfast from "../HomePageBreakfast/HomePageBreakfast";
import HomePageMiscellaneous from "../HomePageMiscellaneous/HomePageMiscellaneous.jsx";
import HomePageChicken from "../HomePageChicken/HomePageChicken.jsx";
import HomePageDesserts from "../HomePageDesserts/HomePageDesserts.jsx";

export const HomePageRecipes = () => {
	return (
		<div className="HomePageRecipesBg">
			<HomePageBreakfast />
			<HomePageMiscellaneous />
			<HomePageChicken />
			<HomePageDesserts />
		</div>
	);
};

export default HomePageRecipes;
