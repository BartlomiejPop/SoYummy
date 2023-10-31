import "./HomePageRecipes.css";
import arrowRight from "../../icons/arrow-right.svg";
import { useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors.js";
import { selectBreakfast } from "../../redux/recipes/selectors.js";
import HomePageBreakfast from "../HomePageBreakfast/HomePageBreakfast";

export const HomePageRecipes = () => {
	return <HomePageBreakfast />;
};

export default HomePageRecipes;
