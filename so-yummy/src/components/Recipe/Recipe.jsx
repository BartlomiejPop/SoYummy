import "./Recipe.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import clockIcon from "../../icons/clock.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/recipes/operations";

export const Recipe = () => {
	const { title } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRecipe(title));
	}, [dispatch]);

	return (
		<div className="recipe">
			<h1 className="recipeTitle">{title}</h1>
			<div className="recipeContentBox">
				<p className="recipeAbout">description</p>
				<p className="recipeIngredients">ingredients</p>
				<p className="recipeRecipe">recipe</p>
			</div>
			<button className="recipeFavButton">add to favorites</button>
			<div className="recipeTimeBox">
				<img src={clockIcon} />
				<span className="recipeTime">time</span>
			</div>
		</div>
	);
};

export default Recipe;
